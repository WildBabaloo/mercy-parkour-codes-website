import If_You_Are_Still_Stuck_Text from "@/components/if_you_are_still_stuck_text";
import NavBarUI from "@/components/ui/NavBar";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mercy Parkour - Superjump",
  description: "This page teaches you about Superjumps",
  icons: {
    icon: ["/favicon.ico?v=1"],
    apple: ["/apple-touch-icon.png?v=1"],
    shortcut: ["/apple-touch-icon.png?v=1"],
  },
  manifest: "/site.webmanifest",
};

export default function Superjump() {
  return (
    <>
      <NavBarUI />
      <div className="bg-gray-800 text-white min-h-screen p-6">
        {/* Title Section */}
        <div className="text-center mt-6">
          <h1 className="text-4xl font-extrabold mb-2">Normal Superjump</h1>
          <h5 className="italic text-lg text-gray-400">Also known as: sj</h5>
        </div>

        {/* Instructions Section */}
        <div className="border border-gray-600 rounded-lg p-6 bg-gray-700 shadow-md my-8 mx-auto max-w-4xl">
          <h3 className="text-xl font-semibold mb-4 text-orange-400">
            Instructions:
          </h3>
          <ul className="list-disc list-inside space-y-3 text-base leading-relaxed">
            <li>
              <span className="font-bold">
                Guardian angel toggle on (default setting)
              </span>
              <p className="ml-4 ">
                Fly to a target, when you reach the target click crouch.
                <br />
                The buttons you should be clicking (based on PC default input
                settings) is shift (fly to bot) → click ctrl (crouch) → hold
                space (Angelic Descent) (optional and varies with checkpoints)
              </p>
            </li>
            <li>
              <span className="font-bold">Guardian angel toggle off</span>
              <p className="ml-4">
                Fly to a target, when you reach the target click crouch.
                <br />
                The buttons you should be clicking (based on PC default input
                settings) is HOLD shift (fly to bot) → click ctrl (crouch) →
                hold space (Angelic Descent) (optional and varies with
                checkpoints)
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
              src="https://www.youtube.com/embed/Lse0GswmL84?si=J5wgEapCADwo20sG"
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
              On the right side of your screen (above your staff/weapon) you
              will see a bar. This will fill up the more your Guardian Angel is
              active, and the more the bar is filled up, the higher/further you
              will go after clicking crouch.
            </li>
            <li>
              Holding the jump key after using crouch will enable angelic
              descent and won’t make you instantly fall down again
            </li>
            <li>
              Holding your any input button (WASD for default PC settings)
              during Guardian Angel will make you slightly move that direction
              before and after superjumping.
            </li>
            <li>
              Holding the forward input button (W for default PC settings)
              during Guardian Angel and after clicking crouch will let you move
              forward mid-superjump. That way, you won’t need to factor in your
              reaction time of clicking W to create distance.
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
                href="/tech/slingshot"
                className="text-blue-400 hover:text-blue-500 underline transition-colors duration-300"
              >
                Slingshot
              </Link>
            </p>
            <p>
              2-{" "}
              <Link
                href="/tech/propjump"
                className="text-blue-400 hover:text-blue-500 underline transition-colors duration-300"
              >
                Propjump
              </Link>
            </p>
            <p>
              3-{" "}
              <Link
                href="/tech/instant_superjump"
                className="text-blue-400 hover:text-blue-500 underline transition-colors duration-300"
              >
                Instant Superjump
              </Link>
            </p>
            <p>
              4-{" "}
              <Link
                href="/tech/crouch_ga_superjump"
                className="text-blue-400 hover:text-blue-500 underline transition-colors duration-300"
              >
                Crouch GA Superjump
              </Link>
            </p>
            <p>
              5-{" "}
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
            <p>
              6-{" "}
              <Link
                href="/tech/bhop_reset"
                className="text-blue-400 hover:text-blue-500 underline transition-colors duration-300"
              >
                Infinite Bhop/Bhop Reset
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
