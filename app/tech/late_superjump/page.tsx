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
            Also known as: late sj
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
            dip, click crouch
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
              src="https://www.youtube.com/embed/9R5STdhrxyA?si=C1CSKTWxwXag7_rG"
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
              Late superjumps will make you fly higher than normal superjumps
              and thus take you further distances. They can also help you
              navigate past doorframes or obstacles
            </li>
            <li>
              Jumping back and keeping Angelic Descent active throughout
              Guardian Angel can also assist in getting closer towards the bot
              and help avoiding obstacles: jump back → use Guardian Angel while
              NOT releasing jump → at the end of Guardian Angel during the dip
              press crouch
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
