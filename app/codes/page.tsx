import NavBarUI from "@/components/ui/NavBar";
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
    category?: string;
    map?: string;
    difficulty?: string;
    // play_status?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const search = searchParams?.search;
  const currentPage = Number(searchParams?.page) || 1;
  const sortMethod = searchParams?.sort;
  const selectedCategory = searchParams?.category;
  const selectedMap = searchParams?.map;
  const selectedDifficulty = searchParams?.difficulty;
  // Play status to be added in future implementations
  // const selectPlayStatus = searchParams?.play_status;
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
    category: selectedCategory,
    map: selectedMap,
    difficulty: selectedDifficulty,
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
          <CardSection
            initialCodes={codes}
            search={search}
            sort={sortMethod}
            map={selectedMap}
            difficulty={selectedDifficulty}
            category={selectedCategory}
          />
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
  category,
  map,
  difficulty,
}: {
  search?: string;
  sort?: string;
  skip: number;
  take: number;
  category?: string;
  map?: string;
  difficulty?: string;
}) => {
  const [sortKey, sortOrder] =
    sort && sort !== "undefined" ? sort.split("-") : ["Map_Number", "desc"];

  const codes =
    sortKey === "Added" || sortKey === "Map_Number"
      ? await getNewCodesDefault(
          search,
          skip,
          take,
          "Map_Number",
          sortOrder,
          map,
          difficulty,
          category
        )
      : await getSortedMapCodes(
          search,
          skip,
          take,
          sortKey,
          sortOrder,
          map,
          difficulty,
          category
        );

  return codes;
};
