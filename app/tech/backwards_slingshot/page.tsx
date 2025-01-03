import NavBarUI from "@/components/ui/NavBar";

export default function Backwards_Slingshot() {
  return (
    <>
      <NavBarUI />
      <div className="bg-gray-800 text-white min-h-screen p-6">
        {/* Title Section */}
        <div className="text-center mt-6">
          <h1 className="text-4xl font-extrabold mb-2">Backwards Slingshot</h1>
          <h5 className="italic text-lg text-gray-400">
            Also known as: backwards sling
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
                Fly to a target, when you reach the target click your backwards
                directional input and jump.
                <br />
                The buttons you should be clicking (based on PC default input
                settings) is shift (fly to bot) → click S (hold backwards) →
                click space (jump) → hold space (Angelic Descent) (optional and
                varies with checkpoints)
              </p>
            </li>
            <li>
              <span className="font-bold">Guardian angel toggle off</span>
              <p className="ml-4">
                Fly to a target, when you reach the target click your backwards
                directional input and jump.
                <br />
                The buttons you should be clicking (based on PC default input
                settings) is HOLD shift (fly to bot) → click S (hold backwards)
                → click space (jump) → KEEP HOLDING shift (Guardian Angel) →
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
              src="https://www.youtube.com/embed/ohESnHIy0Ek?si=cd_7fSHdYZi0uZ2C"
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
              Due to the backwards slingshot nerf in Season 4, it can sometimes
              be better to just do a normal slingshot but turn backwards as
              you’re about to press jump.
            </li>
            <li>
              If you look down before pressing jump, you will fly upwards and do
              a backwards superjump.
            </li>
            <li>
              When using toggle on, ensure you do not click Guardian Angel again
              (even after pressing jump) as this will cancel it and stop your
              sling
            </li>
            <li>
              When using toggle off, ensure not let go of Guardian Angel. The
              moment you let go (even after pressing jump) will cancel it and
              stop your sling
            </li>
            <li>
              If you are flying past your checkpoint, consider canceling your
              Guardian Angel (click Guardian Angel again for toggle on users, or
              let go of it for toggle off users) as you’re approaching it
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
