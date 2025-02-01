import prisma from "@/prisma/lib/db";

export default async function GetDailyCode(){
    const today = new Date().toISOString();
    
    const dailyCode = await prisma.daily_codes.findUnique({
        where: { date: today },
        include: { mercy_parkour_codes: true }
    });
    
    return dailyCode?.mercy_parkour_codes;
}