import prisma from "@/prisma/lib/db";

export async function getSortedMapCodes(search: string | undefined, skip: number, take: number, sortKey: string, sortOrder: string, map: string | undefined, difficultyNumbers: number[] | undefined, category: string | undefined) {
  const fetchSortedCodesWithRezFilter = async (difficultyNumbers: number[]) => {
    const codes = await prisma.mercy_parkour_codes.findMany({
      where: {
        AND: [
          search
            ? {
                OR: [
                  { Map: { contains: search, mode: "insensitive" } },
                  { Code: { contains: search, mode: "insensitive" } },
                  { Author: { contains: search, mode: "insensitive" } },
                ],
              }
            : {},
          {
            [sortKey]: {
              not: null,
            },
          },
          map ? { Map: { contains: map, mode: "insensitive" } } : {},
          difficultyNumbers.length > 0 ? { Difficulty_Integer: { in: difficultyNumbers } } : {},
          { Notes: { contains: "Rez", mode: "insensitive" } }
        ], 
      },
      orderBy: [
        { [sortKey]: sortOrder },
        {"Map_Number": "desc"}
    ],
      skip,
      take,
    });

    return codes;
  }
  const fetchSortedCodesWithoutRezFilter = async (difficultyNumbers: number[]) => {
    const codes = await prisma.mercy_parkour_codes.findMany({
      where: {
        AND: [
          search
            ? {
                OR: [
                  { Map: { contains: search, mode: "insensitive" } },
                  { Code: { contains: search, mode: "insensitive" } },
                  { Author: { contains: search, mode: "insensitive" } },
                ],
              }
            : {},
          {
            [sortKey]: {
              not: null,
            },
          },
          map ? { Map: { contains: map, mode: "insensitive" } } : {},
          difficultyNumbers.length > 0 ? { Difficulty_Integer: { in: difficultyNumbers } } : {},
          category
          ? {
              [category]: {
                not: null,
              },
            }
          : {},
        ], 
      },
      orderBy: [
        { [sortKey]: sortOrder },
        {"Map_Number": "desc"}
    ],
      skip,
      take,
    });

    return codes;
  }
  try {
    if (!validCategory(category)) { category = "" }
    if (sortKey === "Difficulty") { sortKey = "Difficulty_Integer" }
    return category === "Rez Map" ? fetchSortedCodesWithRezFilter(difficultyNumbers || []) : fetchSortedCodesWithoutRezFilter(difficultyNumbers || []);
  } catch (error) {
    console.error("Error fetching codes from the database", error);
    return [];
  }

}

const validCategory = (category: string | undefined) => {
  return category === "Rez Map" ||
  category === "Cloud" ||
  category === "Many_Orbs" ||
  category === "Softlock" ||
  category === "Stuck_Balance" ||
  category === ""
}