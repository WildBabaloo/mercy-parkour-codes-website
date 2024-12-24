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
        orderBy: { Map_Number: "desc" },
        skip: skipInt,
        take: takeInt,
    });

    return codes;
}