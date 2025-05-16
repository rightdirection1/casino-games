import { useEffect, useState, useCallback } from "react";
import { FixedSizeGrid as Grid } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import GameCard from "./GameCard";
import GameSkeleton from "./GameSkeleton";
import { Game } from "../interfaces/Game";

type Props = {
  games: Game[];
};

const CARD_HEIGHT = 280;
const CARD_GAP = 16;
const PAGE_SIZE = 50;

export default function VirtualizedInfiniteGameGrid({ games }: Props) {
  const [displayedGames, setDisplayedGames] = useState<Game[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  // Load more games when page or games list changes
  useEffect(() => {
    setIsLoading(true);
    const nextSlice = games.slice(0, PAGE_SIZE * page);

    // Simulate async loading with a small delay
    const timer = setTimeout(() => {
      setDisplayedGames(nextSlice);
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [page, games]);

  // Scroll handler for infinite loading
  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 && // Near bottom
      !isLoading &&
      displayedGames.length < games.length
    ) {
      setPage((p) => p + 1);
    }
  }, [displayedGames.length, games.length, isLoading]);

  // Attach scroll listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Determine columns based on width for responsive layout
  const getColumnCount = (width: number) => {
    if (width < 768) return 2;
    if (width < 1024) return 4;
    return 6;
  };

  return (
    <div style={{ height: "80vh" }}>
      <AutoSizer>
        {({ width, height }) => {
          const columnCount = getColumnCount(width);
          const columnWidth = Math.floor(
            (width - CARD_GAP * (columnCount - 1)) / columnCount
          );
          const rowCount = Math.ceil(displayedGames.length / columnCount);

          return (
            <>
              <Grid
                columnCount={columnCount}
                columnWidth={columnWidth}
                height={height}
                rowCount={rowCount}
                rowHeight={CARD_HEIGHT}
                width={width}
                style={{ overflowX: "hidden" }}
              >
                {({ rowIndex, columnIndex, style }) => {
                  const gameIndex = rowIndex * columnCount + columnIndex;
                  const game = displayedGames[gameIndex];

                  return (
                    <div
                      style={{
                        ...style,
                        left: style.left + CARD_GAP * columnIndex,
                        top: style.top + CARD_GAP * rowIndex,
                        width: style.width - CARD_GAP,
                        height: style.height - CARD_GAP,
                        padding: 8,
                      }}
                      aria-label={game ? game.name : "Loading game"}
                      role="listitem"
                    >
                      {game ? (
                        <GameCard game={game} />
                      ) : (
                        <GameSkeleton count={1} />
                      )}
                    </div>
                  );
                }}
              </Grid>

              {isLoading && (
                <div
                  className={`mt-4 grid gap-4 px-4`}
                  style={{
                    gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))`,
                  }}
                  aria-live="polite"
                  aria-busy="true"
                >
                  {Array.from({ length: columnCount }).map((_, i) => (
                    <GameSkeleton key={i} count={1} />
                  ))}
                </div>
              )}
            </>
          );
        }}
      </AutoSizer>
    </div>
  );
}
