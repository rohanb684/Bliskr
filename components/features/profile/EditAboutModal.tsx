"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { usePreferencesStore } from "@/store/usePreferencesStore";

const MAX_CHARS = 500;

interface EditAboutModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const EditAboutModal = ({ open, onOpenChange }: EditAboutModalProps) => {
  const { aboutText, setAboutText } = usePreferencesStore();
  const [localText, setLocalText] = useState(aboutText);
  const [charCount, setCharCount] = useState(aboutText?.length || 0);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.length <= MAX_CHARS) {
      setLocalText(value);
      setCharCount(value.length);
    }
  };

  const handleSave = () => {
    setAboutText(localText);
    onOpenChange(false);
  };

  const handleOpenChange = (isOpen: boolean) => {
    if (isOpen) {
      setLocalText(aboutText);
      setCharCount(aboutText?.length || 0);
    }
    onOpenChange(isOpen);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-brand-color">Edit About Me</DialogTitle>
        </DialogHeader>

        <div className="w-full relative">
          <textarea
            value={localText}
            onChange={handleChange}
            placeholder="Write something about yourself, or what are you looking for"
            maxLength={MAX_CHARS}
            className="w-full min-h-[150px] p-3 bg-white-card shadow-light-brand-color rounded-lg 
              focus:outline-none focus:shadow-brand-color transition-all duration-300
              resize-none text-sm placeholder:text-gray-400"
          />
          <span className="absolute bottom-3 right-3 text-xs text-gray-500 font-medium">
            {charCount}/{MAX_CHARS}
          </span>
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

export default EditAboutModal;
