import prisma from "@/prisma/lib/db";
import { GetRandomCode } from "./getRandomCode";

export default async function PostDailyCode() {
    const today = new Date().toISOString();
    const randomCode = await GetRandomCode();

    if (randomCode) {
      const newDailyCode = await prisma.daily_codes.create({
        data: {
          date: today,
          Map_Number: randomCode.Map_Number
        },
        include: { mercy_parkour_codes: true }
      })
      return newDailyCode.mercy_parkour_codes;
    }

    return null;
}