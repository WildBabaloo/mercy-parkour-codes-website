import NavBarUI from "@/components/ui/NavBar";

export default function Sit_Emote() {
  return (
    <>
      <NavBarUI />
      <div className="bg-gray-800 text-white min-h-screen p-6">
        {/* Title Section */}
        <div className="text-center mt-6">
          <h1 className="text-4xl font-extrabold mb-2">Sit Emote</h1>
        </div>

        {/* Instructions Section */}
        <div className="border border-gray-600 rounded-lg p-6 bg-gray-700 shadow-md my-8 mx-auto max-w-4xl">
          <h3 className="text-xl font-semibold mb-4 text-orange-400">
            Instructions:
          </h3>
          <p className="text-base leading-relaxed">
            Use the “Relax” emote (purchasable from the store), cancel it and
            hold jump. You should bhop once you touch the floor.
          </p>
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
              src="https://www.youtube.com/embed/pXELQOsnBlc?si=C6WuyEvxC04dENkZ"
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
              If you still are not making it to the checkpoint and you are
              certain you need to use the sit emote, try and move yourself to
              the edge of the checkpoint before using the emote. This will cover
              the distance you might be missing if you are not able to reach the
              checkpoint.
            </li>
            <li>
              I recommend pressing forwards (W key) to cancel the emote (rather
              than clicking on the jump button to cancel and holding forwards
              when you see the emote cancel animation). That way, you won’t need
              to factor in your reaction time of clicking forwards to create
              distance.
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
