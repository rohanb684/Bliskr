"use client";

import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";
import orangeMapPin from "@/public/images/orangeMapPin.svg";
import gift from "@/public/images/gift.png";
import match1 from "@/public/images/matches/match1.jpg";
import match2 from "@/public/images/matches/match2.jpg";
import match3 from "@/public/images/matches/match3.jpg";
import match4 from "@/public/images/matches/match4.jpg";
import match5 from "@/public/images/matches/match5.jpg";
import OutOfCoins from "@/components/OutofCoins";

const IMAGES = [match1, match2, match3, match4, match5];

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
  height: "5'6\"",
  bodyType: "Athletic",
  hasChildren: "No",
  drinking: "Sometimes",
  smoking: "No",
  drugs: "No",
  relationshipType: "Casual",
  intoPreferences: "Adventurous",
  fantasies: {
    sensory: "Massage",
    power: "Dominance",
    scenarios: "Role Play",
    experience: "Threesome",
  },
};

const UserProfilePage = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showOutOfCoins, setShowOutOfCoins] = useState(false);
  const handleScroll = useCallback(() => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const scrollLeft = container.scrollLeft;
    const itemWidth = container.scrollWidth / IMAGES.length;
    const index = Math.round(scrollLeft / itemWidth);
    setCurrentIndex(index);
  }, []);

  const handlePaidAction = async () => {
    const response = "OUT_OF_COINS";

    if (response === "OUT_OF_COINS") {
      setShowOutOfCoins(true);
      return;
    }
  };

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="w-full pb-24 ">
      <div
        ref={carouselRef}
        className="flex px-0.5 pt-3 gap-4 h-[86vw] max-h-100 overflow-x-auto snap-x snap-mandatory scrollbar-hide w-full pb-6"
      >
        {IMAGES.map((img, index) => (
          <div
            key={index}
            className="w-[80%] h-full shrink-0 snap-center relative rounded-lg overflow-hidden shadow-brand-color"
          >
            <Image
              src={img}
              alt={`Profile ${index + 1}`}
              fill
              className="object-cover object-center"
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mb-3">
        {IMAGES.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              index === currentIndex ? "bg-brand-color" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      <div className="bg-white rounded-t-3xl p-5 shadow-gray-600 shadow-xs sm:shadow-lg">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h1 className="text-2xl font-semibold">
              <span className="text-brand-color">{PROFILE_DATA.name},</span>{" "}
              <span className="text-amber-500">{PROFILE_DATA.age}</span>
            </h1>
            <p className="text-gray-600 text-sm">{PROFILE_DATA.profession}</p>
          </div>
          <span className="px-4 py-1.5 shadow-light-brand-color rounded-lg text-black text-sm font-bold">
            {PROFILE_DATA.religion}
          </span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1">
            <Image src={orangeMapPin} alt="Location" className="w-5 h-5" />
            <span className=" text-sm rounded-full p-0.5 text-brand-color bg-[linear-gradient(135deg,#FF7415,#55128A)] inline-block ">
              <span className="block rounded-full bg-white px-3 py-0.5">
                {PROFILE_DATA.location}
              </span>
            </span>
          </div>
          <div
            onClick={handlePaidAction}
            className="w-12 h-12 rounded-full shadow-brand-color flex-center"
          >
            <Image src={gift} alt="Gift" className="w-7 h-7" />
          </div>
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

        <div className="mb-5">
          <h2 className="text-black font-semibold mb-2">Height & Body Type</h2>
          <div className="flex gap-3">
            <span className="px-3 py-1.5 shadow-light-brand-color rounded-lg text-brand-color text-sm">
              {PROFILE_DATA.height}
            </span>
            <span className="px-3 py-1.5 shadow-light-brand-color rounded-lg text-brand-color text-sm">
              {PROFILE_DATA.bodyType}
            </span>
          </div>
        </div>

        <div className="mb-5">
          <h2 className="text-black font-semibold mb-2">Lifestyle</h2>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1.5 shadow-light-brand-color rounded-lg text-brand-color text-sm">
              Children: {PROFILE_DATA.hasChildren}
            </span>
            <span className="px-3 py-1.5 shadow-light-brand-color rounded-lg text-brand-color text-sm">
              Drinks: {PROFILE_DATA.drinking}
            </span>
            <span className="px-3 py-1.5 shadow-light-brand-color rounded-lg text-brand-color text-sm">
              Smokes: {PROFILE_DATA.smoking}
            </span>
            <span className="px-3 py-1.5 shadow-light-brand-color rounded-lg text-brand-color text-sm">
              Drugs: {PROFILE_DATA.drugs}
            </span>
          </div>
        </div>

        <div className="mb-5">
          <h2 className="text-black font-semibold mb-2">Looking For</h2>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1.5 shadow-light-brand-color rounded-lg text-brand-color text-sm">
              {PROFILE_DATA.relationshipType}
            </span>
            <span className="px-3 py-1.5 shadow-light-brand-color rounded-lg text-brand-color text-sm">
              {PROFILE_DATA.intoPreferences}
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-black font-semibold mb-2">Fantasies</h2>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1.5 shadow-light-brand-color rounded-lg text-brand-color text-sm">
              {PROFILE_DATA.fantasies.sensory}
            </span>
            <span className="px-3 py-1.5 shadow-light-brand-color rounded-lg text-brand-color text-sm">
              {PROFILE_DATA.fantasies.power}
            </span>
            <span className="px-3 py-1.5 shadow-light-brand-color rounded-lg text-brand-color text-sm">
              {PROFILE_DATA.fantasies.scenarios}
            </span>
            <span className="px-3 py-1.5 shadow-light-brand-color rounded-lg text-brand-color text-sm">
              {PROFILE_DATA.fantasies.experience}
            </span>
          </div>
        </div>
      </div>
      <OutOfCoins open={showOutOfCoins} onOpenChange={setShowOutOfCoins} />
    </div>
  );
};

export default UserProfilePage;
