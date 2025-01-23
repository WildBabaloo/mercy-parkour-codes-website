"use client";
import NavBarUI from "@/components/ui/NavBar";
import GenerateSection from "./generate-section";

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
        <div>
          <GenerateSection />
        </div>
      </div>
    </>
  );
}
