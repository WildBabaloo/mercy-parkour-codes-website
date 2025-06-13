import NavBarUI from "@/components/ui/NavBar";
import CardSection from "./card-section";
import { MapCode } from "./MapCode";
import SortSection from "./sort-section";
import { getNewCodesDefault } from "@/sql/queries/codes/getNewCodesDefault";
import { getSortedMapCodes } from "@/sql/queries/codes/getSortedMapCodes";
import SearchBarWithDropdown from "@/components/SearchBarWithDropdown";
import { Metadata } from "next";
import { GetDifficultyIntegerForFilter } from "@/components/utils/getDifficultyIntegerForFilter";
import { GetDifficultyIntegerForRangeSlider } from "@/components/utils/getDifficultyIntergerForRangeSlider";

export const metadata: Metadata = {
  title: "Mercy Parkour - Codes",
  description: "The list of all the mercy parkour codes!",
  icons: {
    icon: ["/favicon.ico?v=1"],
    apple: ["/apple-touch-icon.png?v=1"],
    shortcut: ["/apple-touch-icon.png?v=1"],
  },
  manifest: "/site.webmanifest",
};

export default async function Codes(props: {
  searchParams?: Promise<{
    search?: string;
    page?: string;
    sort?: string;
    category?: string;
    map?: string;
    difficulty?: string;
    difficultyRange?: string;
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
  const selectedDifficultyRange = selectedDifficulty
    ? GetDifficultyIntegerForFilter(selectedDifficulty)
    : GetDifficultyIntegerForRangeSlider(
        searchParams?.difficultyRange || "1-17"
      );
  // Play status to be added in future implementations
  // const selectPlayStatus = searchParams?.play_status;
  const take = 20;
  const skip = (currentPage - 1) * take;

  // console.log(`Search Value: ${search}`);
  // console.log(`Current Page: ${currentPage}`);
  // console.log(`Sort Method: ${sortMethod}`);
  // console.log(`Difficulty Range: ${selectedDifficultyRange}`);

  const queryParams = {
    search: search,
    sort: sortMethod,
    skip: skip,
    take: take,
    category: selectedCategory,
    map: selectedMap,
    difficultyRange: selectedDifficultyRange,
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
            difficultyRange={searchParams?.difficultyRange}
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
  difficultyRange,
}: {
  search?: string;
  sort?: string;
  skip: number;
  take: number;
  category?: string;
  map?: string;
  difficultyRange?: number[];
}) => {
  let [sortKey, sortOrder] =
    sort && sort !== "undefined" ? sort.split("-") : ["Map_Number", "desc"];

  const sortOptions = ["Added", "Difficulty", "Author", "Map", "Checkpoints"];
  if (
    !sortOptions.includes(sortKey) ||
    (sortOrder !== "desc" && sortOrder !== "asc")
  ) {
    sortKey = "Map_Number";
    sortOrder = "desc";
  }

  const codes =
    sortKey === "Added" || sortKey === "Map_Number"
      ? await getNewCodesDefault(
          search,
          skip,
          take,
          "Map_Number",
          sortOrder,
          map,
          difficultyRange,
          category
        )
      : await getSortedMapCodes(
          search,
          skip,
          take,
          sortKey,
          sortOrder,
          map,
          difficultyRange,
          category
        );

  return codes;
};
