"use client";
import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { HeartIcon, ShareIcon, CheckIcon } from "@heroicons/react/24/outline";

interface CardProps {
  title: string | null;
  code: string | null;
  difficulty: string | null;
  mapper: string | null;
  date: string | null;
  likes: number | null;
  imageSrc: StaticImageData;
}

const Card: React.FC<CardProps> = ({
  title,
  code,
  difficulty,
  mapper,
  date,
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
          className="object-cover opacity-30"
        />
      </div>

      {/* Content Section */}
      <div className="absolute inset-0 flex flex-col justify-between bg-black bg-opacity-70 p-4">
        {/* Top Section */}
        <div>
          <h3 className="text-white text-lg font-bold">{title}</h3>
          <p className="text-gray-300 text-sm">{code}</p>
          <p className="text-gray-400 text-sm">{difficulty}</p>
        </div>

        {/* Bottom Section */}
        <div className="text-gray-400 text-sm">
          <p>
            Mapped by: <span className="text-white">{mapper}</span>
          </p>
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center space-x-2">
              <HeartIcon className="h-5 w-5 text-gray-400" />
              <span>{likes}</span>
            </div>
            <div className="flex items-center space-x-2">
              <HeartIcon className="h-5 w-5 text-gray-400" />
              <CheckIcon className="h-5 w-5 text-gray-400" />
              <ShareIcon className="h-5 w-5 text-gray-400" />
            </div>
            <p>{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
