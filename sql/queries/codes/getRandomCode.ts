import prisma from "@/prisma/lib/db";

export async function getRandomCode() {
    const count = await prisma.mercy_parkour_codes.count();
    const randInt = Math.floor(Math.random() * count) + 1;
    const code = await prisma.mercy_parkour_codes.findFirst({
        where: {
            Map_Number: randInt
        }
    });

    return code;
}