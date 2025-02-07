export const dynamic = "force-dynamic";
import Card from "@/components/CodeCard";
import MapImageSelection from "@/app/codes/map-image-selection";
import CardSkeleton from "./ui/CardSkeleton";
import { MapCode } from "@/app/codes/MapCode";

export default async function FeaturedCourse() {
  const featuredCode = await fetchDailyCode();
  return (
    <>
      <div className="flex items-center justify-center">
        {!featuredCode ? (
          <CardSkeleton />
        ) : (
          <Card
            key={featuredCode.Map_Number}
            title={featuredCode.Map}
            code={featuredCode.Code}
            checkpoints={featuredCode.Checkpoints?.toString() || "N/A"}
            difficulty={featuredCode.Difficulty || "N/A"}
            mapper={featuredCode.Author || "Unknown Author"}
            notes={featuredCode.Notes}
            video={featuredCode.Video}
            likes={0}
            imageSrc={MapImageSelection(featuredCode.Map || "N/A")}
          />
        )}
      </div>
    </>
  );
}

const fetchDailyCode = async () => {
  try {
    const response = await fetch(`${process.env.url}/api/codes/daily`, {
      next: { revalidate: 300 },
    });
    const dailyCode: MapCode = await response.json();
    return dailyCode;
  } catch (error) {
    console.error("Error fetching daily code:", error);
    return null;
  }
};
