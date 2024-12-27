"use client";

import { useState, ChangeEvent } from "react";

const DoubleEndedCodeSlider = () => {
  const sliderValues = [
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

  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(sliderValues.length - 1);

  const handleMinChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxValue - 1);
    setMinValue(value);
  };

  const handleMaxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), minValue + 1);
    setMaxValue(value);
  };

  return (
    <div>
      {/* Slider Label */}
      <label className="block text-sm mb-2 text-white">Difficulty Range</label>

      {/* Slider Track */}
      <div className="relative w-full h-6">
        {/* Track Highlight (Between Min and Max) */}
        <div
          className="absolute h-1 bg-orange-500 top-1/2 -translate-y-1/2 z-0"
          style={{
            left: `${(minValue / (sliderValues.length - 1)) * 100}%`,
            right: `${100 - (maxValue / (sliderValues.length - 1)) * 100}%`,
          }}
        />

        {/* Minimum Slider */}
        <input
          type="range"
          min="0"
          max={sliderValues.length - 1}
          value={minValue}
          onChange={handleMinChange}
          className="absolute w-full accent-orange-500 z-10 appearance-none bg-transparent pointer-events-auto"
          style={{ zIndex: 2 }}
        />

        {/* Maximum Slider */}
        <input
          type="range"
          min="0"
          max={sliderValues.length - 1}
          value={maxValue}
          onChange={handleMaxChange}
          className="absolute w-full accent-orange-500 z-20 appearance-none bg-transparent pointer-events-auto"
        />
      </div>

      {/* Difficulty Range */}
      <div className="text-center mt-2 text-white">
        Selected: <strong>{sliderValues[minValue]}</strong> to{" "}
        <strong>{sliderValues[maxValue]}</strong>
      </div>
    </div>
  );
};

export default DoubleEndedCodeSlider;
