"use client";

import { useState } from "react";
import { usePreferencesStore } from "@/store/usePreferencesStore";

const MAX_CHARS = 500;

const AboutInput = () => {
  const { aboutText, setAboutText } = usePreferencesStore();
  const [charCount, setCharCount] = useState(aboutText?.length || 0);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.length <= MAX_CHARS) {
      setAboutText(value);
      setCharCount(value.length);
    }
  };

  return (
    <div className="w-full relative">
      <textarea
        value={aboutText}
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
  );
};

export default AboutInput;
