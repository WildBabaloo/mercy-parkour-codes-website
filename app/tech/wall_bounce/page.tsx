import NavBarUI from "@/components/ui/NavBar";

export default function Bunnyhop() {
  return (
    <>
      <NavBarUI />
      <div className="bg-gray-800 text-white min-h-screen p-6">
        {/* Title Section */}
        <div className="text-center mt-6">
          <h1 className="text-4xl font-extrabold mb-2">Wall Bounce</h1>
        </div>

        {/* Instructions Section */}
        <div className="border border-gray-600 rounded-lg p-6 bg-gray-700 shadow-md my-8 mx-auto max-w-4xl">
          <h3 className="text-xl font-semibold mb-4 text-orange-400">
            Instructions:
          </h3>
          <p className="text-base leading-relaxed">
            1. Slingshot towards a wall at an angle, then look quickly where you
            want to go as you hit the wall
            <br />
            2. If done correctly you should “bounce” off it, and with enough
            momentum you will be able to keep your momentum/speed as well
            <br />
            3. Activate angelic descent (space) if needed
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
              src="https://www.youtube.com/embed/eo5fTVJb3r8?si=iehlO9Ymg4trc7fY"
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
              You will need a lot of speed and momentum, you cannot do a wall
              bounce towards the very end of your slingshot as you will not have
              enough speed
            </li>
            <li>
              Ensure you LOOK at where you want to go after hitting the wall
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
