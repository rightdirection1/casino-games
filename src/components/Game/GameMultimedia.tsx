"use client";

import { Game } from "../../interfaces/Game";
import GameImage from "./GameImage";
import GameVideo from "./GameVideo";
import { BASE_URL } from "@/constants/baseURL";

type Props = {
  game: Game;
};

export default function GameMultimedia({ game }: Props) {
  if (game.image && game.image.endsWith(".webm")) {
    return <GameVideo src={`${BASE_URL}${game.image}`} />;
  }

  const imageSrc = game.image?.startsWith("http")
    ? game.image
    : `${BASE_URL}${game.image}`;

  return <GameImage src={imageSrc} alt={game.name} />;
}
