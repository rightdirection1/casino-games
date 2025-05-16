import dynamic from "next/dynamic";
import { useSlotsGames } from "@/hooks/useSlotsGames";
import { useLanguage } from "../context/LanguageCtx";

const ResponsiveVirtualGrid = dynamic(() => import("../components/GameGrid"), {
  ssr: false,
});

export default function Home() {
  const { lang } = useLanguage();

  const { games, loading, error } = useSlotsGames();

  if (loading) return <p>Loading games...</p>;
  if (error) return <p>Error: {error}</p>;
  if (games.length === 0) return <p>No games found</p>;

  return (
    <>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-red-500 drop-shadow-lg">
          {lang === "en" ? "Slots games" : "Слот игри"}
        </h1>

        {loading ? (
          <p>Loading games...</p>
        ) : games.length === 0 ? (
          <p>No games available</p>
        ) : (
          <ResponsiveVirtualGrid games={games} />
        )}
      </main>
    </>
  );
}
