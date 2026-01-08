"use client";
import married from "@/public/images/relationship/married.png";
import couple from "@/public/images/relationship/couple.png";
import separated from "@/public/images/relationship/separated.png";
import divorced from "@/public/images/relationship/divorced.png";
import single from "@/public/images/relationship/single.png";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { usePreferencesStore } from "@/store/usePreferencesStore";
const relationshipData = [
  {
    image: married,
    heading: "Married",
    subheading: '"Seeking connection outside marriage"',
  },
  {
    image: couple,
    heading: "In  a relationship",
    subheading: ' "Committed but looking for something new"',
  },
  {
    image: separated,
    heading: "Separated",
    subheading: '"Living apart but still legally married"',
  },
  {
    image: divorced,
    heading: "Divorced",
    subheading: ' "Committed but looking for something new"',
  },
  {
    image: single,
    heading: "Single",
    subheading: ' "Committed but looking for something new"',
  },
];
const RelationshipInput = () => {
  const { relationshipStatus, setRelationshipStatus } = usePreferencesStore();
  return (
    <div className="flex flex-col w-full gap-4 ">
      {relationshipData.map((r) => (
        <div
          className={cn(
            "w-full gap-1 cursor-pointer sm:hover:scale-105 transition-all duration-200 sm:gap-3 h-20 sm:h-27 px-2  shadow-light-brand-color bg-white-card rounded-lg flex items-center",
            r.heading === relationshipStatus &&
              "shadow-brand-color transition-all duration-200"
          )}
          onClick={() => setRelationshipStatus(r.heading)}
          key={r.heading}
        >
          <Image
            src={r.image}
            className="w-15 sm:w-22"
            alt={`${r.heading} Image`}
          />
          <div className="flex flex-col sm:gap-2">
            <h2 className="text-brand-color font-bold text-lg sm:text-2xl">
              {r.heading}
            </h2>
            <h4 className="text-[10px] sm:text-sm font-normal italic text-black">
              {r.subheading}
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RelationshipInput;
