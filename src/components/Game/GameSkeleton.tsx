import React from "react";

type GameSkeletonProps = {
  count: number;
};

const GameSkeleton = ({ count }: GameSkeletonProps) => {
  return (
    <>
      {Array.from({ length: count }).map((_, idx) => (
        <div
          key={idx}
          className="animate-pulse bg-gradient-to-br from-gray-800 via-purple-900 to-gray-700 rounded-xl shadow-lg flex flex-col items-center justify-center p-4 h-[260px] w-full border-2 border-gray-700/30"
        >
          <div className="bg-gray-700/60 rounded-lg w-full h-32 mb-4" />
          <div className="h-4 w-3/4 bg-gray-600/60 rounded mb-2" />
          <div className="h-4 w-1/2 bg-gray-600/40 rounded mb-4" />
          <div className="flex gap-2 w-full justify-center">
            <div className="h-8 w-8 bg-gray-700/50 rounded-full" />
            <div className="h-8 w-8 bg-gray-700/50 rounded-full" />
            <div className="h-8 w-8 bg-gray-700/50 rounded-full" />
          </div>
        </div>
      ))}
    </>
  );
};

export default GameSkeleton;
