import { NextResponse } from "next/server";
import prisma from "@/prisma/lib/db";
export async function GET() {
    try {
        const count = await prisma.mercy_parkour_codes.count();
        const randInt = Math.floor(Math.random() * count) + 1;
        const code = await prisma.mercy_parkour_codes.findFirst({
            where: {
                Map_Number: randInt
            }
        });
        console.log(code);
        return NextResponse.json(code);
    } catch (error) {
        console.error("Error fetching random code from the database", error);
        return NextResponse.json({ error: "Failed to fetch code data" }, { status: 500 });
    }
}