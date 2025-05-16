import dynamic from "next/dynamic";
import { useSlotsGames } from "@/hooks/useSlotsGames";
import { useLanguage } from "../context/LanguageCtx";

const ResponsiveVirtualGrid = dynamic(
  () => import("../components/Game/GameGrid"),
  {
    ssr: false,
  }
);

export default function Home() {
  const { translations } = useLanguage();

  const { games, loading, error } = useSlotsGames();

  if (loading) return <p>{translations?.["load_more"]}</p>;
  if (error) return <p>{translations?.["error_fetching"]}</p>;
  if (games.length === 0) return <p>{translations?.["no_games"]}</p>;

  return (
    <>
      <main className="max-w-7xl mx-auto px-4 py-8 pt-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-red-500 drop-shadow-lg">
          {translations?.["title"]}
        </h1>
        {loading ? (
          <p>{translations?.["load_more"]}</p>
        ) : games.length === 0 ? (
          <p>{translations?.["no_games"]}</p>
        ) : (
          <ResponsiveVirtualGrid games={games} />
        )}
      </main>
    </>
  );
}
