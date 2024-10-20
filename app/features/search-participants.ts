import { useState } from "react";
import type { Participant } from "../entities/participants/types";

export const useParticipantSearch = (participants: Participant[]) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredParticipants = participants.filter((participant) =>
    Object.values(participant).some((value) => {
      if (typeof value === "string") {
        return value.toLowerCase().includes(searchTerm.toLowerCase());
      } else if (Array.isArray(value)) {
        return value.some(
          (item) =>
            typeof item === "string" &&
            item.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
      return false;
    })
  );

  return { searchTerm, setSearchTerm, filteredParticipants };
};
