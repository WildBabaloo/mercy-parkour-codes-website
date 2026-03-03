import Link from "next/link";

const spreadsheetEditors = [
  { name: "toma", url: "https://www.youtube.com/@cupki" },
  { name: "pincushion", url: "https://www.youtube.com/@PincushionAU" },
  { name: "nash", url: "https://www.youtube.com/@Nash-zc8nf" },
  { name: "hon6y", url: "https://www.youtube.com/@hon6y" },
  { name: "random", url: "https://www.youtube.com/@r.nndomn" },
  { name: "am3l13s", url: "https://www.youtube.com/@am3l13s" },
  { name: "minna", url: "https://www.youtube.com/@minna_OW" },
];

export default function Credits() {
  return (
    <div className="border border-red-600 rounded-lg p-6 bg-gray-700 shadow-md my-8 mx-auto max-w-4xl">
      <h3 className="text-2xl font-semibold mb-4 text-center text-red-500">
        Credits
      </h3>
      <h5 className="italic text-xs mb-4 mt-4"></h5>
      Special thanks to these wonderful people, the Google Spreadsheet Editors,
      who archived every map (alongside difficulty grading them) before this
      website existed. This website&apos;s main functionality of map searching
      wouldn&apos;t exist without the hard working of these people in the past.
      <h5 className="italic text-xs mb-4 mt-4"></h5>
      <ul className="list-disc list-inside space-y-3 text-base leading-relaxed">
        <li>
          <span className="font-bold">Spreadsheet Editors:</span>{" "}
          {spreadsheetEditors.map((editor, index) => (
            <span key={editor.name}>
              <Link
                href={editor.url}
                className="text-blue-400 hover:text-blue-500 underline transition-colors duration-300"
                target="_blank"
              >
                {editor.name}
              </Link>
              {index < spreadsheetEditors.length - 1 && ", "}
            </span>
          ))}
        </li>
        <li>
          <Link
            href={
              "https://docs.google.com/spreadsheets/d/1CTIFXukeMuQVS4hMLyn-NQ-i4y5oTavuCUvyERSfqa4/edit?gid=1428733039#gid=1428733039"
            }
            className="text-blue-400 hover:text-blue-500 underline transition-colors duration-300"
          >
            Mercy Parkour Google Spreadsheet
          </Link>
        </li>
      </ul>
    </div>
  );
}
