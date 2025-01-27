import prisma from "@/prisma/lib/db";

export async function getNewCodesDefault(search: string | undefined, skip: number, take: number, sortKey: string, sortOrder: string, map: string | undefined, difficulty: string | undefined, category: string | undefined){
  const fetchCodesWithRezFilter = async () => {
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
            difficulty ? { Difficulty: { contains: difficulty, mode: "insensitive" } } : {},
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

  const fetchCodesWithoutRez = async () => {
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
            difficulty ? { Difficulty: { contains: difficulty, mode: "insensitive" } } : {},
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

  return category === "Rez Map" ? fetchCodesWithRezFilter() : fetchCodesWithoutRez();

}

