import If_You_Are_Still_Stuck_Text from "@/components/if_you_are_still_stuck_text";
import NavBarUI from "@/components/ui/NavBar";
import Link from "next/link";

export default function Pseudo_Bunnyhop() {
  return (
    <>
      <NavBarUI />
      <div className="bg-gray-800 text-white min-h-screen p-6">
        {/* Title Section */}
        <div className="text-center mt-6">
          <h1 className="text-4xl font-extrabold mb-2">Pseudo Bunnyhop</h1>
          <h5 className="italic text-lg text-gray-400">
            Also known as: pseudo bhop
          </h5>
        </div>

        {/* Instructions Section */}
        <div className="border border-gray-600 rounded-lg p-6 bg-gray-700 shadow-md my-8 mx-auto max-w-4xl">
          <h3 className="text-xl font-semibold mb-4 text-orange-400">
            Instructions:
          </h3>
          <div className="text-base leading-relaxed">
            <p>1- Slingshot towards the checkpoint</p>
            <p>
              2- Once you reach the checkpoint/ground, tap jump again - you
              should do a jump farther and faster than a normal jump
            </p>
          </div>
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
              src="https://www.youtube.com/embed/07jGzVbHdM4?si=6LSG9r1DUmH85BPd"
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
              If you’re on PC, binding jump to scroll wheel can make pseudo
              bhops easier as you can just spam scroll wheel as you hit the
              ground
            </li>
            <li>
              Pseudo bhops can help you reach places much farther than a normal
              jump as you keep your momentum from the slingshot
            </li>
            <li>
              Aiming for the furthest edge of the checkpoint can help you cover
              the distance of the pseudo bhop (instead of aiming for the middle
              and needing to jump over the second half of the checkpoint)
            </li>
            <li>
              Letting go of jump straight after slingshotting can help timing
              when to click jump again (rather than letting go of jump and
              jumping again very quickly), however this depends on the
              checkpoint
            </li>
            <li>
              Similar to rolls and wall bounces, you need to have quite a lot of
              speed for a pseudo bhop, therefore you cannot do it towards the
              very end of your slingshot as you will not have enough speed
            </li>
          </ul>
        </div>

        {/* Still Stuck Section */}
        <div className="border border-gray-600 rounded-lg p-6 bg-gray-700 shadow-md my-8 mx-auto max-w-4xl">
          <h3 className="text-xl font-semibold mb-4 text-yellow-400">
            Still Stuck?
          </h3>
          <div className="text-base leading-relaxed">
            <p>Consider the solution to be:</p>
            <p>
              1-{" "}
              <Link
                href="/tech/sit_emote"
                className="text-blue-400 hover:text-blue-500 underline transition-colors duration-300"
              >
                Sit emote
              </Link>
            </p>
            <p>
              2- A soft locked map/
              <Link
                href="/tech/ghost_ga"
                className="text-blue-400 hover:text-blue-500 underline transition-colors duration-300"
              >
                Ghost GA
              </Link>
            </p>
            <div className="mt-8 font-semibold">
              <If_You_Are_Still_Stuck_Text />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
