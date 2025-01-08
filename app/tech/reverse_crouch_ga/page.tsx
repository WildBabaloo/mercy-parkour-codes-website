import NavBarUI from "@/components/ui/NavBar";

export default function Reverse_Crouch_GA() {
  return (
    <>
      <NavBarUI />
      <div className="bg-gray-800 text-white min-h-screen p-6">
        {/* Title Section */}
        <div className="text-center mt-6">
          <h1 className="text-4xl font-extrabold mb-2">Roll</h1>
          <h5 className="italic text-lg text-gray-400">
            Also known as: uncrouch GA
          </h5>
        </div>

        {/* Instructions Section */}
        <div className="border border-gray-600 rounded-lg p-6 bg-gray-700 shadow-md my-8 mx-auto max-w-4xl">
          <h3 className="text-xl font-semibold mb-4 text-orange-400">
            Instructions:
          </h3>
          <div className="text-base leading-relaxed">
            <p>1- Hold crouch</p>
            <p>2- Let go of crouch</p>
            <p>
              3- At the same time you let go of crouch, guardian angel (if done
              correctly, you should GA on an upwards angle)
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
              src="https://www.youtube.com/embed/rhw0FBx4O2g?si=gzJvmo0JLeM-EpYm"
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
              Most checkpoints which require reverse crouch GA will place an orb
              higher than the usual GA path
            </li>
            <li>
              You can do any tech after doing a reverse crouch GA - a normal
              bhop, cancel sling bhop, cancel sj bhop, etc.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
