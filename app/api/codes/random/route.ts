import { NextRequest, NextResponse } from "next/server";
import { GetRandomCode } from "@/sql/queries/codes/getRandomCode";
import { GetDifficultyIntegerForFilter } from "@/components/utils/getDifficultyIntegerForFilter";
import { GetDifficultyIntegerForRangeSlider } from "@/components/utils/getDifficultyIntegerForRangeSlider";
export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const category = searchParams.get("category")
        const map = searchParams.get("map");
        const difficulty = searchParams.get("difficulty");
        const difficultyRangeString = searchParams.get("difficultyRange");

        const difficultyRange = difficulty
        ? GetDifficultyIntegerForFilter(difficulty)
        : GetDifficultyIntegerForRangeSlider(difficultyRangeString || "1-17");

        const code = await GetRandomCode({
            category: category || undefined,
            map: map || undefined,
            difficultyRange: difficultyRange,
        });

        console.log(code);
        if (!code) {
        return NextResponse.json(
            { error: "No code matches these options" },
            { status: 404 },
          );
        }

        return NextResponse.json(code);
    } catch (error) {
        console.error("Error fetching random code from the database", error);
        return NextResponse.json(
            { error: "Failed to fetch code data" },
            { status: 500 }
        );
    }
}