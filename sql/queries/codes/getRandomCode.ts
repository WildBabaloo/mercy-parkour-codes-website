import prisma from "@/prisma/lib/db";

export async function GetRandomCode() {
    const retryLimit = 10;
    const count = await prisma.mercy_parkour_codes.count();

    for (let i = 0; i < retryLimit; i++) {
      const randInt = Math.floor(Math.random() * count) + 1;
  
      const code = await prisma.mercy_parkour_codes.findFirst({
        where: { Map_Number: randInt },
      });
  
      if (!code) return null;
      if (!code.Is_Broken) return code;
  
      console.log(`Attempt ${i + 1}: Broken map found (Map #${randInt}). Retrying...`);
    }
  
    console.warn("Retry limit reached! No suitable map found after retrying.");
    return null;
}