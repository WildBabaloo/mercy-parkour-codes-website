import NavBarUI from "@/components/ui/NavBar";
import Image from "next/image";
import NoFacingTargetOnly from "@/public/images/warnings/no-facing-target-only.png";

export default function Slingshot() {
  return (
    <>
      <NavBarUI />
      <div className="bg-gray-800 text-white min-h-screen p-6">
        {/* Title Section */}
        <div className="text-center mt-6">
          <h1 className="text-4xl font-extrabold mb-2">Normal Propjump</h1>
          <h5 className="italic text-lg text-gray-400">
            Also known as: floor bounce (propjump on floor)
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
                Attach your beam to your target, put an object (such as a wall,
                floor, lamppost etc) between you and the target, GA, when you
                hit the object, jump/crouch (depending on checkpoint)
                <br />
                The buttons you should be clicking (based on PC default input
                settings) is left click (attach beam) → WASD (movement keys) to
                position yourself between target and object → click shift
                (Guardian Angel) → ctrl (crouch) or space (jump) → space (to
                activate angelic descent)
              </p>
            </li>
            <li>
              <span className="font-bold">Guardian angel toggle off</span>
              <p className="ml-4">
                Attach your beam to your target, put an object (such as a wall,
                floor, lamppost etc) between you and the target, GA, when you
                hit the object, jump/crouch (depending on checkpoint)
                <br />
                The buttons you should be clicking (based on PC default input
                settings) is left click (attach beam) → WASD (movement keys) to
                position yourself between target and object → hold shift
                (Guardian Angel) → ctrl (crouch) or space (jump) → keep holding
                shift (Guardian Angel) → space (to activate angelic descent)
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
              src="https://www.youtube.com/embed/dLtHe3IZzaI?si=6haftEtzgjknhJ0F"
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
              It can sometimes help to envision propjumps as a normal GA but
              with the object as the bot you’re flying to - just like with
              flying to a normal bot, there are late propjumps etc.
            </li>
            <li>
              There are a plethora of different propjumps - you can propjump
              against walls, ceilings, floors (floor bounce), etc.
            </li>
            <li>
              Mercy’s beam has a 1.5 second timer when you’re out of LOS or too
              far away from your target before the beam breaks
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
