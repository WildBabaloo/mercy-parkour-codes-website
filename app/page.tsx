"use client";
import NavBarUI from "../components/ui/NavBar";
// import { AspectRatio } from "@/components/ui/aspect-ratio";
// import Image from "next/image";
// import MercyGIF from "@/public/images/tumblr_p8ffrwv7PA1rignt3o1_500-2380950851.gif";
import Ecopoint from "@/public/images/Map_Images/EcoPointAntarctica.png";
import TitleScreen from "@/components/TitleScreen";
import Card from "@/components/CodeCard";

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
              <h2 className="text-white text-center text-3xl mb-6 font-extrabold">
                Today&apos;s Featured Course
              </h2>
              <div className="flex items-center justify-center">
                <Card
                  key="3157"
                  title="Ecopoint: Antarctica (Winter)"
                  code="QTXG4"
                  checkpoints="45"
                  difficulty="Intermediate"
                  mapper="OnMyKnees"
                  video="https://www.youtube.com/watch?v=tJMdXxLr7BU"
                  likes={0}
                  imageSrc={Ecopoint}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
