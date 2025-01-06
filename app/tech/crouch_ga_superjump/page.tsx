import NavBarUI from "@/components/ui/NavBar";

export default function Crouch_GA_Superjump() {
  return (
    <>
      <NavBarUI />
      <div className="bg-gray-800 text-white min-h-screen p-6">
        {/* Title Section */}
        <div className="text-center mt-6">
          <h1 className="text-4xl font-extrabold mb-2">Crouch GA Superjump</h1>
          <h5 className="italic text-lg text-gray-400">
            Also known as: Crouch GA sj, Overwatch 1 superjump
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
                Use crouch then GA almost at the same time, ensuring that crouch
                comes before GA. Once at your target, click crouch (to
                superjump).
                <br />
                The buttons you should be clicking (based on PC default input
                settings) is ctrl (crouch) then shift (Guardian Angel) ALMOST AT
                THE SAME TIME (crouch slightly before) → once at target, click
                ctrl/crouch (to superjump) → hold space if needed (angelic
                descent)
              </p>
            </li>
            <li>
              <span className="font-bold">Guardian angel toggle off</span>
              <p className="ml-4">
                Use crouch then GA almost at the same time, ensuring that crouch
                comes before GA. Keep holding GA until you’re at your target.
                Once at your target, click crouch (to superjump).
                <br />
                The buttons you should be clicking (based on PC default input
                settings) is ctrl (crouch) then shift (Guardian Angel) ALMOST AT
                THE SAME TIME (crouch slightly before) → HOLD shift (Guardian
                Angel) → once at target, click ctrl/crouch (to superjump) → hold
                space if needed (angelic descent)
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
              src="https://www.youtube.com/embed/dhl0V_JYvZw?si=QatD-PGF-iM2Mbug"
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
              Ensure you crouch slightly before GA - you will know if you have
              done the tech correctly if you notice your mercy is flying lower
            </li>
            <li>
              Waiting for the uptick when you reach your target and at the very
              end of GA, then clicking crouch will help you travel
              further/higher compared to just a normal crouch GA superjump
              (similar to late superjump - late crouch GA superjump)
            </li>
            <li>
              You can mix crouch GA and a jumping slant jump to make an even
              deeper crouch GA
            </li>
            <li>
              Crouch GA’s benefits:
              <p className="ml-4">
                1- You get more meter charge in a shorter period of time due to
                the extra distance obtained from the dip at the start of GA and
                that GA is active longer even once you reach your target - this
                can help you gain more height/further distance during superjumps
              </p>
              <p className="ml-4">
                2- You can go navigate under/around obstacles as your body is
                lower during flight
              </p>
            </li>
            <li>
              Crouch GA’s limitations:
              <p className="ml-4">
                1- You will not be as close to your target at the end of GA
                compared to just a normal GA
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
