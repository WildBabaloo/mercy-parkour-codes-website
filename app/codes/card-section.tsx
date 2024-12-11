"use client";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Card from "@/components/CodeCard";
import Ecopoint from "@/images/Map_Images/EcoPointAntarctica.png";
import { MapCode } from "./MapCode";

export default function CardSection({
  initialCodes,
}: {
  initialCodes: MapCode[];
}) {
  const [codes, setCodes] = useState<MapCode[]>(initialCodes);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [ref, inView] = useInView();

  async function fetchMoreCodes() {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    try {
      const nextPage = page + 1;
      const response = await fetch(`/api/codes?skip=${page * 20}&take=20`);
      const newCodes: MapCode[] = await response.json();

      if (newCodes.length < 20) {
        setHasMore(false);
      }

      setPage(nextPage);
      setCodes((prevCodes) => [...prevCodes, ...newCodes]);
    } catch (error) {
      console.error("Error fetching more codes from the database", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (inView) {
      fetchMoreCodes();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <>
      {/* Card Section */}
      <div className="min-h-screen flex items-center justify-center">
        {/* Individual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-screen-md w-full">
          {codes.map((code) => (
            <Card
              key={code.Map_Number}
              title={code.Map}
              code={code.Code}
              difficulty={code.Difficulty || "N/A"}
              mapper={code.Author || "Unknown Mapper"}
              likes={36}
              imageSrc={Ecopoint}
            />
          ))}
        </div>
      </div>
      {isLoading && <p className="text-center text-white">Loading...</p>}
      {!hasMore && <p className="text-center text-white">No more codes!</p>}
      {/* Intersection Observer Element */}
      <div ref={ref} style={{ height: "1px" }}></div>
    </>
  );
}
