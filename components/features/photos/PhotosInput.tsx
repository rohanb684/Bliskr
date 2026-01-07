"use client";

import { useRef } from "react";
import { Plus, X } from "lucide-react";
import Image from "next/image";
import { usePreferencesStore } from "@/store/usePreferencesStore";

const PhotosInput = () => {
  const { photos, addPhoto, removePhoto } = usePreferencesStore();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleBoxClick = () => {
    if (photos.length < 6) {
      fileInputRef.current?.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select an image file");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result as string;
      addPhoto(base64);
    };
    reader.readAsDataURL(file);

    e.target.value = "";
  };

  const slots = Array.from({ length: 6 }, (_, i) => photos[i] || null);

  return (
    <div className="w-full">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />

      <div className="grid grid-cols-3 gap-3">
        {slots.map((photo, index) => (
          <div
            key={index}
            onClick={() => !photo && handleBoxClick()}
            className={`
              relative aspect-square rounded-lg overflow-hidden
              bg-[rgba(255,255,255,0.40)] shadow-[inset_0_0_3px_0_#55128A]
              ${
                !photo
                  ? "cursor-pointer hover:bg-[rgba(255,255,255,0.60)] transition-colors"
                  : ""
              }
            `}
          >
            {photo ? (
              <>
                <Image
                  src={photo}
                  alt={`Photo ${index + 1}`}
                  fill
                  className="object-cover"
                />

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removePhoto(index);
                  }}
                  className="absolute top-1 right-1 w-6 h-6 bg-black/60 rounded-full flex-center cursor-pointer hover:bg-black/80 transition-colors"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </>
            ) : (
              <div className="w-full h-full flex-center">
                <Plus className="w-8 h-8 text-brand-color" strokeWidth={2.5} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotosInput;
