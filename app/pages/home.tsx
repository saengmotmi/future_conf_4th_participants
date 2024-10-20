import ParticipantCard from "../entities/participants/card";
import type { Participant } from "../entities/participants/types";
import { useParticipantSearch } from "../features/search-participants";

// 더미 데이터
const participants: Participant[] = [
  // {
  //   name: "김철수",
  //   arrivalTime: "14:00",
  //   email: "chulsoo@example.com",
  //   github: "chulsoo",
  //   from: "테크 주식회사",
  //   yearsOfExperience: "3-4",
  //   introduction:
  //     "백엔드 개발자로 일하고 있습니다. 항상 새로운 기술에 관심이 많아요!",
  //   interests: ["앞으로의 커리어 패스", "구직 활동 (취업 및 이직)"],
  // },
  {
    // name: "이영희",
    name: "lee",
    arrivalTime: "14:30",
    email: "younghee@example.com",
    github: "younghee-lee",
    // from: "웹 솔루션즈",
    from: "web",
    yearsOfExperience: "3-4",
    introduction: "asdf",
    // introduction: "프론트엔드 개발자입니다. UI/UX에 관심이 많아요.",
    // interests: ["앞으로의 커리어 패스", "개발 문화"],
    interests: ["asdf", "asdf"],
  },
  // 더 많은 참가자 정보를 여기에 추가할 수 있습니다.
];

export async function loader() {
  let product = await participants;
  return product;
}

export default function Home({ loaderData }: { loaderData: Participant[] }) {
  const { searchTerm, setSearchTerm, filteredParticipants } =
    useParticipantSearch(loaderData);

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-10">밋업 참가자 소개</h1>
      <input
        type="text"
        placeholder="참가자 정보로 검색..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 mb-6 border border-gray-300 rounded"
      />
      <div className="space-y-6">
        {filteredParticipants.map((participant, index) => (
          <ParticipantCard key={index} participant={participant} />
        ))}
      </div>
    </div>
  );
}
