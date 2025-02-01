"use client";
import Card from "@/components/CodeCard";
import { MapCode } from "@/app/codes/MapCode";
import { useEffect, useState } from "react";
import MapImageSelection from "@/app/codes/map-image-selection";
import CardSkeleton from "./ui/CardSkeleton";

export default function FeaturedCourse() {
  const [featuredCode, setFeaturedCode] = useState<MapCode>();
  const [isLoading, setIsLoading] = useState(false);

  const fetchDailyCode = async () => {
    if (isLoading) return;
    setIsLoading(true);
    try {
      const response = await fetch("/api/codes/daily");
      const dailyCode: MapCode = await response.json();
      setFeaturedCode(dailyCode);
    } catch (error) {
      console.error("Error fetching daily code:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDailyCode();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="flex items-center justify-center">
        {!featuredCode ? (
          <CardSkeleton />
        ) : (
          <Card
            key={featuredCode.Map_Number}
            title={featuredCode.Map}
            code={featuredCode.Code}
            checkpoints={featuredCode.Checkpoints?.toString() || "N/A"}
            difficulty={featuredCode.Difficulty || "N/A"}
            mapper={featuredCode.Author || "Unknown Author"}
            video={featuredCode.Video}
            likes={0}
            imageSrc={MapImageSelection(featuredCode.Map || "N/A")}
          />
        )}
      </div>
    </>
  );
}
