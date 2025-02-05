import If_You_Are_Still_Stuck_Text from "@/components/if_you_are_still_stuck_text";
import NavBarUI from "@/components/ui/NavBar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mercy Parkour - Ghost GA",
  description: "Ghost GA",
  icons: {
    icon: ["/favicon.ico?v=1"],
    apple: ["/apple-touch-icon.png?v=1"],
    shortcut: ["/apple-touch-icon.png?v=1"],
  },
  manifest: "/site.webmanifest",
};

export default function Ghost_GA() {
  return (
    <>
      <NavBarUI />
      <div className="bg-gray-800 text-white min-h-screen p-6">
        {/* Title Section */}
        <div className="text-center mt-6">
          <h1 className="text-4xl font-extrabold mb-2">Ghost GA</h1>
          <h5 className="italic text-lg text-gray-400">
            Also known as: beam exploit
          </h5>
        </div>

        {/* Instructions Section */}
        <div className="border border-gray-600 rounded-lg p-6 bg-gray-700 shadow-md my-8 mx-auto max-w-4xl">
          <h3 className="text-xl font-semibold mb-4 text-orange-400">
            Instructions:
          </h3>
          <div className="text-base leading-relaxed">
            <p>1- Attach your beam to the first bot</p>
            <p>2- Make your way to a refresh ga orb</p>
            <p>3- Just before collecting the orb, hold GA</p>
            <p>
              4- If done successfully, you should fly to the first bot instead
              of the second bot
            </p>
            <p>
              5- Slingshot, superjump or cancel ga etc. and make your way to the
              checkpoint
            </p>
          </div>
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
              src="https://www.youtube.com/embed/NEsGyqLS4EA?si=jeNyK8Fn4-3K5HqN"
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
              Ghost GA’s are possible without connecting your beam - just ensure
              you’re in GA range of the first bot and holding GA before
              collecting the refresh orb
            </li>
            <li>
              You can usually identify when a Ghost GA is needed if the second
              bot spawns outside of the map or if the second bot spawns in a
              position where it will not be possible to move towards the
              checkpoint if you flew to it
            </li>
            <li>
              Due to the Season 4 nerfs, it can be harder to do a ghost GA as
              you cannot cancel GA anymore. Therefore, you will need to wait for
              the guardian angel to finish being active before collecting a
              refresh orb, or else by the time you can GA again your beam will
              disconnect.
            </li>
            <li>
              Ghost GA’s can be helpful for speedruns if you fly to the bot of
              the previous checkpoint - this can help you reduce the time to
              reach the checkpoint
            </li>
          </ul>
        </div>

        {/* Still Stuck Section */}
        <div className="border border-gray-600 rounded-lg p-6 bg-gray-700 shadow-md my-8 mx-auto max-w-4xl">
          <h3 className="text-xl font-semibold mb-4 text-yellow-400">
            Still Stuck?
          </h3>
          <div className="text-base leading-relaxed">
            <div className="font-semibold">
              <If_You_Are_Still_Stuck_Text />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
