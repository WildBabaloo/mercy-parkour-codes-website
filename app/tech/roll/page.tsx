import NavBarUI from "@/components/ui/NavBar";

export default function Roll() {
  return (
    <>
      <NavBarUI />
      <div className="bg-gray-800 text-white min-h-screen p-6">
        {/* Title Section */}
        <div className="text-center mt-6">
          <h1 className="text-4xl font-extrabold mb-2">Roll</h1>
          <h5 className="italic text-lg text-gray-400">
            Also known as: corner bounces, prop bounces
          </h5>
        </div>

        {/* Instructions Section */}
        <div className="border border-gray-600 rounded-lg p-6 bg-gray-700 shadow-md my-8 mx-auto max-w-4xl">
          <h3 className="text-xl font-semibold mb-4 text-orange-400">
            Instructions:
          </h3>
          <ul className="list-disc list-inside space-y-3 text-base leading-relaxed">
            <li>
              <span className="font-bold">
                Find prominent corners, edges or protruding geometry (non
                vertical)
              </span>
              <p className="ml-4 ">
                1- Slingshot from your GA target towards the edge or corner,
                ensuring that you are hitting directly on or slightly below it
                <br />
                2- If executed correctly, the roll should rebound or ‘bounce’
                you slightly upwards and horizontally, providing you with
                additional momentum
                <br />
                3- Look towards the checkpoint and activate angelic descent
                (hold jump) if needed
              </p>
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
              src="https://www.youtube.com/embed/59YKM_-JJvE?si=oGBhaKjxb3b-u_BJ"
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
              Make sure to aim lower of where you need to roll as if you aim too
              high you will just land on the edge/corner and reset
            </li>
            <li>
              You need to have quite a lot of speed for a max height roll,
              therefore you cannot do a roll towards the very end of your
              slingshot as you will not have enough speed, and you must ensure
              that guardian angel is active throughout the entire slingshot and
              roll
            </li>
            <li>
              Most checkpoints with an orb at the corner of a table/surface will
              require you to “roll” off it
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
