"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import match1 from "@/public/images/matches/match1.jpg";
import oLocation from "@/public/images/orangeLocation.svg";
import { Heart } from "lucide-react";
import Link from "next/link";

interface MatchProfileCardProps {
  id?: string;
  name?: string;
  age?: number;
  location?: string;
  image?: StaticImageData;
}

const MatchProfileCard = ({
  id = "1",
  name = "Arundhati",
  age = 27,
  location = "Kolkata",
  image = match1,
}: MatchProfileCardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  return (
    <Link
      href={`/users/${id}`}
      className="flex flex-col gap-2 w-55 shrink-0 group"
    >
      <div className="w-full overflow-hidden shadow-light-brand-color rounded-lg">
        <Image
          className="w-full object-center object-cover h-65"
          src={image}
          alt="Profile Image"
        />
      </div>
      <div className="flex w-full rounded-md shadow-light-brand-color justify-between items-center bg-white p-2">
        <div className="flex flex-col">
          <h2 className="text-brand-color font-normal text-sm">
            {name}, <span className="text-amber-500">{age}</span>
          </h2>
          <h3 className="flex items-center text-brand-color font-normal text-sm -ml-1">
            <span>
              <Image src={oLocation} alt="Location icon" className="w-5" />
            </span>
            {location}
          </h3>
        </div>

        <div
          role="button"
          onClick={handleLikeClick}
          className="flex-center text-brand-color cursor-pointer z-3"
        >
          <motion.div
            animate={
              isLiked
                ? {
                    scale: [1, 1.5, 0.8, 1.2, 1],
                    y: [0, -12, 4, -6, 0],
                    rotate: [0, -10, 10, -5, 0],
                  }
                : { scale: 1, y: 0, rotate: 0 }
            }
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
          >
            <Heart
              className="w-6 h-6"
              fill={isLiked ? "#55128A" : "none"}
              color="#55128A"
            />
          </motion.div>
        </div>
      </div>
    </Link>
  );
};

export default MatchProfileCard;
