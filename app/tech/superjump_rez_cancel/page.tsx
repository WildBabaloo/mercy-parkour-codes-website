import NavBarUI from "@/components/ui/NavBar";

export default function Slingshot() {
  return (
    <>
      <NavBarUI />
      <div className="bg-gray-800 text-white min-h-screen p-6">
        {/* Title Section */}
        <div className="text-center mt-6">
          <h1 className="text-4xl font-extrabold mb-2">Superjump Rez Cancel</h1>
          <h5 className="italic text-lg text-gray-400">
            Also known as: superjump res bhop, superjump res cancel sling
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
                Combine cancel GA superjump/slingshot and superjump rez
              </span>
            </li>
            <li>
              <span className="font-bold">
                Guardian angel toggle on (default setting)
              </span>
              <p className="ml-4">
                GA to the soul, once you reach the soul, look slightly up and
                cancel GA, sling and res at the exact same time
                <br />
                The buttons you should be clicking (based on PC default input
                settings) is shift (GA) → shift again (cancel GA) + space
                (slingshot) AT THE SAME TIME → res soon after → space (angelic
                descent)
              </p>
            </li>
            <li>
              <span className="font-bold">Guardian angel toggle off</span>
              <p className="ml-4">
                GA to the soul, once you reach the soul, look slightly up and
                cancel GA, sling and res at the exact same time (cancel GA
                before sling)
                <br />
                The buttons you should be clicking (based on PC default input
                settings) is HOLD shift (GA) → LET GO of shift + click space
                (slingshot) ALMOST AT THE SAME TIME (shift before space) → res
                soon after → space if needed (angelic descent)
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
              src="https://www.youtube.com/embed/-BD0huvklos?si=8zrTM1qGUoMb2Slw"
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
              This can also be done with crouch superjump (substitute space with
              ctrl), however you need to be within close proximity of the bot or
              else you will superjump too high and cancel the res (this is seen
              in the video)
            </li>
            <li>
              I would recommend trying toggle GA on if you’re a beginner as you
              do not need to be as precise with timing between canceling ga and
              superjumping (as you just need to smash GA and crouch together at
              the same time)
            </li>
            <li>
              On some editors/maps you will be able to see if you will retain
              bhop: your staff will glow blue as if you are nano boosted (this
              can be inconsistent though and I would not heavily rely on it)
            </li>
            <li>
              You can infinitely keep bhop as long as you cancel GA superjump on
              any prop (cancel GA superjump propjump), regardless if you already
              jumped, slinged or superjumped beforehand. There’s more
              information in the Infinite Bhop/Bhop Reset section of this
              handbook.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
