import NavBarUI from "@/components/ui/NavBar";
import Image from "next/image";

export default function Tech() {
  const techItems = [
    { id: 1, title: "Slingshot", gif: "/slingshot.gif" },
    { id: 2, title: "Superjump", gif: "/superjump.gif" },
    { id: 3, title: "Bunnyhop", gif: "/bunnyhop.gif" },
  ];

  return (
    <>
      <NavBarUI />
      <div className="bg-gray-800 p-4 text-white">
        <div className="text-center mt-4 text-3xl text-white font-bold">
          <h1>Hall Of Mercy Parkour Tech</h1>
        </div>

        <h2 className="text-2xl font-semibold text-center m-6">
          Basic Mercy Tech
        </h2>

        {/* Tech Items */}
        <div className="min-h-screen flex justify-center mt-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-screen-md h-full w-full align-top">
            {techItems.map((item) => (
              <div
                key={item.id}
                className="border rounded-md shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {/* GIF/Tech Image */}
                <div className="h-40 bg-gray-200 flex items-center justify-center">
                  <Image
                    fill={true}
                    src={item.gif}
                    alt={item.title}
                    className="object-cover h-full w-full"
                  />
                </div>

                {/* Title */}
                <div className="p-4 bg-zinc-700">
                  <h3 className="text-xl font-bold mb-2 text-center">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
