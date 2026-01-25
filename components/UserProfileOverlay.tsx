"use client";

import Image from "next/image";
import { useState } from "react";
import { X, Heart, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion"; // 1. Import AnimatePresence
import orangeMapPin from "@/public/images/orangeMapPin.svg";
import match1 from "@/public/images/matches/match1.jpg";

interface UserProfileOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onReject?: () => void;
  onMatch?: () => void;
  onFavorite?: () => void;
}

const PROFILE_DATA = {
  name: "Arundhati",
  age: 27,
  profession: "Teacher",
  location: "Kolkata",
  religion: "Hindu",
  about:
    "I'm someone who loves good conversations, humour, and meaningful connections. Looking for a no strings attached relationship",
  interests: [
    "Singing",
    "Dancing",
    "Party",
    "Coffee Dates",
    "Movies",
    "Travel",
    "Long Drives",
  ],
};

const UserProfileOverlay = ({
  isOpen,
  onClose,
  onReject,
  onMatch,
  onFavorite,
}: UserProfileOverlayProps) => {
  const [isHeartActive, setIsHeartActive] = useState(false);
  const [isStarActive, setIsStarActive] = useState(false);

  // 2. REMOVED the early return (if !isOpen return null) so AnimatePresence can work

  const handleReject = () => {
    onReject?.();
    onClose();
  };

  const handleMatch = () => {
    if (isHeartActive) return;
    setIsHeartActive(true);
    onMatch?.();
    setTimeout(() => {
      setIsHeartActive(false);
      onClose();
    }, 1000);
  };

  const handleFavorite = () => {
    if (isStarActive) return;
    setIsStarActive(true);
    onFavorite?.();
    setTimeout(() => {
      setIsStarActive(false);
      onClose();
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-80 flex items-end justify-center bg-black/50"
        >
          <motion.div
            key="modal"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="h-screen w-full max-w-md bg-white overflow-y-auto"
          >
            <div className="relative w-full h-[50vh]">
              <Image
                src={match1}
                alt="Profile"
                fill
                className="object-cover object-center rounded-b-2xl"
              />

              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-7 h-7 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-white transition-colors z-10"
              >
                <X className="w-4 h-4 text-gray-700" />
              </button>

              <div className="absolute z-50 bottom-0 left-0 right-0 flex justify-center gap-6 pb-6 translate-y-4/6">
                <button
                  onClick={handleReject}
                  className="cursor-pointer w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform border-2 border-red-400"
                >
                  <X className="w-7 h-7 text-red-500" />
                </button>

                <button
                  onClick={handleMatch}
                  className={`cursor-pointer w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 border-2 border-brand-color ${
                    !isHeartActive ? "hover:scale-110" : ""
                  }`}
                >
                  <motion.div
                    animate={
                      isHeartActive
                        ? {
                            scale: [1, 1.4, 0.9, 1.2, 1],
                            rotate: [0, -15, 15, -10, 0],
                          }
                        : { scale: 1, rotate: 0 }
                    }
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                    }}
                  >
                    <Heart
                      className="w-8 h-8 transition-colors duration-300"
                      fill={isHeartActive ? "#55128A" : "none"}
                      color="#55128A"
                    />
                  </motion.div>
                </button>

                <button
                  onClick={handleFavorite}
                  className={`cursor-pointer w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 border-2 border-amber-400 ${
                    !isStarActive ? "hover:scale-110" : ""
                  }`}
                >
                  <motion.div
                    animate={
                      isStarActive
                        ? {
                            scale: [1, 1.5, 0.8, 1.3, 1],
                            rotate: [0, 20, -20, 10, 0],
                          }
                        : { scale: 1, rotate: 0 }
                    }
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                    }}
                  >
                    <Star
                      className="w-7 h-7 transition-colors duration-300"
                      fill={isStarActive ? "#f59e0b" : "none"}
                      color="#f59e0b"
                    />
                  </motion.div>
                </button>
              </div>
            </div>

            <div className="rounded-t-3xl p-5 pt-18 -mt-4 relative z-10">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h1 className="text-2xl font-semibold">
                    <span className="text-brand-color">
                      {PROFILE_DATA.name},
                    </span>{" "}
                    <span className="text-amber-500">{PROFILE_DATA.age}</span>
                  </h1>
                  <p className="text-gray-600 text-sm">
                    {PROFILE_DATA.profession}
                  </p>
                </div>
                <span className="px-4 py-1.5 shadow-light-brand-color rounded-lg text-black text-sm font-bold">
                  {PROFILE_DATA.religion}
                </span>
              </div>

              <div className="flex items-center gap-1 mb-4">
                <Image src={orangeMapPin} alt="Location" className="w-5 h-5" />
                <span className=" text-sm rounded-full p-0.5 text-brand-color bg-[linear-gradient(135deg,#FF7415,#55128A)] inline-block ">
                  <span className="block rounded-full bg-white px-3 py-0.5">
                    {PROFILE_DATA.location}
                  </span>
                </span>
              </div>

              <div className="mb-5">
                <h2 className="text-black font-semibold mb-2">About Me</h2>
                <p className="text-brand-color font-semibold text-sm leading-relaxed">
                  {PROFILE_DATA.about}
                </p>
              </div>

              <div className="mb-5">
                <h2 className="text-black font-semibold mb-2">Interests</h2>
                <div className="flex flex-wrap gap-2">
                  {PROFILE_DATA.interests.map((interest) => (
                    <span
                      key={interest}
                      className="px-3 py-1.5 shadow-light-brand-color rounded-lg text-brand-color text-sm"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UserProfileOverlay;
