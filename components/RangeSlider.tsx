"use client";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { getDifficultyStringForRangeSlider } from "./utils/getDifficultyStringForRangeSlider";

export default function RangeSlider() {
  const [range, setRange] = useState([1, 17]);

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
