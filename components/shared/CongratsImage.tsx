"use client";

import Image from "next/image";
import congratsW from "@/public/images/congoW.png";
import congratsM from "@/public/images/congoM.png";
import { useSignupStore } from "@/store/useSignupStore";

const CongratsImage = () => {
  const { gender } = useSignupStore();
  const congratsImage = gender === "Man" ? congratsM : congratsW;

  return (
    <Image
      src={congratsImage}
      alt="Congratulations Image"
      className="w-full max-w-md relative object-contain"
    />
  );
};

export default CongratsImage;
