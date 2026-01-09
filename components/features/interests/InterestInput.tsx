"use client";

import { X } from "lucide-react";
import { usePreferencesStore } from "@/store/usePreferencesStore";

const ALL_INTERESTS = [
  "Music",
  "Travel",
  "Cooking",
  "Photography",
  "Fitness",
  "Gaming",
  "Reading",
  "Movies",
  "Art",
  "Dancing",
  "Hiking",
  "Yoga",
  "Sports",
  "Fashion",
  "Technology",
  "Pets",
  "Wine & Dine",
  "Netflix",
  "Coffee",
  "Beach",
];

const InterestInput = () => {
  const { interests, addInterest, removeInterest } = usePreferencesStore();

  // Available interests = all interests minus selected ones
  const availableInterests = ALL_INTERESTS.filter(
    (interest) => !interests.includes(interest)
  );

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Top Box - User's Selected Interests */}
      <div className="w-full min-h-[100px] p-3 bg-white-card shadow-light-brand-color rounded-lg">
        <p className="text-xs text-gray-500 mb-2 font-medium">Your Interests</p>
        <div className="flex flex-wrap gap-2">
          {interests.length === 0 ? (
            <p className="text-sm text-gray-400 italic">
              Select interests from below
            </p>
          ) : (
            interests.map((interest) => (
              <button
                key={interest}
                onClick={() => removeInterest(interest)}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-brand-color text-white text-sm font-medium rounded-full cursor-pointer hover:opacity-90 transition-opacity"
              >
                {interest}
                <X className="w-3.5 h-3.5" />
              </button>
            ))
          )}
        </div>
      </div>

      {/* Bottom Box - Available Interests */}
      <div className="w-full min-h-[120px] p-3 bg-white-card shadow-light-brand-color rounded-lg">
        <p className="text-xs text-gray-500 mb-2 font-medium">
          Tap to add interests
        </p>
        <div className="flex flex-wrap gap-2">
          {availableInterests.map((interest) => (
            <button
              key={interest}
              onClick={() => addInterest(interest)}
              className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm font-medium rounded-full cursor-pointer hover:bg-gray-200 transition-colors border border-gray-200"
            >
              {interest}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InterestInput;
