"use client";
import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

export default function SortSection() {
  const [activeSort, setActiveSort] = useState<{
    key: string | null;
    direction: "down" | "up" | null;
  }>({ key: null, direction: null });

  const sortOptions = [
    "Favorites",
    "Difficulty",
    "Creator",
    "Map",
    "Checkpoints",
  ];

  const handleSortClick = (option: string) => {
    setActiveSort((prev) => {
      if (prev.key === option) {
        if (prev.direction === "down") return { key: option, direction: "up" };
        if (prev.direction === "up") return { key: null, direction: null };
      }
      return { key: option, direction: "down" };
    });
  };

  const getArrowIcon = (key: string) => {
    if (activeSort.key === key) {
      if (activeSort.direction === "down") {
        return <ChevronDownIcon className="h-5 w-5 text-gray-400" />;
      }
      if (activeSort.direction === "up") {
        return <ChevronUpIcon className="h-5 w-5 text-gray-400" />;
      }
    }
    return null;
  };

  return (
    <div className="items-center justify-center flex">
      <div className="text-white p-2 bg-zinc-700 max-w-screen-md w-full flex flex-wrap items-center gap-4 text-sm md:text-base rounded-md">
        <span className="w-full md:w-auto ml-2">Sort by:</span>
        {sortOptions.map((option) => (
          <button
            key={option}
            onClick={() => handleSortClick(option)}
            className="p-2 rounded-md hover:bg-zinc-600 transition duration-200 flex items-center gap-1"
          >
            {option}
            <span className="ml-1">{getArrowIcon(option)}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
