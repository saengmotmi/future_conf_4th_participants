import type { Participant } from "./types";
import * as Icons from "../../icons";
import {
  Avatar,
  AvatarImage,
  Card,
  CardContent,
  CardHeader,
  CardSubtitle,
  CardTitle,
  GithubLink,
  Icon,
  InfoGrid,
  InfoItem,
  InfoText,
  InterestsList,
  InterestsTitle,
  InterestsUl,
  Introduction,
} from "./styles";

// 아이콘 컴포넌트
const IconComponent = ({ children }: { children: React.ReactNode }) => (
  <Icon
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </Icon>
);

// 참가자 정보 항목 컴포넌트
const InfoItemComponent = ({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) => (
  <InfoItem>
    <IconComponent>{icon}</IconComponent>
    <InfoText>{children}</InfoText>
  </InfoItem>
);

// 깃허브 링크 컴포넌트
const GithubLinkComponent = ({ github }: { github: string }) => (
  <GithubLink
    href={`https://github.com/${github}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    {github}
  </GithubLink>
);

// 관심사 리스트 컴포넌트
const InterestsListComponent = ({ interests }: { interests: string[] }) => (
  <InterestsList>
    <InterestsTitle>최근 관심사 및 고민:</InterestsTitle>
    <InterestsUl>
      {interests.map((interest, i) => (
        <li key={i}>{interest}</li>
      ))}
    </InterestsUl>
  </InterestsList>
);

// 참가자 카드 컴포넌트
const ParticipantCard = ({ participant }: { participant: Participant }) => (
  <Card>
    <CardHeader>
      <Avatar>
        <AvatarImage
          src={`https://github.com/${participant.github}.png`}
          alt={participant.name}
        />
      </Avatar>
      <div>
        <CardTitle>{participant.name}</CardTitle>
        <CardSubtitle>{participant.from}</CardSubtitle>
      </div>
    </CardHeader>
    <CardContent>
      <InfoGrid>
        <InfoItemComponent icon={<Icons.Circle />}>
          도착 예정: {participant.arrivalTime}
        </InfoItemComponent>
        <InfoItemComponent icon={<Icons.CareerYears />}>
          경력 {participant.yearsOfExperience}년차
        </InfoItemComponent>
        <InfoItemComponent icon={<Icons.Email />}>
          {participant.email}
        </InfoItemComponent>
        <InfoItemComponent icon={<Icons.Github />}>
          <GithubLinkComponent github={participant.github} />
        </InfoItemComponent>
        <Introduction>{participant.introduction}</Introduction>
        <InterestsListComponent interests={participant.interests} />
      </InfoGrid>
    </CardContent>
  </Card>
);

export default ParticipantCard;
