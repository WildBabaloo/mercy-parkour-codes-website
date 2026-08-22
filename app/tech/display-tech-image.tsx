"use client";

import LazyTechVideo from "@/components/LazyTechVideo";
import { StaticImageData } from "next/image";
import Link from "next/link";

export default function DisplayTechImage(props: {
  item: {
    id: number;
    title: string;
    gif: StaticImageData;
    videoPath: string;
    link: string;
  };
}) {
  return (
    <>
      <div className="border rounded-md shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <Link href={props.item.link}>
          {/* GIF/Tech Image */}
          <LazyTechVideo
            videoSrc={props.item.videoPath}
            imageSrc={props.item.gif}
            alt={props.item.title}
          />

          {/* PUT TECH NAME UNDER TECH CARD. COMMENTED IN CASE ITS NEEDED IN THE FUTURE 

          <div className="p-4">
            <h3 className="text-xl font-bold">{props.item.title}</h3>
          </div>
          
          */}
        </Link>
      </div>
    </>
  );
}
