import If_You_Are_Still_Stuck_Text from "@/components/if_you_are_still_stuck_text";
import NavBarUI from "@/components/ui/NavBar";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mercy Parkour - Stuck",
  description: "Stuck",
  icons: {
    icon: ["/favicon.ico?v=1"],
    apple: ["/apple-touch-icon.png?v=1"],
    shortcut: ["/apple-touch-icon.png?v=1"],
  },
  manifest: "/site.webmanifest",
};

export default function Stuck() {
  return (
    <>
      <NavBarUI />
      <div className="bg-gray-800 text-white min-h-screen p-6">
        {/* Title Section */}
        <div className="text-center mt-6">
          <h1 className="text-4xl font-extrabold mb-2">Stuck/Balances</h1>
        </div>

        {/* Instructions Section */}
        <div className="border border-gray-600 rounded-lg p-6 bg-gray-700 shadow-md my-8 mx-auto max-w-4xl">
          <h3 className="text-xl font-semibold mb-4 text-orange-400">
            Instructions:
          </h3>
          <ul className="list-disc list-inside space-y-3 text-base leading-relaxed">
            <li>
              <span className="font-bold">
                Conditions for a successful stuck/balance:
              </span>
              <p className="ml-4 ">
                1- Not being able to touch the floor (floating)
                <br />
                2- Not moving for 3-4 seconds (you will not be able to move in a
                stuck, whereas with balances you will need to make short,
                precise movements to ensure you stay still)
              </p>
            </li>
            <li>
              <span className="font-bold">Stucks:</span>
              <p className="ml-4">
                1. First, find an area where you can get stuck in (these are
                usually small nooks, corners, or particular surfaces)
                <br />
                2. Jump or fly into the stuck, if done correctly, Mercy should
                not be touching the floor (floating) and not able to move with
                any movement key
                <br />
                3. Once stuck, the game will automatically launch you upwards
                after 3-4 seconds
                <br />
                4. Use Angelic Descent (space) and move towards the checkpoint.
              </p>
            </li>
            <li>
              <span className="font-bold">Balances:</span>
              <p className="ml-4">
                1. First, find an area where you can balance and get stuck in
                (these are usually surfaces where you will not walk on, but
                glide on)
                <br />
                2. Try to slow yourself to a stop and make small, precise
                movements with WASD (movement keys) to ensure you stay still
                <br />
                3. If done correctly, you will be floating completely still, and
                the game will automatically launch you upwards after 3-4 seconds
                <br />
                4. Use Angelic Descent (space) and move towards the checkpoint.
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
              src="https://www.youtube.com/embed/fQhzyJzBehs?si=hzeYzuNrhFe5l_9w"
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
              A lot of maps require you to keep bhop after the stuck (if you
              need to slingshot into the stuck, consider learning cancel GA
              slingshot/superjump) (FUTURE ME: Make sure to add link to cancel
              GA slingshot/superjump)
            </li>
            <li>
              On some editors/maps you will be able to see if you will retain
              bhop: your staff will glow blue as if you are nano boosted (this
              can be inconsistent though and I would not heavily rely on it)
            </li>
            <li>
              Similar to the sit emote, holding your forward input key
              throughout the stuck and jump throughout the stuck/balance can
              help you go further distances as you will not need to factor in
              your reaction time to click forward/jump
            </li>
            <li>
              Some balance checkpoints may require you to have fast reaction
              time when moving forward after being launched upwards - you can
              achieve this by counting down from 3 whilst staying still and then
              hold your forward input button. You will still launch upwards even
              if you move a tiny bit (as long as you’re coming towards the very
              end of the 3 seconds). Moreover, alongside instantly holding your
              forward button, the tiny distance made before being launched
              upwards can help you reach the checkpoint
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
                href="/tech/sit_emote"
                className="text-blue-400 hover:text-blue-500 underline transition-colors duration-300"
              >
                Sit Emote
              </Link>
            </p>
            <p>
              2-{" "}
              <Link
                href="/tech/bunnyhop"
                className="text-blue-400 hover:text-blue-500 underline transition-colors duration-300"
              >
                Bhop
              </Link>
            </p>
            <p>
              3-{" "}
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
