"use client";
import { Slider } from "@/components/ui/slider";
import { getDifficultyStringForRangeSlider } from "./utils/getDifficultyStringForRangeSlider";

interface RangeSliderProps {
  range: number[];
  setRange: (range: number[]) => void;
}

export default function RangeSlider({ range, setRange }: RangeSliderProps) {
  return (
    <div className="space-y-2">
      <label className="text-medium text-gray-300 font-medium">
        Difficulty Range
      </label>
      <Slider
        value={range}
        onValueChange={setRange}
        min={1}
        max={17}
        step={2}
        className="relative w-full h-8"
      />
      <div className="flex justify-between text-sm text-gray-400">
        <span>{getDifficultyStringForRangeSlider(range[0])}</span>
        <span>{getDifficultyStringForRangeSlider(range[1])}</span>
      </div>
    </div>
  );
}
