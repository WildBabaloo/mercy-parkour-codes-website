"use client";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Card from "@/components/CodeCard";
import Ecopoint from "@/images/Map_Images/EcoPointAntarctica.png";
import { MapCode } from "./MapCode";

export default function CardSection({
  initialCodes,
  search,
  sort,
  map,
  difficulty,
}: {
  initialCodes: MapCode[];
  search: string | undefined;
  sort: string | undefined;
  map: string | undefined;
  difficulty: string | undefined;
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
      const response = await fetch(
        `/api/codes?skip=${page * 20}&take=20&search=${
          search || ""
        }&sort=${sort}&map=${map}&difficulty=${difficulty}`
      );
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

  async function fetchSearchedCodes(searchTerm: string) {
    setIsLoading(true);
    setHasMore(true);
    setPage(1);
    try {
      const response = await fetch(
        `/api/codes?skip=0&take=20&search=${
          searchTerm || ""
        }&sort=${sort}&map=${map}&difficulty=${difficulty}`
      );
      const searchedCodes: MapCode[] = await response.json();

      if (searchedCodes.length < 20) {
        setHasMore(false);
      }

      setCodes(searchedCodes);
    } catch (error) {
      console.error("Error fetching searched codes from the database", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (search) {
      fetchSearchedCodes(search);
    } else {
      setCodes(initialCodes);
      setPage(1);
      setHasMore(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, initialCodes]);

  useEffect(() => {
    if (inView) {
      fetchMoreCodes();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <>
      {/* Card Section */}
      <div className="min-h-screen flex justify-center mt-2">
        {/* Individual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-screen-md h-full w-full align-top">
          {codes.map((code) => (
            <Card
              key={code.Map_Number}
              title={code.Map}
              code={code.Code}
              checkpoints={code.Checkpoints?.toString() || "N/A"}
              difficulty={code.Difficulty || "N/A"}
              mapper={code.Author || "Unknown Mapper"}
              video={code.Video}
              likes={0}
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
