export default function CardSkeleton() {
  return (
    <div className="relative w-full max-w-md rounded-xl overflow-hidden shadow-lg bg-gray-900 animate-pulse">
      {/* Image Section (Skeleton) */}
      <div className="relative w-full h-48 bg-gray-700 opacity-50"></div>

      {/* Content Section */}
      <div className="absolute inset-0 flex flex-col justify-between bg-black bg-opacity-70 p-4">
        {/* Top Section */}
        <div>
          <div className="h-6 w-3/4 bg-gray-600 rounded mb-2"></div>
          <div className="h-4 w-1/2 bg-gray-600 rounded mb-2"></div>
          <div className="h-4 w-1/3 bg-gray-600 rounded"></div>
        </div>

        {/* Bottom Section */}
        <div className="absolute bottom-4 left-4 text-gray-400 text-sm">
          {/* Mapped By & Likes (Skeleton) */}
          <div className="h-4 w-1/2 bg-gray-600 rounded mb-2"></div>
          <div className="flex items-center space-x-4">
            <div className="h-5 w-5 bg-gray-600 rounded-full"></div>
          </div>
        </div>

        {/* Right Section: Vertical Icons (Skeleton) */}
        <div className="absolute bottom-4 right-4 flex flex-col space-y-2 items-end">
          <div className="h-5 w-5 bg-gray-600 rounded-full"></div>
          <div className="h-5 w-5 bg-gray-600 rounded-full"></div>
          <div className="h-5 w-5 bg-gray-600 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
