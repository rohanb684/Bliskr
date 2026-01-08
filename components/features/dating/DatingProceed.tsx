"use client";
import ProceedBtn from "@/components/shared/ProceedBtn";
import { usePreferencesStore } from "@/store/usePreferencesStore";
import { useRouter } from "next/navigation";

const DatingProceed = () => {
  const { datingPreference } = usePreferencesStore();
  const router = useRouter();
  const handleProceed = () => {
    if (!datingPreference) return;
    router.push("/preferences/relationship-status");
  };
  return <ProceedBtn handleProceed={handleProceed} />;
};

export default DatingProceed;
