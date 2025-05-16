import { Game } from "../interfaces/Game";

export const sortByIndex = (games: Game[]): Game[] =>
  games.sort((a, b) => a.index - b.index);
