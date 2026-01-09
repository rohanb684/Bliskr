"use client";

import CircularProceedBtn from "@/components/shared/CircularProceedBtn";
import { useRouter } from "next/navigation";

const InterestProceed = () => {
  const router = useRouter();

  const handleProceed = () => {
    router.push("/preferences/few-more-details");
  };

  return <CircularProceedBtn handleProceed={handleProceed} />;
};

export default InterestProceed;
