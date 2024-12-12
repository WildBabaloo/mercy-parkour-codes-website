import NavBarUI from "@/components/ui/NavBar";
import { CodeInput } from "@/components/ui/CodeInput";
import CardSection from "./card-section";
import { MapCode } from "./MapCode";
import prisma from "@/prisma/lib/db";

export default async function Codes() {
  const codes: MapCode[] = await prisma.mercy_parkour_codes.findMany({
    take: 20,
    orderBy: { Map_Number: "desc" },
  });
  return (
    <>
      {/* Navbar */}
      <div>
        <NavBarUI />
      </div>
      {/* Content */}
      <div className="bg-gray-800 p-4">
        {/* Search Bar */}
        <div className="flex items-center justify-center">
          <div className="max-w-screen-md w-full">
            <CodeInput type="search" placeholder="Search..." className="" />
          </div>
        </div>
        <div className="text-center p-4 text-white">
          More search options (Clickable to see and apply filter options)
        </div>
        <CardSection initialCodes={codes} />
      </div>
    </>
  );
}
