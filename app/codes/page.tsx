import NavBarUI from "@/components/ui/NavBar";
import Card from "@/components/CodeCard";
import Ecopoint from "@/images/Map_Images/EcoPointAntarctica.png";
import prisma from "@/prisma/lib/db";
import { Input } from "@/components/ui/input";

export default async function Codes() {
  const codes = await prisma.mercy_parkour_codes.findMany({
    take: 25,
  });

  console.log(codes);

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
      </div>
    </>
  );
}
