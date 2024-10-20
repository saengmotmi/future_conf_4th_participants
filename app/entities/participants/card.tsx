import type { Participant } from "./types";
import * as Icons from "../../icons";
import { useState } from "react";

// 아이콘 컴포넌트
const Icon = ({ children }: { children: React.ReactNode }) => (
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
const InfoItem = ({
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
const GithubLink = ({ github }: { github: string }) => (
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
const InterestsList = ({ interests }: { interests: string[] }) => (
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
const EmptyAvatar = ({ name }: { name: string }) => (
  <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold text-xl">
    {name[0].toUpperCase()}
  </div>
);

const Avatar = ({ participant }: { participant: Participant }) => {
  const [imageError, setImageError] = useState(false);

  console.log(imageError);

  return (
    <>
      {imageError ? (
        <EmptyAvatar name={participant.name} />
      ) : (
        <div className="w-16 h-16 rounded-full overflow-hidden">
          <img
            src={`https://github.com/${participant.github}.png`}
            alt={participant.name}
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        </div>
      )}
    </>
  );
};

// 참가자 카드 컴포넌트
const ParticipantCard = ({ participant }: { participant: Participant }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="flex items-center gap-4 p-4 bg-gray-50">
        <Avatar participant={participant} />
        <div>
          <h2 className="text-xl font-bold">{participant.name}</h2>
          <p className="text-sm text-gray-600">{participant.from}</p>
        </div>
      </div>
      <div className="p-4">
        <div className="space-y-2">
          <InfoItem icon={<Icons.Circle />}>
            도착 예정: {participant.arrivalTime}
          </InfoItem>
          <InfoItem icon={<Icons.CareerYears />}>
            경력 {participant.yearsOfExperience}년차
          </InfoItem>
          <InfoItem icon={<Icons.Email />}>{participant.email}</InfoItem>
          <InfoItem icon={<Icons.Github />}>
            <GithubLink github={participant.github} />
          </InfoItem>
          <p className="text-sm mt-2">{participant.introduction}</p>
          <InterestsList interests={participant.interests} />
        </div>
      </div>
    </div>
  );
};

export default ParticipantCard;
