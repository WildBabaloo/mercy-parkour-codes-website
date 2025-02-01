"use client";
import { MouseEvent } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

export default function Dropdown_Menu(props: {
  menuHeader: string;
  menuItems: string[];
  urlHeader: string;
  selected: string;
  setSelected: (key: string, value: string) => void;
}) {
  const { menuHeader, menuItems, urlHeader, selected, setSelected } = props;

  const handleClearSingleFilterOption = (event: MouseEvent) => {
    event.stopPropagation();
    setSelected(urlHeader, "");
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <button className="px-3 py-1 rounded-full bg-gray-600 hover:bg-gray-500 capitalize flex items-center">
          {selected && selected !== menuHeader ? (
            <div className="flex items-center">
              {selected}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-red-500 ml-2 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={handleClearSingleFilterOption}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          ) : (
            menuHeader
          )}
        </button>
      </DropdownTrigger>

      <DropdownMenu
        disallowEmptySelection
        aria-label="Filter selection"
        selectedKeys={selected ? new Set([selected]) : new Set([menuHeader])}
        selectionMode="single"
        variant="flat"
        onSelectionChange={(keys) =>
          setSelected(urlHeader, Array.from(keys).join(","))
        }
        className="relative border rounded-md bg-gray-800 text-white shadow-lg w-48 max-h-60 overflow-y-auto"
      >
        {menuItems.map((item) => (
          <DropdownItem
            key={item}
            className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
          >
            {item}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
