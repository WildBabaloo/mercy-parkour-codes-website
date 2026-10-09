"use client";

import Image, { StaticImageData } from "next/image";
import HoverVideoPlayer from "react-hover-video-player";
import LoadingSpinner from "./ui/LoadingSpinner";

interface LazyTechVideoProps {
  videoSrc: string;
  imageSrc: StaticImageData;
  alt: string;
}

export default function LazyTechVideo({
  videoSrc,
  imageSrc,
  alt,
}: LazyTechVideoProps) {
  return (
    <div className="relative w-full h-52 overflow-hidden">
      <HoverVideoPlayer
        videoSrc={videoSrc}
        sizingMode="container"
        className="!absolute inset-0 w-full h-full"
        videoClassName="object-cover"
        preload="none"
        unloadVideoOnPaused
        pausedOverlay={
          <Image
            fill
            src={imageSrc}
            alt={alt}
            placeholder="blur"
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 384px"
          />
        }
        loadingOverlay={
          <div className="flex items-center justify-center w-full h-full">
            <LoadingSpinner />
          </div>
        }
      />
    </div>
  );
}
