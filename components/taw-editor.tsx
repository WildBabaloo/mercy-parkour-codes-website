import Link from "next/link";

export default function TawEditor() {
  return (
    <>
      <div className="border border-cyan-600 rounded-lg p-6 bg-gray-700 shadow-md my-8 mx-auto max-w-4xl">
        <h3 className="text-2xl font-semibold mb-4 text-center text-cyan-500">
          Taw&apos;s Mercy Parkour Editor Resources
        </h3>
        <ul className="list-disc list-inside space-y-3 text-base leading-relaxed">
          <li>
            v2.4 Code (Recommnded to use the beta):{" "}
            <span className="font-bold">X98FK</span>
          </li>
          <li>
            v2.5 Code (Beta- Fixed parkour control buttons):{" "}
            <span className="font-bold">G361B</span>
          </li>
          <li>
            <Link
              href={
                "https://docs.google.com/document/d/1ERqUGbWffYsBrNzWea6VHH_WYqcRke6e7B0_HUjRIRQ/edit?usp=sharing"
              }
              className="text-blue-400 hover:text-blue-500 underline transition-colors duration-300"
            >
              Map Making Handbook by hon6y + random (Taw&apos;s Edition)
            </Link>
          </li>
          <li>
            <Link
              href={"https://www.youtube.com/watch?v=RlHW1w8oSsI"}
              className="text-blue-400 hover:text-blue-500 underline transition-colors duration-300"
            >
              Saving a map wth Taw&apos;s
            </Link>
          </li>
          <li>
            <Link
              href={"https://www.youtube.com/watch?v=cOWnCS_tzsk"}
              className="text-blue-400 hover:text-blue-500 underline transition-colors duration-300"
            >
              Updating Engine Version
            </Link>
          </li>
          <li>
            <Link
              href={
                "https://docs.google.com/document/d/14H_29LjLmyFDEAqR6kzc4HvpX6LL_MRFVfnq_WmzACo/edit?usp=sharing"
              }
              className="text-blue-400 hover:text-blue-500 underline transition-colors duration-300"
            >
              Rule &quot;Handle player leaving&quot; (for bots not being
              destroyed when a player leaves lobby)
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
