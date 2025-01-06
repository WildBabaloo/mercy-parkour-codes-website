import NavBarUI from "@/components/ui/NavBar";

export default function Sling_Rez() {
  return (
    <>
      <NavBarUI />
      <div className="bg-gray-800 text-white min-h-screen p-6">
        {/* Title Section */}
        <div className="text-center mt-6">
          <h1 className="text-4xl font-extrabold mb-2">Sling Rez</h1>
          <h5 className="italic text-lg text-gray-400">
            Also known as: slingshot rez, dash rez, sokka rez
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
                GA to the soul, once you reach the soul, rez and slingshot at
                the exact same time
                <br />
                The buttons you should be clicking (based on PC default input
                settings) is shift (GA) → E (rez) + space (slingshot) AT THE
                SAME TIME → space (angelic descent)
              </p>
            </li>
            <li>
              <span className="font-bold">Guardian angel toggle off</span>
              <p className="ml-4">
                GA to the soul, once you reach the soul, rez and slingshot at
                the exact same time
                <br />
                The buttons you should be clicking (based on PC default input
                settings) is HOLD shift (GA) → E (rez) + space (slingshot) AT
                THE SAME TIME → space (angelic descent)
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
              src="https://www.youtube.com/embed/cqVt5aKC5EQ?si=b4ButZSyz58C3eP1"
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
              Sling rez’s are helpful for rezzing in small areas, such as rooms,
              doorways, corridors etc. whilst also having horizontal and
              vertical distance
            </li>
            <li>
              Sling rez’s upwards can also be helpful in reaching maximum rez
              height compared to the flick up, down then superjump rez technique
            </li>
            <li>
              Some people find it easier to perform the tech with a late sling
              and looking slightly up
            </li>
            <li>
              You can practice getting more consistent with sling rez by picking
              an easy rez map and forcing yourself to sling rez everything (even
              if you don’t need to)
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
