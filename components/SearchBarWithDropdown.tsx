"use client";

import { useState } from "react";
import { CodeInput } from "@/components/ui/CodeInput";
import DoubleEndedCodeSlider from "./ui/DoubleEndedCodeSlider";
import Dropdown_Menu from "./ui/DropdownMenu";

const SearchBarWithDropdown = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <>
      {/* Search Bar */}
      <CodeInput
        type="search"
        placeholder="Search by author, code or map..."
        className=""
        onMenuToggle={() => setIsMenuVisible(!isMenuVisible)}
      />

      {/* Dropdown Menu */}
      {isMenuVisible && (
        <div className="flex items-center justify-center mt-4">
          <div className="max-w-screen-md w-full bg-gray-700 rounded-md shadow-lg p-4 text-white space-y-4">
            {/* Filter Options */}
            <div className="flex flex-wrap gap-2">
              <Dropdown_Menu
                menuHeader="Category..."
                menuItems={categoryOptionItems.sort()}
              />
              <Dropdown_Menu
                menuHeader="Map..."
                menuItems={mapOptionItems.sort()}
              />
              <Dropdown_Menu
                menuHeader="Difficulty..."
                menuItems={difficultyOptionItems}
              />
              <Dropdown_Menu
                menuHeader="Played/Not Played..."
                menuItems={playOptionItems}
              />
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

const categoryOptionItems = [
  "Rez Map",
  "Clouds",
  "Stuck/Balances",
  "Many Orbs",
  "Softlock/Hardlock",
];

const mapOptionItems = [
  "Antarctic Peninsula",
  "Busan",
  "Ilios",
  "Lijiang Tower",
  "Nepal",
  "Oasis",
  "Samoa",
  "Circuit Royal",
  "Dorado",
  "Havana",
  "Junkertown",
  "Rialto",
  "Route 66",
  "Shambali Monastery",
  "Watchpoint: Gibraltar",
  "New Junk City",
  "Suravasa",
  "Blizzard World",
  "Eichenwalde",
  "Hollywood",
  "King's Row",
  "Midtown",
  "Numbani",
  "Paraíso",
  "Colosseo",
  "Esperança",
  "New Queen Street",
  "Runasapi",
  "Hanaoka",
  "Throne of Anubis",
  "Château Guillard",
  "Kanezaka",
  "Malevento",
  "Petra",
  "Hanamura",
  "Horizon Lunar Colony",
  "Paris",
  "Temple of Anubis",
  "Volskaya Industries",
  "Ayutthaya",
  "Black Forest",
  "Castillo",
  "Ecopoint: Antarctica",
  "Necropolis",
  "Workshop Chamber",
  "Workshop Expanse",
  "Workshop Green Screen",
  "Workshop Island",
  "Practice Range",
];

const difficultyOptionItems = [
  "Multi Difficulty",
  "Beginner",
  "Easy",
  "Low Intermediate",
  "Intermediate",
  "High Intermediate",
  "Hard",
  "Very Hard",
  "Expert",
  "Super Expert",
];

const playOptionItems = ["Played", "Not Played"];

export default SearchBarWithDropdown;
