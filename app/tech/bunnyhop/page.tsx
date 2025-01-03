import NavBarUI from "@/components/ui/NavBar";

export default function Bunnyhop() {
  return (
    <>
      <NavBarUI />
      <div className="bg-gray-800 text-white min-h-screen p-6">
        {/* Title Section */}
        <div className="text-center mt-6">
          <h1 className="text-4xl font-extrabold mb-2">Bunnyhop</h1>
          <h5 className="italic text-lg text-gray-400">Also known as: bhop</h5>
        </div>

        {/* Instructions Section */}
        <div className="border border-gray-600 rounded-lg p-6 bg-gray-700 shadow-md my-8 mx-auto max-w-4xl">
          <h3 className="text-xl font-semibold mb-4 text-orange-400">
            Instructions:
          </h3>
          <p className="text-base leading-relaxed">
            WALK off any ledge or platform and hold jump/space to activate
            Angelic Descent. Keep holding jump/space even after touching the
            ground, and you will do a ‘jump’. That’s the bunnyhop!
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
              src="https://www.youtube.com/embed/9v5yd4vnmZs?si=mILsYRE7MBBt2v5J"
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
              Make sure to WALK off the platform, not jump, or else you will not
              have bhop.
            </li>
            <li>
              This is useful if you are jumping off a platform to a checkpoint
              and cannot make it, or if you are on a platform and cannot reach a
              bot.
            </li>
            <li>
              On some editors/maps, you will be able to see if you will retain
              bhop: your staff will glow blue as if you are nano-boosted (this
              can be inconsistent though, so do not heavily rely on it).
            </li>
            <li>
              This tech works for every hero as long as you walk off a platform
              without using jump first!
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
