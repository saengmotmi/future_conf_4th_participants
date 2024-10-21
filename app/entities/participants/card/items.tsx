import { useState } from "react";
import type { Participant } from "../types";

// 아이콘 컴포넌트
export const Icon = ({ children }: { children: React.ReactNode }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4"
  >
    {children}
  </svg>
);

// 참가자 정보 항목 컴포넌트
export const InfoItem = ({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) => (
  <div className="flex items-center gap-2">
    <Icon>{icon}</Icon>
    <span className="text-sm">{children}</span>
  </div>
);

// 깃허브 링크 컴포넌트
export const GithubLink = ({ github }: { github: string }) => (
  <a
    href={`https://github.com/${github}`}
    target="_blank"
    rel="noopener noreferrer"
    className="text-sm text-blue-500 hover:underline"
  >
    {github}
  </a>
);

// 관심사 리스트 컴포넌트
export const InterestsList = ({ interests }: { interests: string[] }) => (
  <div className="mt-2">
    <h4 className="text-sm font-semibold mb-1">최근 관심사 및 고민:</h4>
    <ul className="list-disc list-inside text-sm">
      {interests.map((interest, i) => (
        <li key={i}>{interest}</li>
      ))}
    </ul>
  </div>
);

// EmptyAvatar 컴포넌트
export const EmptyAvatar = ({ name }: { name: string }) => (
  <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold text-xl">
    {name[0].toUpperCase()}
  </div>
);

export const Avatar = ({ participant }: { participant: Participant }) => {
  return (
    <>
      <div className="w-16 h-16 rounded-full overflow-hidden">
        <img
          src={`https://github.com/${participant.github}.png`}
          alt={participant.name}
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
      </div>
    </>
  );
};
