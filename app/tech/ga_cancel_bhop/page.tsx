import NavBarUI from "@/components/ui/NavBar";

export default function GA_Cancel_Bhop() {
  return (
    <>
      <NavBarUI />
      <div className="bg-gray-800 text-white min-h-screen p-6">
        {/* Title Section */}
        <div className="text-center mt-6">
          <h1 className="text-4xl font-extrabold mb-2">GA Cancel Bhop</h1>
          <h5 className="italic text-lg text-gray-400">
            Also known as: guardian angel cancel bunnyhop
          </h5>
        </div>

        {/* Instructions Section */}
        <div className="border border-gray-600 rounded-lg p-6 bg-gray-700 shadow-md my-8 mx-auto max-w-4xl">
          <h3 className="text-xl font-semibold mb-4 text-orange-400">
            Instructions:
          </h3>
          <p className="text-base leading-relaxed">
            <ul className="list-disc list-inside space-y-3 text-base leading-relaxed">
              <li>
                <span className="font-bold">
                  Guardian angel toggle on (default setting)
                </span>
                <p className="ml-4">
                  Fly to the bot, cancel your guardian angel and then hold
                  angelic descent. If done correctly, you should have a jump
                  once you hit the ground (the bhop). <br />
                  The buttons you should be clicking (based on PC default input
                  settings) is shift (fly to bot) → click shift AGAIN (to cancel
                  GA) → space (angelic descent)
                </p>
              </li>
              <li>
                <span className="font-bold">Guardian angel toggle off</span>
                <p className="ml-4">
                  Fly to the bot, cancel your guardian angel and then hold
                  angelic descent. If done correctly, you should have a jump
                  once you hit the ground (the bhop). <br />
                  The buttons you should be clicking (based on PC default input
                  settings) is HOLD shift (fly to bot) → LET GO of shift (to
                  cancel GA) → space (angelic descent)
                </p>
              </li>
            </ul>
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
              src="https://www.youtube.com/embed/e_jd4Y6Xc1g?si=_Z4B9pacxSEOuPdI"
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
              Make sure to not jump BEFORE you fly to the bot or DURING the
              flight as this will not give you the bhop
            </li>
            <li>
              On some editors/maps you will be able to see if you will retain
              bhop: your staff will glow blue as if you are nano boosted (this
              can be inconsistent though and I would not heavily rely on it)
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
