"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { usePreferencesStore } from "@/store/usePreferencesStore";

const RELATIONSHIP_OPTIONS = [
  "Monogamy",
  "Non- Monogamy",
  "Casual",
  "Hook-Ups",
  "Figuring out",
];

const INTO_OPTIONS = [
  "Adventurous",
  "Romantic",
  "Dominant",
  "Submissive",
  "Discreet meets",
  "Online only",
];

interface EditLookingForModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const EditLookingForModal = ({
  open,
  onOpenChange,
}: EditLookingForModalProps) => {
  const {
    relationshipType,
    intoPreferences,
    setRelationshipType,
    setIntoPreferences,
  } = usePreferencesStore();

  const [localRelationshipType, setLocalRelationshipType] =
    useState(relationshipType);
  const [localIntoPreferences, setLocalIntoPreferences] =
    useState(intoPreferences);

  const handleSave = () => {
    setRelationshipType(localRelationshipType);
    setIntoPreferences(localIntoPreferences);
    onOpenChange(false);
  };

  const handleOpenChange = (isOpen: boolean) => {
    if (isOpen) {
      setLocalRelationshipType(relationshipType);
      setLocalIntoPreferences(intoPreferences);
    }
    onOpenChange(isOpen);
  };

  const cardClass = (selected: string, option: string) =>
    cn(
      "px-3 py-2.5 rounded-lg text-sm font-semibold cursor-pointer transition-all duration-300",
      "bg-white-card text-center",
      selected === option
        ? "shadow-brand-color text-brand-color"
        : "shadow-light-brand-color text-gray-700 hover:shadow-brand-color/50"
    );

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-brand-color">
            Edit Looking For
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-5">
          <div>
            <label className="text-sm font-semibold text-gray-700 mb-2 block">
              Type of Relationship
            </label>
            <div className="grid grid-cols-2 gap-2">
              {RELATIONSHIP_OPTIONS.map((option) => (
                <button
                  key={option}
                  onClick={() => setLocalRelationshipType(option)}
                  className={cardClass(localRelationshipType, option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-700 mb-2 block">
              Into Preferences
            </label>
            <div className="grid grid-cols-2 gap-2">
              {INTO_OPTIONS.map((option) => (
                <button
                  key={option}
                  onClick={() => setLocalIntoPreferences(option)}
                  className={cardClass(localIntoPreferences, option)}
                >
                  {option}
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

export default EditLookingForModal;
