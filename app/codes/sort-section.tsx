"use client";

export default function SortSection() {
  return (
    <>
      <div className="items-center justify-center flex">
        <div className="text-white p-4 bg-zinc-700 max-w-screen-md w-full flex items-center gap-8 rounded-md">
          <span>Sort by:</span>
          <a href="#">Favorites</a>
          <a href="#">Difficulty</a>
          <a href="#">Creator</a>
          <a href="#">Map</a>
          <a href="#">Checkpoints</a>
        </div>
      </div>
    </>
  );
}
