import NavBarUI from "@/components/ui/NavBar";
import Card from "@/components/CodeCard";
import Ecopoint from "@/images/Map_Images/EcoPointAntarctica.png";
import prisma from "@/prisma/lib/db";

export default async function Codes() {
  const codes = await prisma.mercy_parkour_codes.findMany({
    take: 25,
  });

  console.log(codes);

  return (
    <>
      <NavBarUI />
      <div className="min-h-screen bg-gray-800 flex items-center justify-center p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-screen-md w-full">
          {codes.map((code) => (
            <Card
              key={code.Map_Number}
              title={code.Map}
              code={code.Code}
              difficulty={code.Difficulty ? code.Difficulty : "N/A"}
              mapper={code.Author ? code.Author : "Unknown Mapper"}
              date="12 Oct 2024"
              likes={36}
              imageSrc={Ecopoint}
            />
          ))}
        </div>
      </div>
      {/*         <Card
          title="Mercy Parkour Ep: Antarctica"
          code="QTXG4"
          difficulty="Intermediate"
          mapper="OnMyKnees"
          date="12 Oct 2024"
          likes={36}
          imageSrc={Ecopoint}
        />*/}
    </>
  );
}
