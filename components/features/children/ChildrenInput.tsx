"use client";

import { cn } from "@/lib/utils";
import { usePreferencesStore } from "@/store/usePreferencesStore";

const ChildrenInput = () => {
  const { hasChildren, setHasChildren } = usePreferencesStore();

  const cardClass = (option: string) =>
    cn(
      "px-6 py-3 rounded-lg text-sm font-semibold cursor-pointer transition-all duration-300",
      "bg-white-card",
      hasChildren === option
        ? "shadow-brand-color text-brand-color"
        : "shadow-light-brand-color text-gray-700 hover:shadow-brand-color/50"
    );

  return (
    <div className="w-full flex flex-col items-center gap-3">
      {/* Row 1: Yes and No */}
      <div className="flex gap-3">
        <button
          onClick={() => setHasChildren("Yes")}
          className={cn(cardClass("Yes"), "w-24")}
        >
          Yes
        </button>
        <button
          onClick={() => setHasChildren("No")}
          className={cn(cardClass("No"), "w-24")}
        >
          No
        </button>
      </div>
      {/* Row 2: Prefer not to say */}
      <button
        onClick={() => setHasChildren("Prefer not to say")}
        className={cardClass("Prefer not to say")}
      >
        Prefer not to say
      </button>
    </div>
  );
};

export default ChildrenInput;
