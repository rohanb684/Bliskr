"use client";

import { cn } from "@/lib/utils";
import { usePreferencesStore } from "@/store/usePreferencesStore";

const DrugsInput = () => {
  const { drugs, setDrugs } = usePreferencesStore();

  const cardClass = (option: string) =>
    cn(
      "px-2 py-3 rounded-lg text-sm font-semibold cursor-pointer transition-all duration-300",
      "bg-white-card text-center",
      drugs === option
        ? "shadow-brand-color text-brand-color"
        : "shadow-light-brand-color text-gray-700 hover:shadow-brand-color/50"
    );

  return (
    <div className="w-full flex flex-col items-center gap-3">
      <div className="flex gap-3">
        <button
          onClick={() => setDrugs("Yes")}
          className={cn(cardClass("Yes"), "w-24")}
        >
          Yes
        </button>
        <button
          onClick={() => setDrugs("Sometimes")}
          className={cn(cardClass("Sometimes"), "w-24")}
        >
          Sometimes
        </button>
        <button
          onClick={() => setDrugs("No")}
          className={cn(cardClass("No"), "w-24")}
        >
          No
        </button>
      </div>

      <button
        onClick={() => setDrugs("Prefer not to say")}
        className={cardClass("Prefer not to say")}
      >
        Prefer not to say
      </button>
    </div>
  );
};

export default DrugsInput;
