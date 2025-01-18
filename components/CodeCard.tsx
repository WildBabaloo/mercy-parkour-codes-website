"use client";
import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import {
  HeartIcon,
  BookmarkIcon,
  CheckIcon,
  FlagIcon,
} from "@heroicons/react/24/outline";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";

interface CardProps {
  title: string | null;
  code: string | null;
  checkpoints: string;
  difficulty: string;
  mapper: string;
  video: string | null;
  likes: number;
  imageSrc: StaticImageData;
}

const Card: React.FC<CardProps> = ({
  title,
  code,
  checkpoints,
  difficulty,
  mapper,
  video,
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
          fill
          className="object-cover opacity-50"
        />
      </div>

      {/* Content Section */}
      <div className="absolute inset-0 flex flex-col justify-between bg-black bg-opacity-70 p-4">
        {/* Top Section */}
        <div>
          <h3 className="text-white text-lg font-bold">{title}</h3>
          <p className="text-gray-300 text-sm flex space-x-2">
            <FlagIcon className="h-5 w-5 mr-1" />
            {`${checkpoints} | ${code}`}
          </p>
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
              {video && (
                <Link href={video}>
                  <FaYoutube className="w-6 h-6" />
                </Link>
              )}
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
