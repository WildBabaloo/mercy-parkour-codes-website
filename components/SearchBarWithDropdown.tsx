"use client";

import { useState } from "react";
import { CodeInput } from "@/components/ui/CodeInput";
import DoubleEndedCodeSlider from "./ui/DoubleEndedCodeSlider";

const SearchBarWithDropdown = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <>
      {/* Search Bar */}
      <CodeInput
        type="search"
        placeholder="Search..."
        className=""
        onMenuToggle={() => setIsMenuVisible(!isMenuVisible)}
      />

      {/* Dropdown Menu */}
      {isMenuVisible && (
        <div className="flex items-center justify-center mt-4">
          <div className="max-w-screen-md w-full bg-gray-700 rounded-md shadow-lg p-4 text-white space-y-4">
            {/* Filter Options */}
            <div className="flex flex-wrap gap-2">
              <button className="px-3 py-1 rounded-full bg-gray-600 hover:bg-gray-500">
                Category...
              </button>
              <button className="px-3 py-1 rounded-full bg-gray-600 hover:bg-gray-500">
                Map...
              </button>
              <button className="px-3 py-1 rounded-full bg-gray-600 hover:bg-gray-500">
                Difficulty...
              </button>
              <button className="px-3 py-1 rounded-full bg-gray-600 hover:bg-gray-500">
                Not Played...
              </button>
            </div>
            {/* Slider */}
            <DoubleEndedCodeSlider />
            {/* Clear Filter Button */}
            <button className="w-full py-2 text-center bg-orange-500 rounded-md hover:bg-orange-600">
              CLEAR FILTERS
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchBarWithDropdown;
