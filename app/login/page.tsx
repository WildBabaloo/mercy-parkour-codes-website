import NavBarUI from "@/components/ui/NavBar";
import { FaDiscord, FaBattleNet } from "react-icons/fa";

export default function Extras() {
  return (
    <>
      <NavBarUI />
      <div className="min-h-screen bg-gray-800 text-black">
        <main className="flex items-center justify-center py-10 px-6">
          <div className="flex flex-col md:flex-row gap-10 max-w-6xl w-full">
            {/* Login Section */}
            <div className="w-full md:w-1/3 bg-gray-700 text-white p-8 rounded-md shadow-md">
              <h2 className="text-2xl font-bold mb-1">Welcome back!</h2>
              <p className="mb-6 text-sm text-gray-200">
                Please enter your login info
              </p>

              <div className="mb-4">
                <label className="block mb-1">Username</label>
                <input
                  type="text"
                  className="w-full p-2 rounded bg-gray-100 text-black"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Password</label>
                <input
                  type="password"
                  className="w-full p-2 rounded bg-gray-100 text-black"
                />
              </div>

              <div className="flex justify-between items-center text-sm mb-4">
                <label className="flex items-center space-x-1">
                  <input type="checkbox" className="accent-purple-600" />
                  <span>Remember me?</span>
                </label>
                <a href="#" className="text-blue-400 hover:underline">
                  Forgot password?
                </a>
              </div>

              <button className="w-full bg-black text-white py-2 rounded mb-8 hover:bg-gray-800">
                Login
              </button>
              <button className="w-full bg-black text-white py-2 rounded mb-2 flex items-center justify-center hover:bg-gray-800">
                <FaDiscord className="mr-2" /> Login with Discord
              </button>
              <button className="w-full bg-black text-white py-2 rounded mb-2 flex items-center justify-center hover:bg-gray-800">
                <FaBattleNet className="mr-2" /> Login with Battle.net
              </button>

              <p className="text-center text-sm mt-4">
                Don’t have an account?{" "}
                <a href="#" className="text-blue-400 hover:underline">
                  Sign up for free!
                </a>
              </p>
            </div>

            {/* Filler? Section */}
            <div className="flex-1 bg-gray-300 rounded-md flex items-center justify-center text-lg text-black font-medium">
              Something filler like art
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
