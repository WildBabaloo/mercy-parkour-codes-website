"use client";
import { useEffect, useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function SortSection() {
  const [activeSort, setActiveSort] = useState<{
    key: string | null;
    direction: "down" | "up" | null;
  }>({ key: null, direction: null });
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const sortOptions = [
    "Map_Number",
    "Difficulty",
    "Author",
    "Map",
    "Checkpoints",
    "Favorites",
  ];

  const handleSortClick = (option: string) => {
    setActiveSort((prev) => {
      let newDirection: "down" | "up" | null = null;
      if (prev.key === option) {
        if (prev.direction === "down") {
          newDirection = "up";
        } else if (prev.direction === "up") {
          newDirection = "down";
        }
      } else {
        newDirection = "down";
      }
      return { key: newDirection ? option : null, direction: newDirection };
    });
  };

  useEffect(() => {
    if (activeSort.key) {
      const params = new URLSearchParams(searchParams);
      const sortValue =
        activeSort.direction === "down"
          ? `${activeSort.key}_desc`
          : activeSort.direction === "up"
          ? `${activeSort.key}_asc`
          : null;

      if (sortValue) {
        params.set("sort", sortValue);
      } else {
        params.delete("sort");
      }

      replace(`${pathname}?${params.toString()}`);
    }
  }, [activeSort, searchParams, pathname, replace]);

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
            onClick={() => {
              handleSortClick(option);
            }}
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
