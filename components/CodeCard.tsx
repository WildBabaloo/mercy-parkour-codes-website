"use client";
import React, { useState } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import {
  HeartIcon,
  BookmarkIcon,
  CheckIcon,
  FlagIcon,
} from "@heroicons/react/24/outline";
import { FaYoutube } from "react-icons/fa";
import { ClipboardIcon } from "lucide-react";
import Link from "next/link";

interface CardProps {
  title: string | null;
  code: string;
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
  // likes,
  imageSrc,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="relative w-full max-w-md rounded-xl overflow-hidden shadow-lg bg-gray-900">
      {/* Image Section */}
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={imageSrc}
          alt={`${title} thumbnail`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover opacity-50"
        />
      </div>

      {/* Content Section */}
      <div className="absolute inset-0 flex flex-col justify-between bg-black bg-opacity-70 p-4">
        {/* Top Section */}
        <div>
          <h3 className="text-white text-lg font-bold">{title}</h3>
          <p className="text-gray-300 text-sm flex items-center space-x-2">
            <FlagIcon className="h-5 w-5 mr-1" />
            {`${checkpoints} | ${code}`}

            {/* Copy Button */}
            <button
              onClick={handleCopy}
              className="ml-2 p-1 rounded hover:bg-gray-700 transition relative group"
              aria-label="Copy to clipboard"
            >
              {copied ? (
                <CheckIcon className="h-4 w-4 text-green-400" />
              ) : (
                <ClipboardIcon className="h-4 w-4 text-gray-400 hover:text-white" />
              )}

              {/* Tooltip */}
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                {copied ? "Copied!" : "Copy"}
              </span>
            </button>
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
              {/* 
              <HeartIcon className="h-5 w-5 text-gray-400" />
              <span>{likes}</span>
              */}

              {video && (
                <Link href={video}>
                  <FaYoutube className="w-6 h-6 rounded hover:bg-gray-700 transition relative group" />
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
