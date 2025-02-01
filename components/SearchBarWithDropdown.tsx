"use client";

import { useState, useEffect } from "react";
import { CodeInput } from "@/components/ui/CodeInput";
// import DoubleEndedCodeSlider from "./ui/DoubleEndedCodeSlider";
import Dropdown_Menu from "./ui/DropdownMenu";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const SearchBarWithDropdown = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filters, setFilters] = useState({
    category: "",
    map: "",
    difficulty: "",
    play_status: "",
  });

  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  /*
  useEffect(() => {
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        const keyValue = key === "category" ? stringCategory(value) : value;
        if (keyValue) params.set(key, keyValue);
      }
    });


    replace(`${pathname}?${params.toString()}`);
  }, [filters, pathname, replace]);
  */

  const updateURL = useDebouncedCallback(() => {
    const params = new URLSearchParams(searchParams);
    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        const keyValue = key === "category" ? stringCategory(value) : value;
        if (keyValue) params.set(key, keyValue);
      }
    });

    if (searchText) {
      params.set("search", searchText);
    } else {
      params.delete("search");
    }

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  useEffect(() => {
    updateURL.callback();
  }, [filters, searchText, pathname, updateURL]);

  const updateFilter = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const clearAllFilters = () => {
    if (!checkIfFiltersAreActive()) return;
    const params = new URLSearchParams(searchParams);
    deleteFilterParams(params);
    setFilters({ category: "", map: "", difficulty: "", play_status: "" });
    replace(`${pathname}?${params.toString()}`);
  };

  const checkIfFiltersAreActive = () => {
    return (
      filters.category !== "" ||
      filters.map !== "" ||
      filters.difficulty !== "" ||
      filters.play_status !== ""
    );
  };

  const deleteFilterParams = (params: URLSearchParams) => {
    params.delete("category");
    params.delete("map");
    params.delete("difficulty");
    params.delete("play_status");
  };

  return (
    <>
      {/* Search Bar */}
      <CodeInput
        type="search"
        placeholder="Search by author, code or map..."
        className=""
        onMenuToggle={() => setIsMenuVisible(!isMenuVisible)}
        searchText={searchText}
        setSearchText={setSearchText}
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
                urlHeader="category"
                selected={filters.category}
                setSelected={updateFilter}
              />
              <Dropdown_Menu
                menuHeader="Map..."
                menuItems={mapOptionItems.sort()}
                urlHeader="map"
                selected={filters.map}
                setSelected={updateFilter}
              />
              <Dropdown_Menu
                menuHeader="Difficulty..."
                menuItems={difficultyOptionItems}
                urlHeader="difficulty"
                selected={filters.difficulty}
                setSelected={updateFilter}
              />
              <Dropdown_Menu
                menuHeader="Played/Not Played..."
                menuItems={playOptionItems}
                urlHeader="play_status"
                selected={filters.play_status}
                setSelected={updateFilter}
              />
            </div>
            {/* Slider */}
            {/* <DoubleEndedCodeSlider /> */}
            {/* Clear Filter Button */}
            <button
              className="w-full py-2 text-center bg-orange-500 rounded-md hover:bg-orange-600"
              onClick={clearAllFilters}
            >
              CLEAR FILTERS
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const stringCategory = (category: string) => {
  switch (category) {
    case "Clouds":
      return "Cloud";
    case "Many Orbs":
      return "Many_Orbs";
    case "Softlock/Hardlock":
      return "Softlock";
    case "Stuck/Balances":
      return "Stuck_Balance";
    case "Rez Map":
      return "Rez Map";
    default:
      return null;
  }
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
