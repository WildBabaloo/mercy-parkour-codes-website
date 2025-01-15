import If_You_Are_Still_Stuck_Text from "@/components/if_you_are_still_stuck_text";
import NavBarUI from "@/components/ui/NavBar";
import Link from "next/link";

export default function Walking_Slant_Jump() {
  return (
    <>
      <NavBarUI />
      <div className="bg-gray-800 text-white min-h-screen p-6">
        {/* Title Section */}
        <div className="text-center mt-6">
          <h1 className="text-4xl font-extrabold mb-2">Walking Slant Jump</h1>
        </div>

        {/* Instructions Section */}
        <div className="border border-gray-600 rounded-lg p-6 bg-gray-700 shadow-md my-8 mx-auto max-w-4xl">
          <h3 className="text-xl font-semibold mb-4 text-orange-400">
            Instructions:
          </h3>
          <ul className="list-disc list-inside space-y-3 text-base leading-relaxed">
            <li>
              <span className="font-bold">
                Find an object/singular step you can WALK up and down on
              </span>
              <p className="ml-4">
                1- Walk up on the object
                <br />
                2- Walk back down and GA at the same time. If done correctly,
                you should move downwards as if you are doing a crouch GA
                without crouch
                <br />
                3- Cancel GA, sling, or superjump etc. (depending on checkpoint)
                and/or hold angelic descent if needed
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
              src="https://www.youtube.com/embed/78qrOdwcysk?si=lUvyhBtaIwGD3vim"
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
              You can use any directional input key (WASD) to get up/down the
              object - as long as you are moving down from the object and GA at
              the same time, you will be able to do a walking slant jump
            </li>
            <li>
              You can usually tell when a checkpoint will need a slant jump if
              the orb is lower than the regular ga flight path and if crouch is
              disabled and/or if crouch GA does not get the orb
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
                href="/tech/jumping_slant_jump"
                className="text-blue-400 hover:text-blue-500 underline transition-colors duration-300"
              >
                Jumping Slant Jump
              </Link>
            </p>
            <p>
              2-{" "}
              <Link
                href="/tech/crouch_ga_slingshot"
                className="text-blue-400 hover:text-blue-500 underline transition-colors duration-300"
              >
                Crouch GA Sling
              </Link>
              /
              <Link
                href="/tech/crouch_ga_superjump"
                className="text-blue-400 hover:text-blue-500 underline transition-colors duration-300"
              >
                Superjump
              </Link>
            </p>
            <p>
              3-{" "}
              <Link
                href="/tech/cancel_ga_slingshot"
                className="text-blue-400 hover:text-blue-500 underline transition-colors duration-300"
              >
                Cancel GA Sling
              </Link>
              /
              <Link
                href="/tech/cancel_ga_superjump"
                className="text-blue-400 hover:text-blue-500 underline transition-colors duration-300"
              >
                Superjump
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
