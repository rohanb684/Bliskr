"use client";

import { useState } from "react";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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

interface EditInterestsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const EditInterestsModal = ({
  open,
  onOpenChange,
}: EditInterestsModalProps) => {
  const { interests, addInterest, removeInterest } = usePreferencesStore();
  const [localInterests, setLocalInterests] = useState<string[]>(interests);

  const availableInterests = ALL_INTERESTS.filter(
    (interest) => !localInterests.includes(interest)
  );

  const handleAdd = (interest: string) => {
    setLocalInterests([...localInterests, interest]);
  };

  const handleRemove = (interest: string) => {
    setLocalInterests(localInterests.filter((i) => i !== interest));
  };

  const handleSave = () => {
    interests.forEach((i) => {
      if (!localInterests.includes(i)) {
        removeInterest(i);
      }
    });
    localInterests.forEach((i) => {
      if (!interests.includes(i)) {
        addInterest(i);
      }
    });
    onOpenChange(false);
  };

  const handleOpenChange = (isOpen: boolean) => {
    if (isOpen) {
      setLocalInterests(interests);
    }
    onOpenChange(isOpen);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-brand-color">Edit Interests</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-4">
          <div className="w-full min-h-[100px] p-3 bg-white-card shadow-light-brand-color rounded-lg">
            <p className="text-xs text-gray-500 mb-2 font-medium">
              Your Interests
            </p>
            <div className="flex flex-wrap gap-2">
              {localInterests.length === 0 ? (
                <p className="text-sm text-gray-400 italic">
                  Select interests from below
                </p>
              ) : (
                localInterests.map((interest) => (
                  <button
                    key={interest}
                    onClick={() => handleRemove(interest)}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-brand-color text-white text-sm font-medium rounded-full cursor-pointer hover:opacity-90 transition-opacity"
                  >
                    {interest}
                    <X className="w-3.5 h-3.5" />
                  </button>
                ))
              )}
            </div>
          </div>

          <div className="w-full min-h-[120px] p-3 bg-white-card shadow-light-brand-color rounded-lg">
            <p className="text-xs text-gray-500 mb-2 font-medium">
              Tap to add interests
            </p>
            <div className="flex flex-wrap gap-2">
              {availableInterests.map((interest) => (
                <button
                  key={interest}
                  onClick={() => handleAdd(interest)}
                  className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm font-medium rounded-full cursor-pointer hover:bg-gray-200 transition-colors border border-gray-200"
                >
                  {interest}
                </button>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={handleSave}
          className="w-full py-3 bg-brand-color text-white font-semibold rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
        >
          Save Changes
        </button>
      </DialogContent>
    </Dialog>
  );
};

export default EditInterestsModal;
