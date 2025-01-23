import NavBarUI from "@/components/ui/NavBar";
import { Button } from "@/components/ui/button";
import Card from "@/components/CodeCard";
import Ecopoint from "@/public/images/Map_Images/EcoPointAntarctica.png";

export default function Extras() {
  return (
    <>
      <NavBarUI />
      <div className="bg-gray-800 p-4 text-white">
        <div className="text-center mt-4">
          <h1 className="text-4xl">Random Mercy Parkour Code Selector</h1>
          <p className="italic mt-2">
            Not sure on what course to play? Let the generator choose for you!
            Press the Generate button to get started!
          </p>
        </div>
        <div className="flex justify-center items-center m-8">
          {/* Card Section */}
          <Card
            key="3157"
            title="Ecopoint: Antarctica (Winter)"
            code="QTXG4"
            checkpoints="45"
            difficulty="Intermediate"
            mapper="OnMyKnees"
            video="https://www.youtube.com/watch?v=tJMdXxLr7BU"
            likes={0}
            imageSrc={Ecopoint}
          />
        </div>
        <div className="text-center">
          <Button variant="default">Generate</Button>
        </div>
      </div>
    </>
  );
}
