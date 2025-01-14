import If_You_Are_Still_Stuck_Text from "@/components/if_you_are_still_stuck_text";
import NavBarUI from "@/components/ui/NavBar";
import Link from "next/link";

export default function Slingshot() {
  return (
    <>
      <NavBarUI />
      <div className="bg-gray-800 text-white min-h-screen p-6">
        {/* Title Section */}
        <div className="text-center mt-6">
          <h1 className="text-4xl font-extrabold mb-2">Normal Slingshot</h1>
          <h5 className="italic text-lg text-gray-400">
            Also known as: slings, boost, directional slingshots
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
                Guardian angel toggle on (default setting)
              </span>
              <p className="ml-4 ">
                Fly to a target, when you reach the target click jump.
                <br />
                The buttons you should be clicking (based on PC default input
                settings) is shift (fly to bot) → click space (jump) → hold
                space (Angelic Descent) (optional and varies with checkpoints)
              </p>
            </li>
            <li>
              <span className="font-bold">Guardian angel toggle off</span>
              <p className="ml-4">
                Fly to a target, when you reach the target click jump.
                <br />
                The buttons you should be clicking (based on PC default input
                settings) is HOLD shift (fly to bot) → click space (jump) → KEEP
                HOLDING shift → hold space (Angelic Descent) (optional and
                varies with checkpoints)
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
              src="https://www.youtube.com/embed/2yER11UxEzI?si=nEhWdrR__ZLXJXn6"
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
              will go after clicking jump.
            </li>
            <li>
              Mercy’s movement is omnidirectional, therefore, where you are
              looking the moment you click jump will be the direction Mercy will
              go. This can be helpful for checkpoints which are not straight
              ahead - just as you’re about to click jump, look towards the
              direction of the checkpoint and click jump. This also works
              vertically, not just horizontally - if you look up, Mercy will fly
              up!
            </li>
            <li>
              When using toggle on, ensure you do not click on Guardian Angel
              again (even after pressing the jump key) as this will cancel it
              and stop your sling
            </li>
            <li>
              When using toggle off, ensure to not let go of Guardian Angel. The
              moment you let go (even after pressing jump) will cancel it and
              stop your sling
            </li>
            <li>
              If you are flying past your checkpoint, consider canceling your
              Guardian Angel (click Guardian Angel again for toggle on users, or
              let go of it for toggle off users) as you’re approaching it
            </li>
            <li>
              If a checkpoint is in a room and you’re looking down whilst
              clicking jump and still hit your head on the doorframe/an object,
              consider tapping the jump key mid-sling. This will let you fly
              lower but still maintain your momentum (angelic descent
              management)
            </li>
            <li>
              You can move at the end of Guardian Angel (before slingshotting)
              using the directional keys (WASD/Joystick) to avoid obstacles as
              well
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
                href="/tech/ga_cancel_bhop"
                className="text-blue-400 hover:text-blue-500 underline transition-colors duration-300"
              >
                Cancel GA Bhop
              </Link>
            </p>
            <p>
              2-{" "}
              <Link
                href="/tech/crouch_ga_bhop"
                className="text-blue-400 hover:text-blue-500 underline transition-colors duration-300"
              >
                Crouch GA Bhop
              </Link>
            </p>
            <p>
              3-{" "}
              <Link
                href="/tech/superjump"
                className="text-blue-400 hover:text-blue-500 underline transition-colors duration-300"
              >
                Superjump
              </Link>
            </p>
            <p>
              4-{" "}
              <Link
                href="/tech/propjump"
                className="text-blue-400 hover:text-blue-500 underline transition-colors duration-300"
              >
                Propjump
              </Link>
            </p>
            <p>
              5-{" "}
              <Link
                href="/tech/instant_superjump"
                className="text-blue-400 hover:text-blue-500 underline transition-colors duration-300"
              >
                Instant Superjump
              </Link>
            </p>
            <p>
              6-{" "}
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
