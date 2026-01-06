"use client";

import welcome1 from "@/public/images/welcome1.jpg";
import welcome2 from "@/public/images/welcome2.png";
import welcome3 from "@/public/images/welcome3.png";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = [welcome1, welcome2, welcome3];

const BackgroundCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 h-full w-full"
        >
          <Image
            src={images[index]}
            alt="Background"
            fill
            priority
            className="object-cover object-center"
            placeholder="blur"
          />
        </motion.div>
        <div className="absolute inset-0 z-2 bg-black/40" />
      </AnimatePresence>
    </div>
  );
};

export default BackgroundCarousel;
