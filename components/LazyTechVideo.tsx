"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import HoverVideoPlayer from "react-hover-video-player";
import LoadingSpinner from "./ui/LoadingSpinner";

interface LazyTechVideoProps {
  videoSrc: string;
  imageSrc: string;
  alt: string;
}

export default function LazyTechVideo({
  videoSrc,
  imageSrc,
  alt,
}: LazyTechVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const [isNear, setIsNear] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const element = containerRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsNear(true);
          observer.disconnect;
        }
      },
      {
        rootMargin: "300px",
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const shouldLoadVideo = isNear || isHovered;

  return (
    <div
      ref={containerRef}
      className="relative w-full h-52 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
    >
      {!shouldLoadVideo ? (
        <Image
          fill
          src={imageSrc}
          alt={alt}
          className="object-cover"
          sizes="{max-width: 768px} 100vw, 384px"
        />
      ) : (
        <HoverVideoPlayer
          videoSrc={videoSrc}
          pausedOverlay={
            <Image
              fill
              src={imageSrc}
              alt={alt}
              className="object-cover"
              sizes="{max-width: 768px} 100vw, 384px"
            />
          }
          loadingOverlay={
            <div className="flex items-center justify-center w-full h-full">
              <LoadingSpinner />
            </div>
          }
        />
      )}
    </div>
  );
}
