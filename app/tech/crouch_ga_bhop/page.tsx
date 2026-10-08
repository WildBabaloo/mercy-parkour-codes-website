import If_You_Are_Still_Stuck_Text from "@/components/if_you_are_still_stuck_text";
import NavBarUI from "@/components/ui/NavBar";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mercy Parkour - Crouch GA Bhop",
  description: "This page teaches you about Crouch Guardian Angel Bunnyhops",
  icons: {
    icon: ["/favicon.ico?v=1"],
    apple: ["/apple-touch-icon.png?v=1"],
    shortcut: ["/apple-touch-icon.png?v=1"],
  },
  manifest: "/site.webmanifest",
};

export default function Crouch_GA_Bhop() {
  return (
    <>
      <NavBarUI />
      <div className="bg-gray-800 text-white min-h-screen p-6">
        {/* Title Section */}
        <div className="text-center mt-6">
          <h1 className="text-4xl font-extrabold mb-2">Crouch GA Bhop</h1>
          <h5 className="italic text-lg text-gray-400">
            Also known as: Crouch GA, Crouch GA Bhop
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
                Use crouch then Guardian Angel almost at the same time, ensuring
                that crouch comes before Guardian Angel. Once at your target,
                cancel your Guardian Angel (click Guardian Angel again) or wait
                for the Guardian Angel bar to go away. Then activate angelic
                descent using jump/space until you do a bunnyhop.
                <br />
                The buttons you should be clicking (based on PC default input
                settings) is ctrl (crouch) then shift (Guardian Angel) ALMOST AT
                THE SAME TIME (crouch slightly before) → once at target, click
                shift (Guardian Angel) again or wait for your Guardian Angel bar
                to disappear → hold space (angelic descent)
              </p>
            </li>
            <li>
              <span className="font-bold">Guardian angel toggle off</span>
              <p className="ml-4">
                Use crouch then Guardian Angel almost at the same time, ensuring
                that crouch comes before Guardian Angel. Keep holding Guardian
                Angel until you’re at your target. Once at your target, cancel
                your Guardian Angel (let go of Guardian Angel) or wait for the
                Guardian Angel bar to go away. Then activate angelic descent
                using jump/space until you do a bunnyhop.
                <br />
                The buttons you should be clicking (based on PC default input
                settings) is ctrl (crouch) then shift (Guardian Angel) ALMOST AT
                THE SAME TIME (crouch slightly before) → hold shift (Guardian
                Angel) → once at target, let go of shift (Guardian Angel) or
                wait for your Guardian Angel bar to disappear → hold space
                (angelic descent)
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
              src="https://www.youtube.com/embed/zdvKbRvV4pA?si=mCoVv2TJejEWlfqH"
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
              Canceling GA as you arrive to your target instead of waiting for
              the GA meter to disappear will make the uptick at the end of a
              crouch GA go further up and thus make you travel further distance
              and not bhop too early
            </li>
            <li>
              You can mix crouch GA and a jumping slant jump to make an even
              deeper crouch GA
            </li>
            <li>
              On some editors/maps you will be able to see if you will retain
              bhop: your staff will glow blue as if you are nano boosted (this
              can be inconsistent though and I would not heavily rely on it)
            </li>
            <li>
              Crouch GA’s benefits:
              <p className="ml-4">
                1- You get more meter charge in a shorter period of time due to
                the extra distance obtained from the dip at the start of GA and
                that GA is active longer even once you reach your target
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

        {/* Still Stuck Section */}
        <div className="border border-gray-600 rounded-lg p-6 bg-gray-700 shadow-md my-8 mx-auto max-w-4xl">
          <h3 className="text-xl font-semibold mb-4 text-yellow-400">
            Still Stuck?
          </h3>
          <div className="text-base leading-relaxed">
            <p>
              Consider the solution to be (especially if crouch is disabled):
            </p>
            <p>
              1-{" "}
              <Link
                href="/tech/walking_slant_jump"
                className="text-blue-400 hover:text-blue-500 underline transition-colors duration-300"
              >
                Walking Slant Jump
              </Link>
            </p>
            <p>
              2-{" "}
              <Link
                href="/tech/jumping_slant_jump"
                className="text-blue-400 hover:text-blue-500 underline transition-colors duration-300"
              >
                Jumping Slant Jump
              </Link>
            </p>
            <p>
              3-{" "}
              <Link
                href="/tech/reverse_walking_slant_jump"
                className="text-blue-400 hover:text-blue-500 underline transition-colors duration-300"
              >
                Reverse Walking Slant Jump
              </Link>
            </p>
            <p>
              4-{" "}
              <Link
                href="/tech/reverse_jumping_slant_jump"
                className="text-blue-400 hover:text-blue-500 underline transition-colors duration-300"
              >
                Reverse Jumping Slant Jump
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
