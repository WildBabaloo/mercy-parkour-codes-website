import prisma from "@/prisma/lib/db";

export async function getSortedMapCodes(search: string | undefined, skip: number, take: number, sortKey: string, sortOrder: string, map: string | undefined, difficulty: string | undefined) {
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
        map ? { Map: map } : {},
        difficulty ? { Difficulty: difficulty } : {},
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