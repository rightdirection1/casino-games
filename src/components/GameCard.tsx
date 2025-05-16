import { Game } from "../interfaces/Game";
import GameMedia from "./GameMultimedia";

export default function GameCard({ game }: { game: Game }) {
  return (
    <div className="bg-white bg-opacity-5 backdrop-blur-sm border border-white/10 rounded-2xl shadow-md p-4 flex flex-col items-center hover:scale-105 hover:shadow-xl transition-all duration-300">
      <div className="w-full aspect-video overflow-hidden rounded-xl mb-4">
        <GameMedia game={game} />
      </div>
      <p className="text-sm sm:text-base text-black font-medium text-center truncate w-full">
        {game.name}
      </p>
    </div>
  );
}
