"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const features = [
  "A Complete Code List",
  "Customizable Filters",
  "A Tech Learning Hub",
  "Intuitive Interfaces",
];

const TitleScreen = () => {
  const [currentFeature, setCurrentFeature] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 5000); // Change feature every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-white">
      {/* Main Title */}
      <div>
        <h1 className="text-4xl font-medium mb-6">
          Explore The New Way To <br /> Experience Mercy Parkour With
        </h1>
      </div>

      {/* Animated Features */}
      <div className="h-10 overflow-hidden relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentFeature}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{
              opacity: { duration: 0.8, ease: "easeInOut" },
              y: { duration: 0.8, ease: "easeInOut" },
            }}
            className="absolute w-full text-4xl font-bold"
          >
            {features[currentFeature]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TitleScreen;
