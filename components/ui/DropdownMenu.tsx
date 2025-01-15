"use client";
import type { Selection } from "@nextui-org/react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";
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
}) {
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(
    new Set([props.menuHeader])
  );

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replace(/_/g, ""),
    [selectedKeys]
  );

  const handleClearSingleFilterOption = () => {
    setSelectedKeys(new Set([props.menuHeader]));
  };

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    if (selectedValue != props.menuHeader) {
      params.set(props.urlHeader, selectedValue);
    } else {
      params.delete(props.urlHeader);
    }
    replace(`${pathname}?${params.toString()}`);
  }, [
    selectedValue,
    props.menuHeader,
    props.urlHeader,
    pathname,
    searchParams,
    replace,
  ]);

  return (
    <Dropdown>
      <DropdownTrigger>
        <button className="px-3 py-1 rounded-full bg-gray-600 hover:bg-gray-500 capitalize">
          {selectedValue == props.menuHeader ? (
            selectedValue
          ) : (
            <div className="flex items-center">
              {selectedValue}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-red-500 ml-2"
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
          )}
        </button>
      </DropdownTrigger>
      <DropdownMenu
        disallowEmptySelection
        aria-label="Single selection example"
        selectedKeys={selectedKeys}
        selectionMode="single"
        variant="flat"
        onSelectionChange={setSelectedKeys}
        className="relative border rounded-md bg-gray-800 text-white shadow-lg w-48 max-h-60 overflow-y-auto"
      >
        {props.menuItems.map((item) => (
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
