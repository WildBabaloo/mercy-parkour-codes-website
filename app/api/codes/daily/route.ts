import { NextResponse } from "next/server";
import prisma from "@/prisma/lib/db";
import { getRandomCode } from "@/sql/queries/codes/getRandomCode";
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

export async function POST(){
  try {
    const today = new Date().toISOString();

    const isExistingDailyCode = await prisma.daily_codes.findUnique({
        where: { date: today },
      });

      if (!isExistingDailyCode) {
        const randomCode = await getRandomCode();

        if (randomCode) {
          await prisma.daily_codes.create({
            data: {
              date: today,
              Map_Number: randomCode.Map_Number
            }
          })
        }
      }

      const dailyCodeResponse = await GET();
      const dailyCode = await dailyCodeResponse.json();
  
      return NextResponse.json(dailyCode);

  } catch (error) {
    console.error("Error posting daily code to the database", error);
    return NextResponse.json({ error: "Failed to post code data" }, { status: 500 });
  }
}