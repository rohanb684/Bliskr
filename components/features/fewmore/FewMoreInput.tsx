"use client";

import { useState } from "react";
import { usePreferencesStore } from "@/store/usePreferencesStore";
import { ChevronDown } from "lucide-react";

const BODY_TYPES = [
  "Slim",
  "Athletic",
  "Average",
  "Muscular",
  "Curvy",
  "Plus Size",
  "Lean",
  "Chubby",
];

const FewMoreInput = () => {
  const { height, bodyType, setHeight, setBodyType } = usePreferencesStore();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex flex-col gap-5">
      {/* Height Input */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-semibold text-gray-700">
          Height (Optional)
        </label>
        <input
          type="text"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="e.g. 5'8&quot; or 173 cm"
          className="w-full sm:h-12 p-3 bg-white-card shadow-light-brand-color rounded-lg
            focus:outline-none focus:shadow-brand-color transition-all duration-300
            text-sm placeholder:text-gray-400"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-semibold text-gray-700">
          Body Type (Optional)
        </label>
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full sm:h-12 p-3 bg-white-card shadow-light-brand-color rounded-lg
              focus:outline-none focus:shadow-brand-color transition-all duration-300
              text-sm text-left flex items-center justify-between cursor-pointer"
          >
            <span className={bodyType ? "text-gray-900" : "text-gray-400"}>
              {bodyType || "Select body type"}
            </span>
            <ChevronDown
              className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 z-10 max-h-[200px] overflow-y-auto">
              {BODY_TYPES.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => {
                    setBodyType(type);
                    setIsOpen(false);
                  }}
                  className={`w-full px-3 py-2.5 text-left text-sm hover:bg-gray-100 transition-colors cursor-pointer ${
                    bodyType === type
                      ? "bg-brand-color/10 text-brand-color font-semibold"
                      : "text-gray-700"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FewMoreInput;
