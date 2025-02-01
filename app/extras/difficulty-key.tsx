export default function DifficultyKey() {
  return (
    <>
      <div className="border border-orange-600 rounded-lg p-6 bg-gray-700 shadow-md my-8 mx-auto max-w-4xl">
        <h3 className="text-2xl font-semibold mb-1 text-center text-orange-500">
          Difficulty Key
        </h3>
        <h5 className="italic text-xs mb-4 mt-4">
          <span className="font-extrabold">IMPORTANT DISCLAIMER:</span> The
          difficulty of a map is overall subjective - what is listed is
          determined based on how hard Mercy parkour can actually be. Therefore,
          our aim of labelling a map&apos;s difficulty is so that people can
          understand the depth of Mercy parkour and thus track their progression
          of mastering it. Ultimately, what we find easy might be difficult to
          you and vice versa, but overall we have tried to label the map
          difficulty fairly, objectively and based on what parkour is capable
          of.
        </h5>
        {/* Table Section */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-500 text-sm text-black">
            <thead>
              <tr>
                <th className="bg-gray-400 text-left p-3 border border-gray-500">
                  Difficulty
                </th>
                <th className="bg-gray-400 text-left p-3 border border-gray-500">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="text-black">
              <tr className="bg-cyan-200">
                <td className="p-3 text-cyan-600 font-bold border border-gray-500">
                  Beginner
                </td>
                <td className="p-3 border border-gray-500">
                  Maps which are perfect for those who are completely new to
                  parkour. These maps are also great for speedrunning due to its
                  simplicity and consistent, easy slings.
                </td>
              </tr>
              <tr className="bg-green-200">
                <td className="p-3 text-green-600 font-bold border border-gray-500">
                  Easy
                </td>
                <td className="p-3 border border-gray-500">
                  Maps which are perfect for those wanting to get into parkour
                  and learn basic Mercy tech. These maps can help elevate your
                  in-game Mercy gameplay due to its incorporation of basic
                  movement tech (propjumps etc.).
                </td>
              </tr>
              <tr className="bg-lime-200">
                <td className="p-3 text-lime-600 font-bold border border-gray-500">
                  Low Intermediate
                </td>
                <td className="p-3 border border-gray-500">
                  Maps which incorporate very basic/tutorial style advanced tech
                  (cancel slingshots etc.) and/or focus on precision and timing.
                  These maps are great for those who want to start to learn more
                  niche parkour techs and/or develop a deeper understanding of
                  the basic techs.
                </td>
              </tr>
              <tr className="bg-orange-200">
                <td className="p-3 text-orange-600 font-bold border border-gray-500">
                  Intermediate
                </td>
                <td className="p-3 border border-gray-500">
                  Maps which have consistent, but fairly simple advanced tech
                  (cancel slingshots etc.) and/or heavily focuses on precision
                  and timing. These maps are good for practicing the advanced
                  tech learnt from more low intermediate maps.
                </td>
              </tr>
              <tr className="bg-amber-200">
                <td className="p-3 text-amber-600 font-bold border border-gray-500">
                  High Intermediate
                </td>
                <td className="p-3 border border-gray-500 ">
                  Maps which has consistent use of advanced tech (cancel
                  slingshots etc.), as well as checkpoints heavily focusing on
                  precision and timing. These maps are a good test to understand
                  your knowledge on identifying and applying more advanced Mercy
                  techs.
                </td>
              </tr>
              <tr className="bg-red-200">
                <td className="p-3 text-red-600 font-bold border border-gray-500">
                  Hard
                </td>
                <td className="p-3 border border-gray-500">
                  Maps which has consistent use of advanced tech (cancel
                  slingshots etc.), as well as checkpoints EXTREMELY focusing on
                  precision and timing. These maps will usually take someone
                  comfortable with high intermediate maps around 1500-4000
                  seconds on their first attempt.
                </td>
              </tr>
              <tr className="bg-indigo-200">
                <td className="p-3 text-indigo-600 font-bold border border-gray-500">
                  Very Hard
                </td>
                <td className="p-3 border border-gray-500">
                  Will literally make those comfortable with high intermediate
                  maps want to uninstall.
                </td>
              </tr>
              <tr className="bg-purple-200">
                <td className="p-3 text-purple-600 font-bold border border-gray-500">
                  Expert
                </td>
                <td className="p-3 border border-gray-500">
                  Only a few people can finish them, but it isn&apos;t 100%
                  &quot;impossible&quot;. Just extremely time consuming and very
                  very *very* painful.
                </td>
              </tr>
              <tr className="bg-pink-200">
                <td className="p-3 text-pink-600 font-bold border border-gray-500">
                  Super Expert
                </td>
                <td className="p-3 border border-gray-500">
                  Maps where only the map maker themself or the best of the best
                  can complete (and even they would struggle immensely) glhf!
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
