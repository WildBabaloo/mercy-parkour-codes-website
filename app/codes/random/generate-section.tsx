"use client";
import { useState } from "react";
import Card from "@/components/CodeCard";
import { Button } from "@/components/ui/button";
import MapImageSelection from "../map-image-selection";
import { MapCode } from "../MapCode";
import CardSkeleton from "@/components/ui/CardSkeleton";
import OptionsSection from "./options-section";
import {
  RandomFilters,
  EMPTY_FILTERS,
  DEFAULT_RANGE,
  categoryToUrl,
} from "@/components/filters/filterOptionsForCodes";

export default function GenerateSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [code, setCode] = useState<MapCode>();
  const [error, setError] = useState<string | null>(null);

  const [filters, setFilters] = useState<RandomFilters>(EMPTY_FILTERS);
  const [range, setRange] = useState<number[]>(DEFAULT_RANGE);

  const buildQuery = () => {
    const params = new URLSearchParams();
    const urlCategory = categoryToUrl(filters.category);
    if (urlCategory) params.set("category", urlCategory);
    if (filters.map) params.set("map", filters.map);
    if (filters.difficulty) params.set("difficulty", filters.difficulty);
    if (range[0] !== DEFAULT_RANGE[0] || range[1] !== DEFAULT_RANGE[1]) {
      params.set("difficultyRange", range.join("-"));
    }

    return params.toString();
  };

  const handleGenerateButton = async () => {
    if (isLoading) return;

    setIsLoading(true);
    setError(null);

    try {
      const query = buildQuery();
      const response = await fetch(
        `/api/codes/random${query ? `?${query}` : ""}`,
        { cache: "no-store" },
      );
      if (response.status === 404) {
        setCode(undefined);
        setError("No maps match your options. Try loosening up your filters!");
        return;
      }

      if (!response.ok) throw new Error(`Request failed! ${response.status}`);

      const generatedCode: MapCode = await response.json();
      setCode(generatedCode);
    } catch (err) {
      console.error(error);
      setError(
        "Something went wrong with generating a map. Please try again...",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Card Section */}
      <div className="flex justify-center items-center mt-8">
        {!code || isLoading ? (
          <CardSkeleton />
        ) : (
          <Card
            key={code.Map_Number}
            title={code.Course_Name || code.Map}
            code={code.Code}
            checkpoints={code.Checkpoints?.toString() || "N/A"}
            difficulty={code.Difficulty || "N/A"}
            mapper={code.Author || "Unknown Author"}
            notes={code.Notes}
            video={code.Video}
            isBroken={code.Is_Broken}
            likes={0}
            imageSrc={MapImageSelection(code.Map || "N/A")}
          />
        )}
      </div>

      {/* Error Message */}
      {error && <p className="text-center text-red-400 mt-4">{error}</p>}

      {/* Generate and Options Button */}
      <div className="flex justify-center items-center gap-4 mt-8">
        <OptionsSection
          filters={filters}
          setFilters={setFilters}
          range={range}
          setRange={setRange}
        />
        <Button
          variant="default"
          className="px-8 py-3 text-lg font-semibold bg-primary text-white rounded-lg shadow-md hover:bg-primary-dark transition-transform transform hover:scale-105"
          onClick={() => {
            handleGenerateButton();
          }}
        >
          Generate
        </Button>
      </div>
    </>
  );
}
