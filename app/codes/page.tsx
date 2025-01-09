import NavBarUI from "@/components/ui/NavBar";
// import { CodeInput } from "@/components/ui/CodeInput";
import CardSection from "./card-section";
import { MapCode } from "./MapCode";
import SortSection from "./sort-section";
import { getNewCodesDefault } from "@/sql/queries/codes/getNewCodesDefault";
import { getSortedMapCodes } from "@/sql/queries/codes/getSortedMapCodes";
import SearchBarWithDropdown from "@/components/SearchBarWithDropdown";

export default async function Codes(props: {
  searchParams?: Promise<{
    search?: string;
    page?: string;
    sort?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const search = searchParams?.search;
  const currentPage = Number(searchParams?.page) || 1;
  const sortMethod = searchParams?.sort;
  const take = 20;
  const skip = (currentPage - 1) * take;

  // console.log(`Search Value: ${search}`);
  // console.log(`Current Page: ${currentPage}`);
  // console.log(`Sort Method: ${sortMethod}`);

  const queryParams = {
    search: search,
    sort: sortMethod,
    skip: skip,
    take: take,
  };
  const codes: MapCode[] = await fetchCodes(queryParams);

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
            <SearchBarWithDropdown />
          </div>
        </div>
        <div>
          {/* Sort Section */}
          <div className="m-4 items-center justify-center flex">
            <SortSection />
          </div>
          {/* Card Section */}
          <CardSection initialCodes={codes} search={search} sort={sortMethod} />
        </div>
      </div>
    </>
  );
}

const fetchCodes = async ({
  search,
  sort,
  skip,
  take,
}: {
  search?: string;
  sort?: string;
  skip: number;
  take: number;
}) => {
  const [sortKey, sortOrder] =
    sort && sort !== "undefined" ? sort.split("_") : ["Map_Number", "desc"];

  const codes =
    sortKey === "Map_Number"
      ? getNewCodesDefault(search, skip, take)
      : getSortedMapCodes(search, skip, take, sortKey, sortOrder);

  return codes;
};
