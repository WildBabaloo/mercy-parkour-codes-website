import prisma from "@/prisma/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const url = new URL(request.url);
        const skip = url.searchParams.get("skip");
        const take = url.searchParams.get("take");
        console.log(`Skip: ${skip}, Take: ${take}`);
        const skipInt = parseInt(skip as string || "0", 10)
        const takeInt = parseInt(take as string || "0", 10)

        if (isNaN(skipInt) || isNaN(takeInt)) {
            return NextResponse.json({ error: "Invalid skip or take parameter" }, {status: 400});
        }

        const codes = await prisma.mercy_parkour_codes.findMany({
            skip: skipInt,
            take: takeInt,
            orderBy: { Map_Number: "desc" },
        });

        return NextResponse.json(codes);
    } catch (error) {
        console.error("Error fetching codes from the database", error);
        NextResponse.json({ error: "Failed to fetch code data" }, {status: 400})
    }

}