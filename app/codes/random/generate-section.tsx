"use client";
import Card from "@/components/CodeCard";
import { Button } from "@/components/ui/button";
import Ecopoint from "@/public/images/Map_Images/EcoPointAntarctica.png";

export default function GenerateSection() {
  const handleGenerateButton = () => {};
  return (
    <>
      {/* Card Section */}
      <div className="flex justify-center items-center mt-12">
        <Card
          key="3157"
          title="Ecopoint: Antarctica (Winter)"
          code="QTXG4"
          checkpoints="45"
          difficulty="Intermediate"
          mapper="OnMyKnees"
          video="https://www.youtube.com/watch?v=tJMdXxLr7BU"
          likes={0}
          imageSrc={Ecopoint}
        />
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
