"use client";

import { cn } from "@/lib/utils";
import { usePreferencesStore } from "@/store/usePreferencesStore";

type FantasyCategory = "sensory" | "power" | "scenarios" | "experience";

const CATEGORIES: { name: string; key: FantasyCategory; options: string[] }[] =
  [
    {
      name: "Sensory",
      key: "sensory",
      options: ["Massage", "Blindfolds"],
    },
    {
      name: "Power",
      key: "power",
      options: ["Dominance", "Submission", "BDSM", "Control"],
    },
    {
      name: "Scenarios",
      key: "scenarios",
      options: ["Roleplay", "Strangers", "Public"],
    },
    {
      name: "Experience",
      key: "experience",
      options: ["Toys", "Lingerie", "Photos/Videos", "Strangers"],
    },
  ];

const FantasiesInput = () => {
  const { fantasies, setFantasy } = usePreferencesStore();

  const cardClass = (category: FantasyCategory, option: string) =>
    cn(
      "px-3 py-2.5 rounded-lg text-sm font-semibold cursor-pointer transition-all duration-300",
      "bg-white-card text-center w-full",
      fantasies[category] === option
        ? "shadow-brand-color text-brand-color"
        : "shadow-light-brand-color text-gray-700 hover:shadow-brand-color/50"
    );

  return (
    <div className="w-full flex flex-col gap-6">
      {CATEGORIES.map((category) => (
        <div key={category.key} className="w-full">
          <h3 className="text-sm font-bold text-brand-color mb-2">
            {category.name}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {category.options.map((option) => (
              <button
                key={option}
                onClick={() => setFantasy(category.key, option)}
                className={cardClass(category.key, option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FantasiesInput;
