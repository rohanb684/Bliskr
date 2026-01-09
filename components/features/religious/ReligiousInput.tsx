"use client";

import { cn } from "@/lib/utils";
import { usePreferencesStore } from "@/store/usePreferencesStore";

const OPTIONS = [
  "Hindu",
  "Jain",
  "Muslim",
  "Christian",
  "Sikh",
  "Buddhist",
  "Agnostic",
  "Atheist",
  "Other",
];

const ReligiousInput = () => {
  const { religiousBeliefs, setReligiousBeliefs } = usePreferencesStore();

  const cardClass = (option: string) =>
    cn(
      "px-2 py-3 rounded-lg text-sm font-semibold cursor-pointer transition-all duration-300",
      "bg-white-card w-full text-center",
      religiousBeliefs === option
        ? "shadow-brand-color text-brand-color"
        : "shadow-light-brand-color text-gray-700 hover:shadow-brand-color/50"
    );

  return (
    <div className="w-full flex flex-col items-center gap-3">
      {/* 3x3 Grid for main options */}
      <div className="grid grid-cols-3 gap-3 w-full max-w-sm">
        {OPTIONS.map((option) => (
          <button
            key={option}
            onClick={() => setReligiousBeliefs(option)}
            className={cardClass(option)}
          >
            {option}
          </button>
        ))}
      </div>
      {/* Prefer not to say centered */}
      <button
        onClick={() => setReligiousBeliefs("Prefer not to say")}
        className={cn(cardClass("Prefer not to say"), "w-auto px-6")}
      >
        Prefer not to say
      </button>
    </div>
  );
};

export default ReligiousInput;
