// utils/getSlots.ts
import { Game } from "@/interfaces/Game";

const getSlots = (games: Game[]): Game[] => {
  if (!Array.isArray(games)) return [];
  return games
    .filter((g) => g.category === "slots")
    .sort((a, b) => a.index - b.index);
};

export default getSlots;
