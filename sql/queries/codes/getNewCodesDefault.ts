import prisma from "@/prisma/lib/db";

export async function getNewCodesDefault(search: string | null, skipInt: number, takeInt: number){
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
        skip: skipInt,
        take: takeInt,
        orderBy: { Map_Number: "desc" },
    });

    return codes;
}