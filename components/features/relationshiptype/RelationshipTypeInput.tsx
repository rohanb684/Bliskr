"use client";

import { cn } from "@/lib/utils";
import { usePreferencesStore } from "@/store/usePreferencesStore";

const OPTIONS = [
  "Monogamy",
  "Non- Monogamy",
  "Casual",
  "Hook-Ups",
  "Figuring out",
];

const RelationshipTypeInput = () => {
  const { relationshipType, setRelationshipType } = usePreferencesStore();

  const cardClass = (option: string) =>
    cn(
      "px-4 py-3 rounded-lg text-sm font-semibold cursor-pointer transition-all duration-300",
      "bg-white-card text-center",
      relationshipType === option
        ? "shadow-brand-color text-brand-color"
        : "shadow-light-brand-color text-gray-700 hover:shadow-brand-color/50"
    );

  return (
    <div className="w-full flex flex-col items-center gap-3">
      {/* 2x2 Grid for main options */}
      <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
        {OPTIONS.slice(0, 4).map((option) => (
          <button
            key={option}
            onClick={() => setRelationshipType(option)}
            className={cn(cardClass(option), "w-full")}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="w-full flex-center">
        <button
          onClick={() => setRelationshipType(OPTIONS[4])}
          className={cn(cardClass(OPTIONS[4]), "w-fit")}
        >
          {OPTIONS[4]}
        </button>
      </div>
    </div>
  );
};

export default RelationshipTypeInput;
