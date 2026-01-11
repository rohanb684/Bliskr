"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const RELIGIONS = [
  "Hindu",
  "Muslim",
  "Christian",
  "Sikh",
  "Buddhist",
  "Jain",
  "Jewish",
  "Atheist",
  "Agnostic",
  "Spiritual",
  "Other",
];

interface EditReligionModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  currentReligion: string;
  onSave: (religion: string) => void;
}

const EditReligionModal = ({
  open,
  onOpenChange,
  currentReligion,
  onSave,
}: EditReligionModalProps) => {
  const [selectedReligion, setSelectedReligion] = useState(currentReligion);

  const handleOpenChange = (isOpen: boolean) => {
    if (isOpen) {
      setSelectedReligion(currentReligion);
    }
    onOpenChange(isOpen);
  };

  const handleSave = () => {
    onSave(selectedReligion);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-brand-color">Edit Religion</DialogTitle>
        </DialogHeader>

        <div className="flex flex-wrap gap-2">
          {RELIGIONS.map((religion) => (
            <button
              key={religion}
              onClick={() => setSelectedReligion(religion)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                selectedReligion === religion
                  ? "bg-brand-color text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {religion}
            </button>
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

export default EditReligionModal;
