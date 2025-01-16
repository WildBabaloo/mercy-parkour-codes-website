import NavBarUI from "@/components/ui/NavBar";
import Image from "next/image";
import Ecopoint from "@/images/Map_Images/EcoPointAntarctica.png";
import Link from "next/link";
import { TechInput } from "@/components/ui/TechInput";

export default async function Tech(props: {
  searchParams?: Promise<{
    search?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const search = searchParams?.search;
  console.log(`Search Value: ${search}`);

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
        <div className="text-center m-6 text-3xl text-white font-bold">
          <h1>Hall Of Mercy Parkour Tech</h1>
        </div>

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
                  <div className="relative w-full h-48 overflow-hidden">
                    <Image
                      layout="fill"
                      src={item.gif}
                      alt={item.title}
                      className="object-cover"
                    />
                  </div>

                  {/* Title */}
                  <div className="p-4 bg-gray-700">
                    <h3 className="text-xl font-bold mb-2 text-center">
                      {item.title}
                    </h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

const techItems = [
  { id: 1, title: "Slingshot", gif: Ecopoint, link: "/tech/slingshot" },
  {
    id: 2,
    title: "Backwards Slingshot",
    gif: Ecopoint,
    link: "/tech/backwards_slingshot",
  },
  {
    id: 3,
    title: "Late Slingshot",
    gif: Ecopoint,
    link: "/tech/late_slingshot",
  },
  { id: 4, title: "Superjump", gif: Ecopoint, link: "/tech/superjump" },
  {
    id: 5,
    title: "Late Superjump",
    gif: Ecopoint,
    link: "/tech/late_superjump",
  },
  { id: 6, title: "Bunnyhop", gif: Ecopoint, link: "/tech/bunnyhop" },
  {
    id: 7,
    title: "GA Cancel Bhop",
    gif: Ecopoint,
    link: "/tech/ga_cancel_bhop",
  },
  { id: 8, title: "Sit Emote", gif: Ecopoint, link: "/tech/sit_emote" },
  {
    id: 9,
    title: "Crouch GA Bhop",
    gif: Ecopoint,
    link: "/tech/crouch_ga_bhop",
  },
  {
    id: 10,
    title: "Crouch GA Slingshot",
    gif: Ecopoint,
    link: "/tech/crouch_ga_slingshot",
  },
  {
    id: 11,
    title: "Crouch GA Superjump",
    gif: Ecopoint,
    link: "/tech/crouch_ga_superjump",
  },
  { id: 12, title: "Propjump", gif: Ecopoint, link: "/tech/propjump" },
  {
    id: 13,
    title: "Beamless Propjump",
    gif: Ecopoint,
    link: "/tech/beamless_propjump",
  },
  {
    id: 14,
    title: "Instant Superjump",
    gif: Ecopoint,
    link: "/tech/instant_superjump",
  },
  {
    id: 15,
    title: "Superjump Rez",
    gif: Ecopoint,
    link: "/tech/superjump_rez",
  },
  { id: 16, title: "Sling Rez", gif: Ecopoint, link: "/tech/sling_rez" },
  {
    id: 17,
    title: "Cloud Jump/Bounce",
    gif: Ecopoint,
    link: "/tech/cloud_jump",
  },
  { id: 18, title: "Wall Bounce", gif: Ecopoint, link: "/tech/wall_bounce" },
  { id: 19, title: "Stuck/Balances", gif: Ecopoint, link: "/tech/stuck" },
  { id: 20, title: "Roll", gif: Ecopoint, link: "/tech/roll" },
  {
    id: 21,
    title: "Reverse Crouch GA",
    gif: Ecopoint,
    link: "/tech/reverse_crouch_ga",
  },
  {
    id: 22,
    title: "Cancel GA Slingshot",
    gif: Ecopoint,
    link: "/tech/cancel_ga_slingshot",
  },
  {
    id: 23,
    title: "Cancel GA Superjump",
    gif: Ecopoint,
    link: "/tech/cancel_ga_superjump",
  },
  {
    id: 24,
    title: "Bhop Reset/Infinite Bhop",
    gif: Ecopoint,
    link: "/tech/bhop_reset",
  },
  {
    id: 25,
    title: "Superjump Rez Cancel",
    gif: Ecopoint,
    link: "/tech/superjump_rez_cancel",
  },
  {
    id: 26,
    title: "Cancel Sling Rez",
    gif: Ecopoint,
    link: "/tech/cancel_sling_rez",
  },
  {
    id: 27,
    title: "Rez Bhop Reset",
    gif: Ecopoint,
    link: "/tech/rez_bhop_reset",
  },
  {
    id: 28,
    title: "Walking Slant Jump",
    gif: Ecopoint,
    link: "/tech/walking_slant_jump",
  },
  {
    id: 29,
    title: "Jumping Slant Jump",
    gif: Ecopoint,
    link: "/tech/jumping_slant_jump",
  },
  {
    id: 30,
    title: "Reverse Walking Slant Jump",
    gif: Ecopoint,
    link: "/tech/reverse_walking_slant_jump",
  },
  {
    id: 31,
    title: "Reverse Jumping Slant Jump",
    gif: Ecopoint,
    link: "/tech/reverse_jumping_slant_jump",
  },
  {
    id: 32,
    title: "Pseudo Bunnyhop",
    gif: Ecopoint,
    link: "/tech/pseudo_bunnyhop",
  },
  { id: 33, title: "Ghost GA", gif: Ecopoint, link: "/tech/ghost_ga" },
];
