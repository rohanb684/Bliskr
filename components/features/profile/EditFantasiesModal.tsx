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

interface EditFantasiesModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const EditFantasiesModal = ({
  open,
  onOpenChange,
}: EditFantasiesModalProps) => {
  const { fantasies, setFantasy } = usePreferencesStore();
  const [localFantasies, setLocalFantasies] = useState(fantasies);

  const handleSelect = (category: FantasyCategory, option: string) => {
    setLocalFantasies({ ...localFantasies, [category]: option });
  };

  const handleSave = () => {
    Object.entries(localFantasies).forEach(([key, value]) => {
      setFantasy(key, value);
    });
    onOpenChange(false);
  };

  const handleOpenChange = (isOpen: boolean) => {
    if (isOpen) {
      setLocalFantasies(fantasies);
    }
    onOpenChange(isOpen);
  };

  const cardClass = (category: FantasyCategory, option: string) =>
    cn(
      "px-3 py-2.5 rounded-lg text-sm font-semibold cursor-pointer transition-all duration-300",
      "bg-white-card text-center w-full",
      localFantasies[category] === option
        ? "shadow-brand-color text-brand-color"
        : "shadow-light-brand-color text-gray-700 hover:shadow-brand-color/50"
    );

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-brand-color">Edit Fantasies</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-5">
          {CATEGORIES.map((category) => (
            <div key={category.key}>
              <h3 className="text-sm font-bold text-brand-color mb-2">
                {category.name}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {category.options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleSelect(category.key, option)}
                    className={cardClass(category.key, option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}
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

export default EditFantasiesModal;
