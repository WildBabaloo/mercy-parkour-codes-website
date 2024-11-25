import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const features = [
  "A Complete Code List",
  "Customizable Filters",
  "A Tech Learning Hub",
  "Intuituve Interfaces",
];

const TitleScreen = () => {
  const [currentFeature, setCurrentFeature] = useState(0);

  // Cycle through features
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000); // Change feature every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="text-white">
        <div>
          <h1 className="text-4xl font-medium mb-6">
            Explore The New Way To <br /> Experience Mercy Parkour With
          </h1>
        </div>
        <div className="h-10">
          <AnimatePresence>
            <motion.div
              key={currentFeature}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="left-0 right-0 text-4xl font-bold"
            >
              {features[currentFeature]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default TitleScreen;
