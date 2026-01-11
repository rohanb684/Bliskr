"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { usePreferencesStore } from "@/store/usePreferencesStore";

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

interface EditHeightBodyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const EditHeightBodyModal = ({
  open,
  onOpenChange,
}: EditHeightBodyModalProps) => {
  const { height, bodyType, setHeight, setBodyType } = usePreferencesStore();
  const [localHeight, setLocalHeight] = useState(height);
  const [localBodyType, setLocalBodyType] = useState(bodyType);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSave = () => {
    setHeight(localHeight);
    setBodyType(localBodyType);
    onOpenChange(false);
  };

  const handleOpenChange = (isOpen: boolean) => {
    if (isOpen) {
      setLocalHeight(height);
      setLocalBodyType(bodyType);
      setIsDropdownOpen(false);
    }
    onOpenChange(isOpen);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-brand-color">
            Edit Height & Body Type
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-gray-700">
              Height
            </label>
            <input
              type="text"
              value={localHeight}
              onChange={(e) => setLocalHeight(e.target.value)}
              placeholder="e.g. 5'8&quot; or 173 cm"
              className="w-full sm:h-12 p-3 bg-white-card shadow-light-brand-color rounded-lg
                focus:outline-none focus:shadow-brand-color transition-all duration-300
                text-sm placeholder:text-gray-400"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-gray-700">
              Body Type
            </label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full sm:h-12 p-3 bg-white-card shadow-light-brand-color rounded-lg
                  focus:outline-none focus:shadow-brand-color transition-all duration-300
                  text-sm text-left flex items-center justify-between cursor-pointer"
              >
                <span
                  className={localBodyType ? "text-gray-900" : "text-gray-400"}
                >
                  {localBodyType || "Select body type"}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 z-10 max-h-[200px] overflow-y-auto">
                  {BODY_TYPES.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => {
                        setLocalBodyType(type);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full px-3 py-2.5 text-left text-sm hover:bg-gray-100 transition-colors cursor-pointer ${
                        localBodyType === type
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

export default EditHeightBodyModal;
