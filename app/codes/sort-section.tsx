"use client";

export default function SortSection() {
  return (
    <>
      <div className="items-center justify-center flex">
        <div className="text-white p-2 bg-zinc-700 max-w-screen-md w-full flex flex-wrap items-center gap-4 text-sm md:text-base rounded-md">
          <span className="w-full md:w-auto ml-2">Sort by:</span>
          <a
            href="#"
            className="p-2 rounded-md hover:bg-zinc-600 transition duration-200"
          >
            Favorites
          </a>
          <a
            href="#"
            className="p-2 rounded-md hover:bg-zinc-600 transition duration-200"
          >
            Difficulty
          </a>
          <a
            href="#"
            className="p-2 rounded-md hover:bg-zinc-600 transition duration-200"
          >
            Creator
          </a>
          <a
            href="#"
            className="p-2 rounded-md hover:bg-zinc-600 transition duration-200"
          >
            Map
          </a>
          <a
            href="#"
            className="p-2 rounded-md hover:bg-zinc-600 transition duration-200"
          >
            Checkpoints
          </a>
        </div>
      </div>
    </>
  );
}
