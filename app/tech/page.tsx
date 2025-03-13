import NavBarUI from "@/components/ui/NavBar";
import Image from "next/image";
import { techItems } from "./tech-items";
import Link from "next/link";
import { TechInput } from "@/components/ui/TechInput";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mercy Parkour - Tech",
  description: "The list of all the tech found in Mercy Parkour!",
  icons: {
    icon: ["/favicon.ico?v=1"],
    apple: ["/apple-touch-icon.png?v=1"],
    shortcut: ["/apple-touch-icon.png?v=1"],
  },
  manifest: "/site.webmanifest",
};

export default async function Tech(props: {
  searchParams?: Promise<{
    search?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const search = searchParams?.search;

  const filteredTechItems =
    search && search !== "undefined"
      ? techItems.filter((item) =>
          item.title.toLowerCase().includes(search.toLowerCase())
        )
      : techItems;

  return (
    <>
      <NavBarUI />
      <div className="bg-gray-800 p-4 text-white">
        <div className="text-center m-2 text-3xl text-white font-bold">
          <h1>Hall Of Mercy Parkour Tech</h1>
        </div>
        <p className="italic text-sm text-white mb-6 text-center">
          (The Ecopoints will be replaced with a proper thumbnail later on...)
        </p>

        <div className="flex items-center justify-center">
          <div className="mb-6 max-w-screen-md w-full">
            <TechInput
              type="search"
              placeholder="Search for a specific tech..."
              className="text-black"
            />
          </div>
        </div>

        {/* Tech Items */}
        <div className="min-h-screen flex justify-center mt-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-screen-md h-full w-full align-top">
            {filteredTechItems.map((item) => (
              <div
                key={item.id}
                className="border rounded-md shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <Link href={item.link}>
                  {/* GIF/Tech Image */}
                  <div className="relative w-full h-56 overflow-hidden">
                    <Image
                      layout="fill"
                      src={item.gif}
                      alt={item.title}
                      className="object-cover"
                    />
                  </div>

                  {/* IF SECTION BELOW WILL BE UNCOMMENTED THE OLD HEIGHT ON THE SECTION ABOVE WAS H-48*/}
                  {/* Title 
                  <div className="p-4 bg-gray-700">
                    <h3 className="text-xl font-bold mb-2 text-center">
                      {item.title}
                    </h3>
                  </div>
                  */}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
