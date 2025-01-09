import NavBarUI from "@/components/ui/NavBar";

export default function Jumping_Slant_Jump() {
  return (
    <>
      <NavBarUI />
      <div className="bg-gray-800 text-white min-h-screen p-6">
        {/* Title Section */}
        <div className="text-center mt-6">
          <h1 className="text-4xl font-extrabold mb-2">Walking Slant Jump</h1>
          <h5 className="italic text-lg text-gray-400">
            Also known as: jumping crouch ga
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
                Find a slope or uneven ground (such as a staircase)
              </span>
              <p className="ml-4">
                1- Jump in place
                <br />
                2- Just as you’re about to hit the ground, GA. If done
                correctly, you should move downwards as if you are doing a
                crouch GA without crouch
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
              src="https://www.youtube.com/embed/CS9ablyht5E?si=YFdSY2BKOjcLOIi2"
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
              You can mix crouch GA and a jumping slant jump to make an even
              deeper crouch GA (this can be seen in the video)
            </li>
            <li>
              You can usually tell when a checkpoint will need a jumping slant
              jump if the orb is lower than the regular ga flight path and if
              crouch is disabled and/or if regular crouch GA does not get the
              orb
            </li>
            <li>
              A general rule of thumb on perfecting the timing of a jumping
              slant is to wait for the audio cue of Mercy&apos;s heels hitting
              the ground, however, this may not always work as the timing of
              slant jumps can differ.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
