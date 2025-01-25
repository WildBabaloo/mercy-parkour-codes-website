import NavBarUI from "../components/ui/NavBar";
import TitleScreen from "@/components/TitleScreen";
import FeaturedCourse from "../components/featuredCourseSection";

export default async function Home() {
  return (
    <>
      <div>
        {/* Navbar */}
        <NavBarUI />
        {/* Content */}
        <div className="h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 flex items-center justify-center">
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
            {/* Title Screen */}
            <div className="w-full text-center md:text-left">
              <TitleScreen />
            </div>
            {/* Image/GIF */}
            <div className="w-full md:w-[60%] lg:w-[50%] xl:w-[850px] mx-auto md:mx-0">
              <h2 className="text-white text-center text-3xl mb-6 font-extrabold">
                Today&apos;s Featured Course
              </h2>
              <FeaturedCourse />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
