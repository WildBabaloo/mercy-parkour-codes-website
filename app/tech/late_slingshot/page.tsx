import If_You_Are_Still_Stuck_Text from "@/components/if_you_are_still_stuck_text";
import NavBarUI from "@/components/ui/NavBar";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mercy Parkour - Late Slingshot",
  description: "Late Slingshot",
  icons: {
    icon: ["/favicon.ico?v=1"],
    apple: ["/apple-touch-icon.png?v=1"],
    shortcut: ["/apple-touch-icon.png?v=1"],
  },
  manifest: "/site.webmanifest",
};

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
                href="/tech/slingshot"
                className="text-blue-400 hover:text-blue-500 underline transition-colors duration-300"
              >
                Slingshot
              </Link>
            </p>
            <p>
              2-{" "}
              <Link
                href="/tech/late_superjump"
                className="text-blue-400 hover:text-blue-500 underline transition-colors duration-300"
              >
                Late Superjump
              </Link>
            </p>
            <p>
              3-{" "}
              <Link
                href="/tech/ga_cancel_bhop"
                className="text-blue-400 hover:text-blue-500 underline transition-colors duration-300"
              >
                Cancel GA Bhop
              </Link>
            </p>
            <p>
              4-{" "}
              <Link
                href="/tech/crouch_ga_bhop"
                className="text-blue-400 hover:text-blue-500 underline transition-colors duration-300"
              >
                Crouch GA Bhop
              </Link>
            </p>
            <p>
              5-{" "}
              <Link
                href="/tech/crouch_ga_slingshot"
                className="text-blue-400 hover:text-blue-500 underline transition-colors duration-300"
              >
                Crouch GA Sling
              </Link>
            </p>
            <p>
              6-{" "}
              <Link
                href="/tech/crouch_ga_superjump"
                className="text-blue-400 hover:text-blue-500 underline transition-colors duration-300"
              >
                Crouch GA Superjump
              </Link>
            </p>
            <p>
              7-{" "}
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
