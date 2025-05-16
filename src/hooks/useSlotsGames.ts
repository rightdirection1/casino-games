import { useEffect, useState } from "react";
import { Game } from "../interfaces/Game";

export function useSlotsGames() {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGames = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("https://cdn.palmsbet.com/static/games.json");
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
        const data: Game[] = await res.json();

        const slots = data.filter((g) => g.category === "slots");
        slots.sort((a, b) => a.index - b.index);
        setGames(slots);
      } catch (err: unknown) {
        console.error("Failed to fetch games", err);
        setError("Failed to fetch games");
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  return { games, loading, error };
}
