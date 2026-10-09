import prisma from "@/prisma/lib/db";
import { Prisma } from "@/prisma/generated/prisma/client";

const VALID_CATEGORIES = [
  "Rez Map",
  "Cloud",
  "Many_Orbs",
  "Softlock",
  "Stuck_Balance",
];

export async function GetRandomCode(
  options: {
    category?: string;
    map?: string;
    difficultyRange?: number[]
  } = {},
) {
  const { category, map, difficultyRange = [] } = options;
  const validCategory = category && VALID_CATEGORIES.includes(category) ? category : undefined;

  const where: Prisma.mercy_parkour_codesWhereInput = {
    AND: [
      { Is_Hidden: false },
      { Is_Broken: false },
      map ? { Map : {contains: map, mode: "insensitive"} } : {},
      difficultyRange.length > 0
        ? { Difficulty_Integer: { in: difficultyRange } } : {},
        validCategory === "Rez Map"
          ? { Notes: { contains: "Rez", mode: "insensitive" } }
          : validCategory 
          ? ({
              [validCategory]: { not: null },
            } as Prisma.mercy_parkour_codesWhereInput)
          : {},
    ],
  };

  const count = await prisma.mercy_parkour_codes.count({ where });
  if (count === 0) return null;

  const skip = Math.floor(Math.random() * count);
  
  return prisma.mercy_parkour_codes.findFirst({
    where,
    skip,
    orderBy: { Map_Number: "asc" }
  });
}