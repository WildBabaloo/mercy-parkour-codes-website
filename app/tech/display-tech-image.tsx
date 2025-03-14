"use client";

import LoadingSpinner from "@/components/ui/LoadingSpinner";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import HoverVideoPlayer from "react-hover-video-player";

export default function DisplayTechImage(props: {
  item: {
    id: number;
    title: string;
    gif: StaticImageData;
    link: string;
  };
}) {
  return (
    <>
      <div className="border rounded-md shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <Link href={props.item.link}>
          {/* GIF/Tech Image */}
          <div className="relative w-full h-52 overflow-hidden">
            <HoverVideoPlayer
              videoSrc="/images/Tech_Videos/slingshot.mp4"
              pausedOverlay={
                <Image
                  fill
                  src={props.item.gif}
                  alt={props.item.title}
                  className="object-cover"
                />
              }
              loadingOverlay={
                <div>
                  <LoadingSpinner />
                </div>
              }
            />
          </div>

          {/* IF SECTION BELOW WILL BE UNCOMMENTED THE OLD HEIGHT ON THE SECTION ABOVE WAS H-48*/}
          {/* Title 
                  <div className="p-4 bg-gray-700">
                    <h3 className="text-xl font-bold mb-2 text-center">
                      {item.title}
                    </h3>
                  </div>
        */}
        </Link>
      </div>
    </>
  );
}
