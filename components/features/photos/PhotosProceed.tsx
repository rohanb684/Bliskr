"use client";

import { useRouter } from "next/navigation";
import { usePreferencesStore } from "@/store/usePreferencesStore";
import ProceedBtn from "@/components/shared/ProceedBtn";

const PhotosProceed = () => {
  const router = useRouter();
  const { photos } = usePreferencesStore();

  const canProceed = photos.length >= 1;

  const handleProceed = () => {
    if (!canProceed) return;
    router.push("/preferences/date");
  };

  return (
    <div className="w-full flex-center">
      <ProceedBtn handleProceed={handleProceed} />
    </div>
  );
};

export default PhotosProceed;
