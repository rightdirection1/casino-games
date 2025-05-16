import React from "react";

type GameSkeletonProps = {
  count: number;
};
const GameSkeleton = ({ count }: GameSkeletonProps) => {
  return (
    <>
      {Array.from({ length: count }).map((_, idx) => (
        <div key={idx}>Loading...</div>
      ))}
    </>
  );
};

export default GameSkeleton;
