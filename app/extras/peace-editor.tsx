import Link from "next/link";

export default function PeaceEditor() {
  return (
    <>
      <div className="border border-fuchsia-600 rounded-lg p-6 bg-gray-700 shadow-md my-8 mx-auto max-w-4xl">
        <h3 className="text-2xl font-semibold mb-4 text-center text-fuchsia-500">
          Peace&apos;s Mercy Parkour Editor Resources
        </h3>
        <ul className="list-disc list-inside space-y-3 text-base leading-relaxed">
          <li>
            v2.0 Code: <span className="font-bold">23457</span>
          </li>
          <li>
            v1.0 Code: <span className="font-bold">T6QQT</span>
          </li>
          <li>
            <Link
              href={
                "https://docs.google.com/document/d/1_NjNeToH50VSmvybV8I2uOFOQUZCNu3hevnYNQ4CqRo/edit?usp=sharing"
              }
              className="text-blue-400 hover:text-blue-500 underline transition-colors duration-300"
            >
              Map Making Handbook by hon6y (Peace&apos;s Edition)
            </Link>
          </li>
          <li>
            <Link
              href={"https://www.youtube.com/watch?v=6GfgnYpXtFA"}
              className="text-blue-400 hover:text-blue-500 underline transition-colors duration-300"
            >
              The Complete Mercy Parkour Peace Editor Guide by kiwioko
            </Link>
          </li>
          {/*           
          <li>
            <Link
              href={"https://www.youtube.com/watch?v=n37JKkloy4I"}
              className="text-blue-400 hover:text-blue-500 underline transition-colors duration-300"
            >
              Mercy Parkour Peace&apos;s editor guide [T6QQT] by AYANA
            </Link>
          </li>
          */}

          <li>
            <Link
              href={
                "https://docs.google.com/document/d/10H8UAky5W4KhLQCZJHyYPtJDGP48vlpRUQ48Oend9xc/edit?usp=sharing"
              }
              className="text-blue-400 hover:text-blue-500 underline transition-colors duration-300"
            >
              Instant GA rule by Cittic
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
