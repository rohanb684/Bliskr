"use client";
import CircularProceedBtn from "@/components/shared/CircularProceedBtn";
import { useRouter } from "next/navigation";

const AboutProceed = () => {
  const router = useRouter();
  const handleProceed = () => {
    router.push("/preferences/interests");
  };
  return <CircularProceedBtn handleProceed={handleProceed} />;
};

export default AboutProceed;
