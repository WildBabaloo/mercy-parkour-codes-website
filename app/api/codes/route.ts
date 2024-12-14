import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/lib/db";

export async function GET(request: NextRequest) {
    try {
        const url = new URL(request.url);
        const search = url.searchParams.get("search");
        const skip = url.searchParams.get("skip");
        const take = url.searchParams.get("take");

        console.log(`Skip: ${skip}, Take: ${take}, Search: ${search}`);

        const skipInt = parseInt(skip as string, 10) || 0; // Default to 0 if not provided
        const takeInt = parseInt(take as string, 10) || 20; // Default to 20 if not provided

        if (isNaN(skipInt) || isNaN(takeInt)) {
            return NextResponse.json({ error: "Invalid skip or take parameter" }, { status: 400 });
        }

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

        return NextResponse.json(codes);
    } catch (error) {
        console.error("Error fetching codes from the database", error);
        return NextResponse.json({ error: "Failed to fetch code data" }, { status: 500 });
    }
}
