"use client";
import { Button } from "@/components/ui/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import { Dispatch, SetStateAction } from "react";
import {
  RandomFilters,
  EMPTY_FILTERS,
  DEFAULT_RANGE,
  categoryOptionItems,
  mapOptionItems,
  difficultyOptionItems,
} from "@/components/filters/filterOptionsForCodes";
import RangeSlider from "@/components/RangeSlider";
import Dropdown_Menu from "@/components/ui/DropdownMenu";

interface OptionSectionProps {
  filters: RandomFilters;
  setFilters: Dispatch<SetStateAction<RandomFilters>>;
  range: number[];
  setRange: (range: number[]) => void;
}

export default function OptionsSection({
  filters,
  setFilters,
  range,
  setRange,
}: OptionSectionProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const updateFilter = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const clearAllFilters = () => {
    setFilters(EMPTY_FILTERS);
    setRange(DEFAULT_RANGE);
  };

  const isRangeActive =
    range[0] !== DEFAULT_RANGE[0] || range[1] !== DEFAULT_RANGE[1];
  const activeCount =
    Object.values(filters).filter(Boolean).length + (isRangeActive ? 1 : 0);

  return (
    <>
      <Button
        variant="secondary"
        className="px-8 py-3 text-lg font-semibold bg-gray-600 text-white rounded-lg shadow-md hover:bg-gray-500 transition-transform transform hover:scale-105"
        onClick={onOpen}
      >
        Options{activeCount > 0 && ` (${activeCount})`}
      </Button>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        size="lg"
        classNames={{
          base: "bg-gray-700 text-white",
          closeButton: "hover:bg-gray-600 active:bg-gray-500 text-white",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Random Map Options</ModalHeader>

              {/* Same content as the /codes dropdown (SearchBarWithDropdown lines 132-177) */}
              <ModalBody className="space-y-4">
                {/* Filter Options */}
                <div className="flex flex-wrap gap-2">
                  <Dropdown_Menu
                    menuHeader="Category..."
                    menuItems={categoryOptionItems}
                    urlHeader="category"
                    selected={filters.category}
                    setSelected={updateFilter}
                    syncUrl={false}
                  />
                  <Dropdown_Menu
                    menuHeader="Map..."
                    menuItems={mapOptionItems}
                    urlHeader="map"
                    selected={filters.map}
                    setSelected={updateFilter}
                    syncUrl={false}
                  />
                  <Dropdown_Menu
                    menuHeader="Difficulty..."
                    menuItems={difficultyOptionItems}
                    urlHeader="difficulty"
                    selected={filters.difficulty}
                    setSelected={updateFilter}
                    syncUrl={false}
                  />
                </div>

                {/* Slider */}
                <div className="pt-2 border-t border-gray-600">
                  <RangeSlider range={range} setRange={setRange} />
                </div>
              </ModalBody>

              <ModalFooter className="flex gap-2">
                {/* Clear Filter Button */}
                <button
                  className="flex-1 py-2 text-center bg-orange-500 rounded-md hover:bg-orange-600"
                  onClick={clearAllFilters}
                >
                  CLEAR FILTERS
                </button>
                <button
                  className="flex-1 py-2 text-center bg-gray-600 rounded-md hover:bg-gray-500"
                  onClick={onClose}
                >
                  DONE
                </button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
