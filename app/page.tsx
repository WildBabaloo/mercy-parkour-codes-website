"use client";
import NavBarUI from "../components/ui/NavBar";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import MercyGIF from "@public/images/tumblr_p8ffrwv7PA1rignt3o1_500-2380950851.gif";
import TitleScreen from "@/components/TitleScreen";

export default function Home() {
  return (
    <>
      <div>
        {/* Navbar */}
        <NavBarUI />
        {/* Content */}
        <div className="h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 flex items-center justify-center">
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
            {/* Title Screen */}
            <div className="w-full text-center md:text-left">
              <TitleScreen />
            </div>
            {/* Image/GIF */}
            <div className="w-full md:w-[60%] lg:w-[50%] xl:w-[850px] mx-auto md:mx-0">
              <AspectRatio ratio={16 / 9}>
                <Image
                  src={MercyGIF}
                  alt="Image"
                  fill={true}
                  className="rounded-md object-cover"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
