"use client";
import NavBarUI from "../components/ui/NavBar";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import MercyGIF from "@/images/tumblr_p8ffrwv7PA1rignt3o1_500-2380950851.gif";
import TitleScreen from "@/components/TitleScreen";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <>
      <div>
        {/* Navbar */}
        <NavBarUI />
        {/* Content */}
        <div className="h-screen bg-black flex items-center justify-center">
          <div className="flex bg-black ml-[10%] mr-[10%] items-center">
            {/* Title Screen */}
            <div className="w-full text-center">
              <Input type="search" placeholder="Search..." className="mb-8" />
              <TitleScreen />
            </div>
            {/* Image/GIF */}
            <div className="w-[850px] m-20">
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
