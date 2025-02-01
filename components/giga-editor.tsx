import Link from "next/link";

export default function GigaEditor() {
  return (
    <>
      <div className="border border-teal-600 rounded-lg p-6 bg-gray-700 shadow-md my-8 mx-auto max-w-4xl">
        <h3 className="text-2xl font-semibold mb-4 text-center text-teal-500">
          Giga&apos;s Mercy Parkour Editor Resources
        </h3>
        <ul className="list-disc list-inside space-y-3 text-base leading-relaxed">
          <li>
            Editor Code (Still in beta):{" "}
            <span className="font-bold">MEDQA</span>
          </li>
          <li>
            <Link
              href={"https://discord.gg/s6XbdpX5J8"}
              className="text-blue-400 hover:text-blue-500 underline transition-colors duration-300"
            >
              Editor Discord Server
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
