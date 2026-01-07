"use client";

import { motion } from "framer-motion";
import congratsW from "@/public/images/congoW.png";
import congratsM from "@/public/images/congoM.png";
import congoText from "@/public/images/congratsText.png";
import Image from "next/image";
import { useSignupStore } from "@/store/useSignupStore";
import ProceedBtn from "@/components/shared/ProceedBtn";
import { useRouter } from "next/navigation";

const CongratsPage = () => {
  const { gender } = useSignupStore();
  const router = useRouter();
  const congratsImage = gender === "Man" ? congratsM : congratsW;

  const handleProceed = () => {
    router.push("/preferences/photos");
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-app-gradient px-5 overflow-hidden">
      <div className="max-w-md w-full px-1 flex py-5 flex-col items-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 0.6,
          }}
        >
          <Image
            src={congoText}
            alt="Congrats Text Image"
            className="w-full max-w-[400px]"
            priority
          />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="text-center font-semibold text-brand-color text-xl -mt-4"
        >
          Nice!
          <br />
          Your basic details are set.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="relative w-full mt-7"
        >
          <Image
            src={congratsImage}
            alt="Congratulations Image"
            className="w-full max-w-md relative object-contain"
          />
          <div className="w-full bg-pink-gradient px-2 py-3 rounded-md shadow-brand-color">
            <p className="text-brand-color font-semibold text-center">
              Now let's tune your preferences and open the door to more exciting
              connections.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.3 }}
          className="w-full flex-center"
        >
          <ProceedBtn handleProceed={handleProceed} />
        </motion.div>
      </div>
    </div>
  );
};

export default CongratsPage;
