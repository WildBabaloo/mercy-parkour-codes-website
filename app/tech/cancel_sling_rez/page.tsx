import If_You_Are_Still_Stuck_Text from "@/components/if_you_are_still_stuck_text";
import NavBarUI from "@/components/ui/NavBar";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mercy Parkour - Cancel Sling Rez",
  description: "Cancel Sling Rez",
  icons: {
    icon: ["/favicon.ico?v=1"],
    apple: ["/apple-touch-icon.png?v=1"],
    shortcut: ["/apple-touch-icon.png?v=1"],
  },
  manifest: "/site.webmanifest",
};

export default function Cancel_Sling_Rez() {
  return (
    <>
      <NavBarUI />
      <div className="bg-gray-800 text-white min-h-screen p-6">
        {/* Title Section */}
        <div className="text-center mt-6">
          <h1 className="text-4xl font-extrabold mb-2">Cancel Sling Rez</h1>
          <h5 className="italic text-lg text-gray-400">
            Also known as: sling rez bhop, slingshot rez bhop
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
                Combine cancel GA slingshot and slingshot rez
              </span>
            </li>
            <li>
              <span className="font-bold">
                Guardian angel toggle on (default setting)
              </span>
              <p className="ml-4">
                GA to the soul, once you reach the soul, rez, cancel GA and
                slingshot at the exact same time
                <br />
                The buttons you should be clicking (based on PC default input
                settings) is shift (GA) → E (rez) + shift (cancel GA) + space
                (slingshot) AT THE SAME TIME → space (angelic descent)
              </p>
            </li>
            <li>
              <span className="font-bold">Guardian angel toggle off</span>
              <p className="ml-4">
                GA to the soul, once you reach the soul, rez, cancel GA and
                slingshot at the exact same time
                <br />
                The buttons you should be clicking (based on PC default input
                settings) is HOLD shift (GA) → E (rez) + LET GO of shift (cancel
                GA) + space (slingshot) AT THE SAME TIME → space (angelic
                descent)
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
              src="https://www.youtube.com/embed/ZZCGSMdwVZo?si=M16HmphwUiQ_MvJG"
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
              You can practice getting more consistent with sling rez by picking
              an easy rez map and forcing yourself to sling rez everything, then
              once you’re consistent with that, try and cancel sling rez every
              cp (even if the bhop is not needed)
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
            <li>The bhop can assist you in reaching further distances</li>
            <li>
              Sling rez’s are helpful for rezzing in small areas, such as rooms,
              doorways, corridors etc. whilst also having horizontal and
              vertical distance
            </li>
            <li>
              Some people find it easier to perform the tech with a late sling
              and looking slightly up
            </li>
            <li>
              Doing a sling rez upwards can be helpful in reaching maximum rez
              height compared to the flick up, down then rez technique{" "}
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
                href="/tech/superjump_rez_cancel"
                className="text-blue-400 hover:text-blue-500 underline transition-colors duration-300"
              >
                Superjump Rez Cancel
              </Link>
            </p>
            <p>
              2-{" "}
              <Link
                href="/tech/rez_bhop_reset"
                className="text-blue-400 hover:text-blue-500 underline transition-colors duration-300"
              >
                Rez Bhop Reset
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
