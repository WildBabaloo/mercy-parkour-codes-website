import NavBarUI from "@/components/ui/NavBar";

export default function Bhop_Reset() {
  return (
    <>
      <NavBarUI />
      <div className="bg-gray-800 text-white min-h-screen p-6">
        {/* Title Section */}
        <div className="text-center mt-6">
          <h1 className="text-4xl font-extrabold mb-2">
            Bhop Reset/Infinite Bhop
          </h1>
        </div>

        {/* Instructions Section */}
        <div className="border border-gray-600 rounded-lg p-6 bg-gray-700 shadow-md my-8 mx-auto max-w-4xl">
          <h3 className="text-xl font-semibold mb-4 text-orange-400">
            Instructions:
          </h3>
          <ul className="list-disc list-inside space-y-3 text-base leading-relaxed">
            <li>
              You can infinitely reset bhop as long as you cancel GA superjump
              whilst gliding across the ground on any surface/prop (cancel GA
              superjump + propjump).
            </li>
            <li>
              You can do this regardless if you have already jumped, slinged or
              superjumped beforehand. However, you must successfully use cancel
              tech (for example, cancel GA, cancel slingshot/superjump etc.)
              before resetting your bhop with the cancel superjump + propjump.
              Furthermore,
              <span className="font-bold">it must be a cancel superjump</span>
              (not cancel slingshot looking up).
            </li>
          </ul>
        </div>

        {/* Video Section */}
        <div>
          <h3 className="text-3xl font-bold mb-4 text-white text-center">
            Video Tutorial
          </h3>
          <div className="flex justify-center my-8">
            <iframe
              className="rounded-lg shadow-lg"
              width="640"
              height="360"
              src="https://www.youtube.com/embed/MWB3xFkA3p4?si=Ict5z1fG_PfAnXt5"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Tips Section */}
        <div className="border border-gray-600 rounded-lg p-6 bg-gray-700 shadow-md my-8 mx-auto max-w-4xl">
          <h3 className="text-xl font-semibold mb-4 text-green-400">Tips:</h3>
          <ul className="list-disc list-inside space-y-3 text-base leading-relaxed">
            <li>
              I would recommend trying toggle GA on if you’re a beginner as you
              do not need to be as precise with timing between canceling ga and
              superjumping (as you just need to smash GA and crouch together at
              the same time)
            </li>
            <li>
              On some editors/maps you will be able to see if you will retain
              bhop: your staff will glow blue as if you are nano boosted (this
              can be inconsistent though and I would not heavily rely on it)
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
