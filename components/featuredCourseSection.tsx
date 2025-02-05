import Card from "@/components/CodeCard";
// import { MapCode } from "@/app/codes/MapCode";
import MapImageSelection from "@/app/codes/map-image-selection";
import CardSkeleton from "./ui/CardSkeleton";
import GetDailyCode from "@/sql/queries/codes/getDailyCode";
import PostDailyCode from "@/sql/queries/codes/postDailyCode";

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
            notes={featuredCode.Notes}
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
    const dailyCode = await GetDailyCode();
    return !dailyCode ? await PostDailyCode() : dailyCode;
  } catch (error) {
    console.error("Error fetching daily code:", error);
    return null;
  }
};
