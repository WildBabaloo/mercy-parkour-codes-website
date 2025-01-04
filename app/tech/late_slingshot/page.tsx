import NavBarUI from "@/components/ui/NavBar";

export default function Late_Slingshot() {
  return (
    <>
      <NavBarUI />
      <div className="bg-gray-800 text-white min-h-screen p-6">
        {/* Title Section */}
        <div className="text-center mt-6">
          <h1 className="text-4xl font-extrabold mb-2">Late Slingshot</h1>
          <h5 className="italic text-lg text-gray-400">
            Also known as: late slings
          </h5>
        </div>

        {/* Instructions Section */}
        <div className="border border-gray-600 rounded-lg p-6 bg-gray-700 shadow-md my-8 mx-auto max-w-4xl">
          <h3 className="text-xl font-semibold mb-4 text-orange-400">
            Instructions:
          </h3>
          <p className="text-base leading-relaxed">
            Fly to a target. When approaching the end of Guardian Angel, you
            will see yourself do a slight dip. When you see yourself do a slight
            dip, click jump
          </p>
          <span className="text-small italic">
            I promise the video will help in understanding more
          </span>
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
              src="https://www.youtube.com/embed/GiyI99PlLYQ?si=hEPF-WQGzVZryVsn"
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
              Late slingshots can help you navigate lower doorframes or tight
              spaces.
            </li>
            <li>
              Jumping back and keeping angelic descent active throughout
              guardian angel can also assist in getting closer towards the bot
              and help avoiding obstacles: jump back → use Guardian Angel while
              NOT releasing jump → at the end of Guardian Angel during the dip,
              release and press jump again (you can see this in the video).
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
