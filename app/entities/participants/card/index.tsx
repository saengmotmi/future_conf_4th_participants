import { Suspense } from "react";
import { Await } from "react-router";

import * as Icons from "../../../icons";
import { fetchImage } from "../../../utils";
import type { Participant } from "../types";
import {
  Avatar,
  EmptyAvatar,
  GithubLink,
  InfoItem,
  InterestsList,
} from "./items";

// 참가자 카드 컴포넌트
const ParticipantCard = ({ participant }: { participant: Participant }) => {
  const promise = fetchImage(`https://github.com/${participant.github}.png`);

  return (
    <div
      id={`participant-${participant.github}`}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <div className="flex items-center gap-4 p-4 bg-gray-50">
        <Suspense fallback={<EmptyAvatar name={participant.name} />}>
          <Await
            resolve={promise}
            errorElement={<EmptyAvatar name={participant.name} />}
          >
            <Avatar participant={participant} />
          </Await>
        </Suspense>
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
            경력 {participant.yearsOfExperience}
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
