"use client";
import { useState } from "react";
import Card from "@/components/CodeCard";
import { Button } from "@/components/ui/button";
import MapImageSelection from "../map-image-selection";
import { MapCode } from "../MapCode";

export default function GenerateSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [code, setCode] = useState<MapCode>();
  const handleGenerateButton = async () => {
    if (isLoading) return;

    setIsLoading(true);
    const response = await fetch("/api/codes/random");
    const generatedCode: MapCode = await response.json();
    setCode(generatedCode);
    setIsLoading(false);
  };
  return (
    <>
      {/* Card Section */}
      <div className="flex justify-center items-center mt-12">
        {code && (
          <Card
            key={code.Map_Number}
            title={code.Map}
            code={code.Code}
            checkpoints={code.Checkpoints?.toString() || "N/A"}
            difficulty={code.Difficulty || "N/A"}
            mapper={code.Author || "Unknown Author"}
            video={code.Video}
            likes={0}
            imageSrc={MapImageSelection(code.Map || "N/A")}
          />
        )}
      </div>

      {/* Generate Button */}
      <div className="text-center mt-8">
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
