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

interface EditLifestyleModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const EditLifestyleModal = ({
  open,
  onOpenChange,
}: EditLifestyleModalProps) => {
  const {
    hasChildren,
    drinking,
    smoking,
    drugs,
    setHasChildren,
    setDrinking,
    setSmoking,
    setDrugs,
  } = usePreferencesStore();

  const [localChildren, setLocalChildren] = useState(hasChildren);
  const [localDrinking, setLocalDrinking] = useState(drinking);
  const [localSmoking, setLocalSmoking] = useState(smoking);
  const [localDrugs, setLocalDrugs] = useState(drugs);

  const handleSave = () => {
    setHasChildren(localChildren);
    setDrinking(localDrinking);
    setSmoking(localSmoking);
    setDrugs(localDrugs);
    onOpenChange(false);
  };

  const handleOpenChange = (isOpen: boolean) => {
    if (isOpen) {
      setLocalChildren(hasChildren);
      setLocalDrinking(drinking);
      setLocalSmoking(smoking);
      setLocalDrugs(drugs);
    }
    onOpenChange(isOpen);
  };

  const cardClass = (selected: string, option: string) =>
    cn(
      "px-3 py-2 rounded-lg text-xs font-semibold cursor-pointer transition-all duration-300",
      "bg-white-card text-center",
      selected === option
        ? "shadow-brand-color text-brand-color"
        : "shadow-light-brand-color text-gray-700 hover:shadow-brand-color/50"
    );

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-brand-color">Edit Lifestyle</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-5">
          <div>
            <label className="text-sm font-semibold text-gray-700 mb-2 block">
              Do you have children?
            </label>
            <div className="flex flex-wrap gap-2">
              {["Yes", "No", "Prefer not to say"].map((option) => (
                <button
                  key={option}
                  onClick={() => setLocalChildren(option)}
                  className={cardClass(localChildren, option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-700 mb-2 block">
              Do you drink?
            </label>
            <div className="flex flex-wrap gap-2">
              {["Yes", "Sometimes", "No", "Prefer not to say"].map((option) => (
                <button
                  key={option}
                  onClick={() => setLocalDrinking(option)}
                  className={cardClass(localDrinking, option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-700 mb-2 block">
              Do you smoke?
            </label>
            <div className="flex flex-wrap gap-2">
              {["Yes", "Sometimes", "No", "Prefer not to say"].map((option) => (
                <button
                  key={option}
                  onClick={() => setLocalSmoking(option)}
                  className={cardClass(localSmoking, option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-700 mb-2 block">
              Do you use drugs?
            </label>
            <div className="flex flex-wrap gap-2">
              {["Yes", "Sometimes", "No", "Prefer not to say"].map((option) => (
                <button
                  key={option}
                  onClick={() => setLocalDrugs(option)}
                  className={cardClass(localDrugs, option)}
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

export default EditLifestyleModal;
