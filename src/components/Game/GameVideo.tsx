"use client";

export default function GameVideo({ src }: { src: string }) {
  return (
    <video autoPlay muted loop className="w-full h-30 object-cover rounded-md">
      <source src={src} type="video/webm" />
      Your browser does not support video.
    </video>
  );
}
