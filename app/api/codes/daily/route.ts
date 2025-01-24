import { NextResponse } from "next/server";
import prisma from "@/prisma/lib/db";
export async function GET() {
    try {
        const today = new Date().toISOString();

        const dailyCode = await prisma.daily_codes.findUnique({
            where: { date: today },
            include: { mercy_parkour_codes: true }
          });

          console.log(dailyCode);

          if (!dailyCode) {
            return NextResponse.json({ error: "No daily code found." }, { status: 404 });
          }
        
          return NextResponse.json(dailyCode.Map_Number);
    } catch (error) {
        console.error("Error fetching random code from the database", error);
        return NextResponse.json({ error: "Failed to fetch code data" }, { status: 500 });
    }
}