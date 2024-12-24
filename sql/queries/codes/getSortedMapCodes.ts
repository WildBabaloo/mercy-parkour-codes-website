import prisma from "@/prisma/lib/db";

export async function getSortedMapCodes(search: string | null, skipInt: number, takeInt: number, sortKey: string, sortOrder: string) {
    const codes = await prisma.mercy_parkour_codes.findMany({
        where: {
          Map: {
            not: null,
          },
          ...(search
            ? {
                OR: [
                  { Map: { contains: search, mode: "insensitive" } },
                  { Code: { contains: search, mode: "insensitive" } },
                  { Author: { contains: search, mode: "insensitive" } },
                ],
              }
            : {}),
        },
        orderBy: { [sortKey]: sortOrder },
        skip: skipInt,
        take: takeInt,
      });

      return codes;
}