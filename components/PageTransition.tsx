"use client";

import { motion } from "framer-motion";

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100%", opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 18,
        mass: 0.8,
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
