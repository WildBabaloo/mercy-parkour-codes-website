"use client";
import NavBarUI from "../components/ui/NavBar";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import MercyGIF from "@/images/tumblr_p8ffrwv7PA1rignt3o1_500-2380950851.gif";

export default function Home() {
  return (
    <>
      <NavBarUI />
      <div className="flex">
        Explore all things Mercy Parkour with 
        <span>
          <ul>
            <li>A Complete Code Lists</li>
            <li>Customizable Filters</li>
            <li>A Tech Learning Hub</li>
            <li>Intuitive Interfaces</li>
          </ul>
        </span>
        <div className="w-[450px]">
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
    </>
  );
}
