import { NextRequest, NextResponse } from "next/server";
import { getNewCodesDefault } from "@/sql/queries/codes/getNewCodesDefault";

export async function GET(request: NextRequest) {
    try {
        const url = new URL(request.url);
        const search = url.searchParams.get("search");
        const skip = url.searchParams.get("skip");
        const take = url.searchParams.get("take");
        const sortMethod = url.searchParams.get("sort");

        console.log(`Skip: ${skip}, Take: ${take}, Search: ${search}, Sort: ${sortMethod}`);

        const skipInt = parseInt(skip as string, 10) || 0;
        const takeInt = parseInt(take as string, 10) || 20;

        if (isNaN(skipInt) || isNaN(takeInt)) {
            return NextResponse.json({ error: "Invalid skip or take parameter" }, { status: 400 });
        }

        const codes = await getNewCodesDefault(search, skipInt, takeInt);

        /*
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
            const [sortKey, sortOrder] = sort
              ? sort.split("_")
              : ["Map_Number", "desc"];
        
            const codes = await prisma.mercy_parkour_codes.findMany({
              where: search
                ? {
                    OR: [
                      { Map: { contains: search, mode: "insensitive" } },
                      { Code: { contains: search, mode: "insensitive" } },
                      { Author: { contains: search, mode: "insensitive" } },
                    ],
                  }
                : undefined,
              orderBy: { [sortKey]: sortOrder },
              skip,
              take,
            });
        
            return codes;
          };
        
          const queryParams = {
            search: search || "",
            sort: sortMethod || "",
            skip: skipInt,
            take: takeInt,
          };
          
        const codes = await fetchCodes(queryParams);
        */

        return NextResponse.json(codes);
    } catch (error) {
        console.error("Error fetching codes from the database", error);
        return NextResponse.json({ error: "Failed to fetch code data" }, { status: 500 });
    }
}
