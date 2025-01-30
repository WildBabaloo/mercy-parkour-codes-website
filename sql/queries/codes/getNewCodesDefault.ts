import { GetDifficultyIntegerForFilter } from "@/components/utils/getDifficultyIntegerForFilter";
import prisma from "@/prisma/lib/db";

export async function getNewCodesDefault(search: string | undefined, skip: number, take: number, sortKey: string, sortOrder: string, map: string | undefined, difficulty: string | undefined, category: string | undefined){
  const fetchCodesWithRezFilter = async (difficultyNumbers: number[]) => {
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
            map ? { Map: { contains: map, mode: "insensitive" } } : {},
            difficultyNumbers.length > 0 ? { Difficulty_Integer: { in: difficultyNumbers } } : {},
            { Notes: { contains: "Rez", mode: "insensitive" } }
        ]
      },
      orderBy: [
        { [sortKey]: sortOrder } 
      ],
      skip,
      take,
    });
      
    return codes;
  }

  const fetchCodesWithoutRez = async (difficultyNumbers: number[]) => {
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
            map ? { Map: { contains: map, mode: "insensitive" } } : {},
            difficultyNumbers.length > 0 ? { Difficulty_Integer: { in: difficultyNumbers } } : {},
            category
            ? {
                [category]: {
                  not: null,
                },
              }
            : {},
        ]
      },
      orderBy: [
        { [sortKey]: sortOrder } 
      ],
      skip,
      take,
    });
      
    return codes;
  }

  const difficultyNumbers = difficulty
  ? GetDifficultyIntegerForFilter(difficulty)
  : [];

  return category === "Rez Map" ? fetchCodesWithRezFilter(difficultyNumbers) : fetchCodesWithoutRez(difficultyNumbers);

}

