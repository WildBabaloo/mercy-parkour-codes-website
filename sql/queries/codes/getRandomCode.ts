import prisma from "@/prisma/lib/db";

export async function GetRandomCode() {
    const count = await prisma.mercy_parkour_codes.count();
    while (true) {
        const randInt = Math.floor(Math.random() * count) + 1;
        const code = await prisma.mercy_parkour_codes.findFirst({
            where: {
                Map_Number: randInt
            }
        });
        if (!code) { return null; }
        if (!code?.Is_Broken) { return code; }
        console.log("Potentially broken map found. Looping again...")
    }
}