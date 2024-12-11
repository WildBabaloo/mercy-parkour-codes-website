"use client";
import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import {
  HeartIcon,
  BookmarkIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";

interface CardProps {
  title: string | null;
  code: string | null;
  checkpoints: string;
  difficulty: string;
  mapper: string;
  likes: number;
  imageSrc: StaticImageData;
}

const Card: React.FC<CardProps> = ({
  title,
  code,
  checkpoints,
  difficulty,
  mapper,
  likes,
  imageSrc,
}) => {
  return (
    <div className="relative w-full max-w-md rounded-xl overflow-hidden shadow-lg bg-gray-900">
      {/* Image Section */}
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={imageSrc}
          alt={`${title} thumbnail`}
          layout="fill"
          className="object-cover opacity-50"
        />
      </div>

      {/* Content Section */}
      <div className="absolute inset-0 flex flex-col justify-between bg-black bg-opacity-70 p-4">
        {/* Top Section */}
        <div>
          <h3 className="text-white text-lg font-bold">{title}</h3>
          <p className="text-gray-300 text-sm">{`${code} | ${checkpoints} checkpoints`}</p>
          <p className="text-gray-400 text-sm">{difficulty}</p>
        </div>

        {/* Bottom Section */}
        <div className="absolute bottom-4 left-4 text-gray-400 text-sm">
          {/* Mapped By & Likes */}
          <p>
            Mapped by: <span className="text-white">{mapper}</span>
          </p>
          <div className="flex items-center space-x-4 mt-2">
            {/* Likes */}
            <div className="flex items-center space-x-2">
              <HeartIcon className="h-5 w-5 text-gray-400" />
              <span>{likes}</span>
            </div>
          </div>
        </div>

        {/* Right Section: Vertical Icons */}
        <div className="absolute bottom-4 right-4 flex flex-col space-y-2 items-end">
          <HeartIcon className="h-5 w-5 text-gray-400" />
          <CheckIcon className="h-5 w-5 text-gray-400" />
          <BookmarkIcon className="h-5 w-5 text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default Card;
