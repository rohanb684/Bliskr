"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface VisibilityToggleProps {
  defaultOn?: boolean;
  onChange?: (isOn: boolean) => void;
}

const VisibilityToggle = ({
  defaultOn = false,
  onChange,
}: VisibilityToggleProps) => {
  const [isOn, setIsOn] = useState(defaultOn);

  const handleToggle = () => {
    const newValue = !isOn;
    setIsOn(newValue);
    onChange?.(newValue);
  };

  return (
    <div className="flex items-center justify-center gap-2">
      <span className="text-sm font-semibold text-gray-700">Visible</span>
      <button
        type="button"
        onClick={handleToggle}
        className={cn(
          "relative w-11 h-6 rounded-full transition-colors duration-300 cursor-pointer",
          isOn ? "bg-brand-color" : "bg-gray-300"
        )}
      >
        <span
          className={cn(
            "absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-all duration-300",
            "shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_3px_8px_0_rgba(0,0,0,0.15),0_3px_1px_0_rgba(0,0,0,0.06)]",
            isOn ? "left-5.5" : "left-0.5"
          )}
        />
      </button>
    </div>
  );
};

export default VisibilityToggle;
