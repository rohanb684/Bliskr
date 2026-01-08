"use client";

import ProceedBtn from "@/components/shared/ProceedBtn";
import { useRouter } from "next/navigation";

export const RelationshipProceed = () => {
  const router = useRouter();

  const handleProceed = () => {
    router.push("/preferences/tell-us-about-yourself");
  };
  return <ProceedBtn handleProceed={handleProceed} />;
};
