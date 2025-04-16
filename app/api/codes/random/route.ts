import { NextResponse } from "next/server";
import { GetRandomCode } from "@/sql/queries/codes/getRandomCode";
export async function GET() {
    try {
        const code = await GetRandomCode();
        console.log(code);
        if (code) { return NextResponse.json(code); }
        throw new ReferenceError('Code not found');
    } catch (error) {
        console.error("Error fetching random code from the database", error);
        return NextResponse.json({ error: "Failed to fetch code data" }, { status: 500 });
    }
}