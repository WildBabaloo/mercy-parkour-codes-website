import { NextRequest, NextResponse } from "next/server";
import { getNewCodesDefault } from "@/sql/queries/codes/getNewCodesDefault";
import { getSortedMapCodes } from "@/sql/queries/codes/getSortedMapCodes";

export async function GET(request: NextRequest) {
    try {
        const url = new URL(request.url);
        const search = url.searchParams.get("search");
        const skip = url.searchParams.get("skip");
        const take = url.searchParams.get("take");
        const sortMethod = url.searchParams.get("sort");
        const difficulty = url.searchParams.get("difficulty");
        const map = url.searchParams.get("map");
        const category = url.searchParams.get("category")

        //console.log(`Skip: ${skip || "none"}, Take: ${take || "none"}, Search: ${search || "none"}, Sort: ${sortMethod || "none"}, Difficulty ${difficulty || "none"}, Map: ${map || "none"}, Category: ${category || "none"}`);

        const skipInt = parseInt(skip as string, 10) || 0;
        const takeInt = parseInt(take as string, 10) || 20;

        if (isNaN(skipInt) || isNaN(takeInt)) {
            return NextResponse.json({ error: "Invalid skip or take parameter" }, { status: 400 });
        }
        
          const queryParams = {
            search: search || "",
            sort: sortMethod && sortMethod !== "undefined" ? sortMethod : "",
            skip: skipInt,
            take: takeInt,
            difficulty: difficulty && difficulty !== "undefined" ? difficulty : "",
            map: map && map !== "undefined" ? map : "",
            category: category && category !== "undefined" ? category : ""
          };
          
        const codes = await fetchCodes(queryParams);

        return NextResponse.json(codes);
    } catch (error) {
        console.error("Error fetching codes from the database", error);
        return NextResponse.json({ error: "Failed to fetch code data" }, { status: 500 });
    }
}

const fetchCodes = async ({
  search,
  sort,
  skip,
  take,
  difficulty,
  map,
  category,
}: {
  search?: string;
  sort?: string;
  skip: number;
  take: number;
  difficulty?: string;
  map?: string;
  category?: string;
}) => {
  const [sortKey, sortOrder] = sort && sort !== "undefined"
    ? sort.split("-")
    : ["Map_Number", "desc"];

  const codes =
    sortKey === "Added" || sortKey === "Map_Number"
      ? await getNewCodesDefault(search, skip, take, "Map_Number", sortOrder, map, difficulty, category)
      : await getSortedMapCodes(search, skip, take, sortKey, sortOrder, map, difficulty, category);

  return codes;
};
