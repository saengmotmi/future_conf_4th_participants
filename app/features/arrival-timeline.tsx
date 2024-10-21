import { useMemo } from "react";

import type { Participant } from "../entities/participants/types";

export const ArrivalTimeline = ({
  participants,
}: {
  participants: Participant[];
}) => {
  const timeSlots = useMemo(() => {
    const slots: { [key: string]: Participant[] } = {};
    participants.forEach((participant) => {
      const hour = participant.arrivalTime.split(":")[0];
      if (!slots[hour]) {
        slots[hour] = [];
      }
      slots[hour].push(participant);
    });
    return Object.entries(slots).sort(([a], [b]) => parseInt(a) - parseInt(b));
  }, [participants]);

  const colors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-teal-500",
    "bg-orange-500",
    "bg-cyan-500",
  ];

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">참가자 도착 예정 시간</h2>
      <div className="space-y-2">
        {timeSlots
          .filter(([hour]) => !!hour)
          .map(([hour, participants], index) => (
            <div key={hour} className="flex items-center">
              <div className="w-20 font-semibold text-right pr-4">
                {hour}:00
              </div>
              <div className="flex-1 flex flex-wrap items-center -my-1">
                {participants.map((participant, i) => (
                  <ParticipantChip
                    key={i}
                    name={participant.name}
                    color={colors[index % colors.length]}
                    github={participant.github}
                  />
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

const ParticipantChip = ({
  name,
  color,
  github,
}: {
  name: string;
  color: string;
  github: string;
}) => (
  <a
    href={`#participant-${github}`}
    className="inline-flex items-center bg-gray-100 rounded-full px-3 py-1 m-1 hover:bg-gray-200 transition-colors"
    onClick={(e) => {
      e.preventDefault();
      const element = document.getElementById(`participant-${github}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }}
  >
    <span className={`w-2 h-2 rounded-full ${color} mr-2 flex-shrink-0`}></span>
    <span className="text-sm truncate">{name}</span>
  </a>
);
