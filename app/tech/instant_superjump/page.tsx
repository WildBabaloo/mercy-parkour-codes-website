import NavBarUI from "@/components/ui/NavBar";
import Image from "next/image";
import NoFacingTargetOnly from "@/public/images/warnings/no-facing-target-only.png";
import If_You_Are_Still_Stuck_Text from "@/components/if_you_are_still_stuck_text";
import Link from "next/link";

export default function Instant_Superjump() {
  return (
    <>
      <NavBarUI />
      <div className="bg-gray-800 text-white min-h-screen p-6">
        {/* Title Section */}
        <div className="text-center mt-6">
          <h1 className="text-4xl font-extrabold mb-2">Instant Superjump</h1>
          <h5 className="italic text-lg text-gray-400">
            Also known as: accelerated propjump, accel prop, insta superjump,
            insta sj
          </h5>
        </div>

        {/* Warning Section */}
        <div className="border border-yellow-400 rounded-lg p-6 bg-gray-700 shadow-md my-8 mx-auto max-w-4xl">
          <h3 className="text-xl font-bold mb-4 text-yellow-400">
            IMPORTANT NOTE:
          </h3>
          <p>
            This tech can only be accomplished with certain mercy settings. You
            need Guardian Angel Target Priority to be either “Prefer Facing
            Target” or “Prefer Beam Target.”
          </p>
          <p className="font-bold text-xl">
            USING “FACING TARGET ONLY” MEANS YOU WILL NOT BE ABLE TO DO THIS
            TECH.
          </p>
          <div className="relative w-full mt-4">
            <Image
              src={NoFacingTargetOnly}
              alt="NoFacingTargetOnly image"
              className="object-contain rounded-lg"
            />
          </div>
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
                Attach beam, position yourself so your target is above you and
                you are hugging close to the wall, GA, cancel GA (very very very
                quickly) and you should sling upwards
                <br />
                The buttons you should be clicking (based on PC default input
                settings) is left click (attach beam) → WASD (movement keys) to
                position yourself so your target is above you and you are
                hugging close to the wall → hold W (forwards) → double tap shift
                extremely quickly (GA and cancel GA) → space (to activate
                angelic descent)
              </p>
            </li>
            <li>
              <span className="font-bold">Guardian angel toggle off</span>
              <p className="ml-4">
                Attach beam, position yourself so your target is above you and
                you are hugging close to the wall, GA, cancel GA (very very very
                quickly) and you should sling upwards
                <br />
                The buttons you should be clicking (based on PC default input
                settings) is left click (attach beam) → WASD (movement keys) to
                position yourself so your target is above you and you are
                hugging close to the wall → hold W (forwards) → TAP shift (GA) →
                space (to activate angelic descent)
              </p>
            </li>
          </ul>
        </div>

        {/* Video Section */}
        <div>
          <h3 className="text-3xl font-bold mb-4 text-white text-center">
            Video Tutorial{" "}
            <p className="italic text-small">
              (big thanks to Toma for the vid!)
            </p>
          </h3>
          <div className="flex justify-center my-8">
            <iframe
              className="rounded-lg shadow-lg"
              width="640"
              height="360"
              src="https://www.youtube.com/embed/kseMTJjYnI4?si=S-YVHCqhHLP6EukC"
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
            <li>Make sure you GA and cancel GA extremely quickly</li>
            <li>Hugging close to the wall helps a lot</li>
            <li>
              I’ve found Toggle Guardian Angel OFF a lot easier than toggle on
              as you just need to tap shift once rather than worrying about
              tapping it very quickly again
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
                href="/tech/propjump"
                className="text-blue-400 hover:text-blue-500 underline transition-colors duration-300"
              >
                Propjump
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
