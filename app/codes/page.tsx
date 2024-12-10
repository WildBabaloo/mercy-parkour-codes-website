"use client";
import { useState, useEffect } from "react";
import NavBarUI from "@/components/ui/NavBar";
import Card from "@/components/CodeCard";
import Ecopoint from "@/images/Map_Images/EcoPointAntarctica.png";
import { Input } from "@/components/ui/input";

type MapCode = {
  Map_Number: number;
  Map: string | null;
  Code: string;
  Checkpoints: number | null;
  Video: string | null;
  Notes: string | null;
  Author: string | null;
  Difficulty: string | null;
  Sit: string | null;
  Cloud: string | null;
  Stuck_Balance: string | null;
  Softlock: string | null;
  Many_Orbs: string | null;
};

export default function Codes() {
  const [codes, setCodes] = useState<MapCode[]>([]);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchCodes = async () => {
      if (isLoading || !hasMore) return;

      setIsLoading(true);
      try {
        const response = await fetch(`/api/codes?skip=${page * 20}&take=20`);
        const newCodes: MapCode[] = await response.json();

        if (newCodes.length < 25) setHasMore(false);
        setCodes((previousCodes) => [...previousCodes, ...newCodes]);
      } catch (error) {
        console.error("Error fetching more codes from the database", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCodes();
  }, [page, hasMore, isLoading]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100
      ) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <NavBarUI />
      {/* Content */}
      <div className="bg-gray-800 p-4">
        {/* Search Bar */}
        <div className="flex items-center justify-center">
          <div className="max-w-screen-md w-full">
            <Input type="search" placeholder="Search..." className="" />
          </div>
        </div>
        <div className="text-center p-4 text-white">
          More search options (Clickable to see and apply filter options){" "}
        </div>
        {/* Card Section */}
        <div className="min-h-screen flex items-center justify-center">
          {/* Individual Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-screen-md w-full">
            {codes.map((code) => (
              <Card
                key={code.Map_Number}
                title={code.Map}
                code={code.Code}
                difficulty={code.Difficulty ? code.Difficulty : "N/A"}
                mapper={code.Author ? code.Author : "Unknown Mapper"}
                likes={36}
                imageSrc={Ecopoint}
              />
            ))}
          </div>
        </div>
        {isLoading && <p className="text-center text-white">Loading...</p>}
        {!hasMore && <p className="text-center text-white">No more codes!</p>}
      </div>
    </>
  );
}
