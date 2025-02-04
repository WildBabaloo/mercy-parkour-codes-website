import { NextResponse } from "next/server";
import GetDailyCode from "@/sql/queries/codes/getDailyCode";
import PostDailyCode from "@/sql/queries/codes/postDailyCode";
export async function GET() {
  try {
    const dailyCode = (await GetDailyCode()) || (await PostDailyCode());

    if (!dailyCode) {
      return NextResponse.json(
        { error: "Could not add the daily code onto the database" },
        { status: 500 }
      );
    }

    return NextResponse.json(dailyCode);
  } catch (error) {
    console.error("Error fetching random code from the database", error);
    return NextResponse.json(
      { error: "Failed to fetch code data" },
      { status: 500 }
    );
  }
}