"use client";

import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";
import { Pencil } from "lucide-react";
import orangeMapPin from "@/public/images/orangeMapPin.svg";
import match1 from "@/public/images/matches/match1.jpg";
import match2 from "@/public/images/matches/match2.jpg";
import match3 from "@/public/images/matches/match3.jpg";
import match4 from "@/public/images/matches/match4.jpg";
import match5 from "@/public/images/matches/match5.jpg";
import { usePreferencesStore } from "@/store/usePreferencesStore";
import EditAboutModal from "@/components/features/profile/EditAboutModal";
import EditInterestsModal from "@/components/features/profile/EditInterestsModal";
import EditHeightBodyModal from "@/components/features/profile/EditHeightBodyModal";
import EditLifestyleModal from "@/components/features/profile/EditLifestyleModal";
import EditLookingForModal from "@/components/features/profile/EditLookingForModal";
import EditFantasiesModal from "@/components/features/profile/EditFantasiesModal";

const IMAGES = [match1, match2, match3, match4, match5];

const PROFILE_DATA = {
  name: "Arundhati",
  age: 27,
  profession: "Teacher",
  location: "Kolkata",
  religion: "Hindu",
};

const ProfilePage = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [aboutModalOpen, setAboutModalOpen] = useState(false);
  const [interestsModalOpen, setInterestsModalOpen] = useState(false);
  const [heightBodyModalOpen, setHeightBodyModalOpen] = useState(false);
  const [lifestyleModalOpen, setLifestyleModalOpen] = useState(false);
  const [lookingForModalOpen, setLookingForModalOpen] = useState(false);
  const [fantasiesModalOpen, setFantasiesModalOpen] = useState(false);

  const {
    aboutText,
    interests,
    height,
    bodyType,
    hasChildren,
    drinking,
    smoking,
    drugs,
    relationshipType,
    intoPreferences,
    fantasies,
  } = usePreferencesStore();

  const handleScroll = useCallback(() => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const scrollLeft = container.scrollLeft;
    const itemWidth = container.scrollWidth / IMAGES.length;
    const index = Math.round(scrollLeft / itemWidth);
    setCurrentIndex(index);
  }, []);

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const EditButton = ({ onClick }: { onClick: () => void }) => (
    <button
      onClick={onClick}
      className="ml-2 p-1 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
    >
      <Pencil className="w-4 h-4 text-brand-color" />
    </button>
  );

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
        </div>

        <div className="mb-5">
          <div className="flex items-center">
            <h2 className="text-black font-semibold">About Me</h2>
            <EditButton onClick={() => setAboutModalOpen(true)} />
          </div>
          <p className="text-brand-color font-semibold text-sm leading-relaxed mt-2">
            {aboutText || "Tell us about yourself..."}
          </p>
        </div>

        <div className="mb-5">
          <div className="flex items-center">
            <h2 className="text-black font-semibold">Interests</h2>
            <EditButton onClick={() => setInterestsModalOpen(true)} />
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {interests.length > 0 ? (
              interests.map((interest) => (
                <span
                  key={interest}
                  className="px-3 py-1.5 shadow-light-brand-color rounded-lg text-brand-color text-sm"
                >
                  {interest}
                </span>
              ))
            ) : (
              <span className="text-gray-400 text-sm italic">
                No interests added yet
              </span>
            )}
          </div>
        </div>

        <div className="mb-5">
          <div className="flex items-center">
            <h2 className="text-black font-semibold">Height & Body Type</h2>
            <EditButton onClick={() => setHeightBodyModalOpen(true)} />
          </div>
          <div className="flex gap-3 mt-2">
            {height && (
              <span className="px-3 py-1.5 shadow-light-brand-color rounded-lg text-brand-color text-sm">
                {height}
              </span>
            )}
            {bodyType && (
              <span className="px-3 py-1.5 shadow-light-brand-color rounded-lg text-brand-color text-sm">
                {bodyType}
              </span>
            )}
            {!height && !bodyType && (
              <span className="text-gray-400 text-sm italic">
                Not specified
              </span>
            )}
          </div>
        </div>

        <div className="mb-5">
          <div className="flex items-center">
            <h2 className="text-black font-semibold">Lifestyle</h2>
            <EditButton onClick={() => setLifestyleModalOpen(true)} />
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {hasChildren && (
              <span className="px-3 py-1.5 shadow-light-brand-color rounded-lg text-brand-color text-sm">
                Children: {hasChildren}
              </span>
            )}
            {drinking && (
              <span className="px-3 py-1.5 shadow-light-brand-color rounded-lg text-brand-color text-sm">
                Drinks: {drinking}
              </span>
            )}
            {smoking && (
              <span className="px-3 py-1.5 shadow-light-brand-color rounded-lg text-brand-color text-sm">
                Smokes: {smoking}
              </span>
            )}
            {drugs && (
              <span className="px-3 py-1.5 shadow-light-brand-color rounded-lg text-brand-color text-sm">
                Drugs: {drugs}
              </span>
            )}
            {!hasChildren && !drinking && !smoking && !drugs && (
              <span className="text-gray-400 text-sm italic">
                Not specified
              </span>
            )}
          </div>
        </div>

        <div className="mb-5">
          <div className="flex items-center">
            <h2 className="text-black font-semibold">Looking For</h2>
            <EditButton onClick={() => setLookingForModalOpen(true)} />
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {relationshipType && (
              <span className="px-3 py-1.5 shadow-light-brand-color rounded-lg text-brand-color text-sm">
                {relationshipType}
              </span>
            )}
            {intoPreferences && (
              <span className="px-3 py-1.5 shadow-light-brand-color rounded-lg text-brand-color text-sm">
                {intoPreferences}
              </span>
            )}
            {!relationshipType && !intoPreferences && (
              <span className="text-gray-400 text-sm italic">
                Not specified
              </span>
            )}
          </div>
        </div>

        <div>
          <div className="flex items-center">
            <h2 className="text-black font-semibold">Fantasies</h2>
            <EditButton onClick={() => setFantasiesModalOpen(true)} />
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {fantasies.sensory && (
              <span className="px-3 py-1.5 shadow-light-brand-color rounded-lg text-brand-color text-sm">
                {fantasies.sensory}
              </span>
            )}
            {fantasies.power && (
              <span className="px-3 py-1.5 shadow-light-brand-color rounded-lg text-brand-color text-sm">
                {fantasies.power}
              </span>
            )}
            {fantasies.scenarios && (
              <span className="px-3 py-1.5 shadow-light-brand-color rounded-lg text-brand-color text-sm">
                {fantasies.scenarios}
              </span>
            )}
            {fantasies.experience && (
              <span className="px-3 py-1.5 shadow-light-brand-color rounded-lg text-brand-color text-sm">
                {fantasies.experience}
              </span>
            )}
            {!fantasies.sensory &&
              !fantasies.power &&
              !fantasies.scenarios &&
              !fantasies.experience && (
                <span className="text-gray-400 text-sm italic">
                  Not specified
                </span>
              )}
          </div>
        </div>
      </div>

      <EditAboutModal open={aboutModalOpen} onOpenChange={setAboutModalOpen} />
      <EditInterestsModal
        open={interestsModalOpen}
        onOpenChange={setInterestsModalOpen}
      />
      <EditHeightBodyModal
        open={heightBodyModalOpen}
        onOpenChange={setHeightBodyModalOpen}
      />
      <EditLifestyleModal
        open={lifestyleModalOpen}
        onOpenChange={setLifestyleModalOpen}
      />
      <EditLookingForModal
        open={lookingForModalOpen}
        onOpenChange={setLookingForModalOpen}
      />
      <EditFantasiesModal
        open={fantasiesModalOpen}
        onOpenChange={setFantasiesModalOpen}
      />
    </div>
  );
};

export default ProfilePage;
