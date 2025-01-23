import NavBarUI from "@/components/ui/NavBar";
import { Button } from "@/components/ui/button";
import Card from "@/components/CodeCard";
import Ecopoint from "@/public/images/Map_Images/EcoPointAntarctica.png";

export default function Random() {
  return (
    <>
      <NavBarUI />
      <div className="bg-gray-800 min-h-screen p-6 text-white">
        {/* Header Section */}
        <div className="text-center mt-10">
          <h1 className="text-4xl font-bold mb-4">
            Random Mercy Parkour Code Selector
          </h1>
          <p className="italic text-lg">
            Not sure on what course to play? Let the generator choose for you!{" "}
            <br />
            Press the <span className="font-bold">Generate</span> button to get
            started!
          </p>
        </div>

        {/* Card Section */}
        <div className="flex justify-center items-center mt-12">
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

        {/* Generate Button */}
        <div className="text-center mt-8">
          <Button
            variant="default"
            className="px-8 py-3 text-lg font-semibold bg-primary text-white rounded-lg shadow-md hover:bg-primary-dark transition-transform transform hover:scale-105"
          >
            Generate
          </Button>
        </div>
      </div>
    </>
  );
}
