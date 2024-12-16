import NavBarUI from "@/components/ui/NavBar";
import { CodeInput } from "@/components/ui/CodeInput";
import CardSection from "./card-section";
import { MapCode } from "./MapCode";
import prisma from "@/prisma/lib/db";
import SortSection from "./sort-section";

export default async function Codes(props: {
  searchParams?: Promise<{
    search?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const search = searchParams?.search;
  const currentPage = Number(searchParams?.page) || 1;
  const take = 20; // Number of items per page
  const skip = (currentPage - 1) * take; // Pagination offset

  // console.log(`Search Value: ${search}`);
  // console.log(`Current Page: ${currentPage}`);

  const codes: MapCode[] = await prisma.mercy_parkour_codes.findMany({
    where: search
      ? {
          OR: [
            { Map: { contains: search, mode: "insensitive" } },
            { Code: { contains: search, mode: "insensitive" } },
            { Author: { contains: search, mode: "insensitive" } },
          ],
        }
      : undefined,
    take,
    skip,
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
        <div>
          <SortSection />
          <CardSection initialCodes={codes} search={search} />
        </div>
      </div>
    </>
  );
}
