"use client";
import NavBarUI from "@/components/ui/NavBar";
import Card from "@/components/CodeCard";
import Ecopoint from "@/images/Map_Images/EcoPointAntarctica.png";

export default function Codes() {
  return (
    <>
      <NavBarUI />
      <div className="flex items-center justify-center min-h-screen bg-gray-800 p-4">
        <Card
          title="Mercy Parkour Ep: Antarctica"
          code="QTXG4"
          difficulty="Intermediate"
          mapper="OnMyKnees"
          date="12 Oct 2024"
          likes={36}
          imageSrc={Ecopoint}
        />
      </div>
    </>
  );
}
