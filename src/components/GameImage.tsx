"use client";

import Image from "next/image";
import { useState } from "react";
import { ImageProps } from "@/interfaces/ImageGame";

export default function GameImage({ src, alt }: ImageProps) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      src={imgSrc}
      width={200}
      height={200}
      alt={alt}
      priority={true}
      className="w-full h-30 object-cover rounded-md"
      onError={() => setImgSrc("/fallback-image.jpg")}
    />
  );
}
