import NavBarUI from "../components/ui/NavBar";
import TitleScreen from "@/components/TitleScreen";
import FeaturedCourse from "../components/featuredCourseSection";

export default async function Home() {
  return (
    <>
      <div>
        {/* Navbar */}
        <NavBarUI />
        {/* Backgrounds */}
        <div className="h-screen bg-gradient-to-b from-[#1a1a2e] via-[#16213e] to-[#0f3460] flex items-center justify-center relative overflow-hidden animate-gradient">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_transparent_60%)]"></div>
          {/* Content */}
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6 z-10">
            {/* Title Screen */}
            <div className="w-full text-center md:text-left">
              <TitleScreen />
            </div>
            {/* Image/GIF */}
            <div className="w-full md:w-[60%] lg:w-[50%] xl:w-[850px] mx-auto md:mx-0">
              <h2 className="text-white text-center text-3xl mb-6 font-extrabold glow">
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
