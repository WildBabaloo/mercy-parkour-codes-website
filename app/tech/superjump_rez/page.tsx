import NavBarUI from "@/components/ui/NavBar";

export default function Superjump_Rez() {
  return (
    <>
      <NavBarUI />
      <div className="bg-gray-800 text-white min-h-screen p-6">
        {/* Title Section */}
        <div className="text-center mt-6">
          <h1 className="text-4xl font-extrabold mb-2">Superjump Rez</h1>
          <h5 className="italic text-lg text-gray-400">
            Also known as: sj rez, tiktok rez
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
                Superjump rez with crouch (only works if soul is in close
                proximity)
              </span>
              <p className="ml-4">
                Guardian angel towards the soul and upon resurrection range,
                click crouch and rez at the same time
                <br />
                The buttons you should be clicking (based on PC default input
                settings) is shift (GA) → click ctrl and E (superjump and rez) →
                hold space (angelic descent)
              </p>
            </li>
            <li>
              <span className="font-bold">Superjump rez with jump</span>
              <p className="ml-4">
                <span className="font-semibold">Method 1:</span> Guardian angel
                towards the soul at any distance and upon resurrection range,
                slingshot looking slightly upwards and rez at the same time (Add
                sling rez link)
                <br />
                <span className="font-semibold">Method 2:</span> Guardian angel
                towards the soul at any distance and upon resurrection range,
                slingshot looking upwards then quickly look back down towards
                the soul and rez at the same time (flick rez)
                <br />
                The buttons you should be clicking (based on PC default input
                settings) is shift (GA) → click space and E (jump and rez) →
                hold space (angelic descent)
              </p>
            </li>
            <li>
              <span className="font-bold">Backwards superjump rez</span>
              <p className="ml-4">
                Guardian angel towards the soul at any distance, whilst flying
                towards the soul, face your back towards the soul and look down.
                Upon resurrection range, backwards slingshot looking slightly
                downwards and rez at the same time.
                <br />
                The buttons you should be clicking (based on PC default input
                settings) is shift (GA) → hold S (backwards) → click space and E
                (backwards jump and rez) → hold space (angelic descent)
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
              src="https://www.youtube.com/embed/K11UX0l98U0?si=qaatZwnU8ssSStFa"
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
              Crouch superjump rez only works if you are within 7 meters of the
              soul, anything more and you will fly too high and out of the rez
              range (if you are pushing for 7m then ensure you use crouch as
              soon as you are in range of the rez).
            </li>
            <li>
              For jump superjump rez, how high you should look before clicking
              space and rez will depend on how far you flew towards the soul
              (and therefore how much your GA bar is filled) - if you were close
              to the soul, look further up; contrarily, if you were far away
              from the soul, do not look straight up or you will slingshot out
              of maximum rez range
            </li>
            <li>
              Backwards superjump rez is a lot easier to perform due to the
              Season 4 backwards GA nerfs, however, similar to the jump
              superjump rez, how far downwards you should look before clicking
              space and rez will depend on how far you flew towards the soul
              (and therefore how much your GA bar is filled) - if you were close
              to the soul, look further down; contrarily, if you were far away
              from the soul, do not look straight down or you will slingshot out
              of maximum rez range
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
