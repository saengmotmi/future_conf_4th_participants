import ParticipantCard from "../entities/participants/card";
import type { Participant } from "../entities/participants/types";
import { useParticipantSearch } from "../features/search-participants";

export async function loader() {
  const participants = (await fetch(
    "https://pub-fbb53ae5c5f047428b2e550e1deccc50.r2.dev/full-participants-data.json"
  ).then((res) => res.json())) as Participant[];
  return participants;
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
