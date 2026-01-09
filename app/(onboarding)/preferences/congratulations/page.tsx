"use client";

import { motion } from "framer-motion";
import congoDating from "@/public/images/congoDating.png";
import congoText from "@/public/images/congratsText.png";
import Image from "next/image";

import { useRouter } from "next/navigation";

const CongratsPage = () => {
  const router = useRouter();

  const handleProceed = () => {
    router.push("/preferences/photos");
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center   overflow-hidden">
      <div className="max-w-md w-full px-1  flex py-5 flex-col items-center">
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
            className="w-full max-w-[400px] mt-5"
            priority
          />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="text-center font-semibold text-brand-color text-xl md:text-2xl md:-mt-6 xl:-mt-8 -mt-4"
        >
          Great!
          <br />
          Now let's get dating
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="relative w-full mt-7 flex-col flex-center"
        >
          <Image
            src={congoDating}
            alt="Congratulations Image"
            className="w-full max-w-md xl:w-[80%] -mt-5 relative object-contain"
          />
          <div className="w-full sm:w-[90%] py-4 mt-4 rounded-md bg-white-card shadow-brand-color flex-col gap-1 flex-center">
            <p className="text-black text-sm sm:text-lg">
              Pay Once . Lifetime Access
            </p>
            <h2 className="text-sm sm:text-lg  text-brand-color font-normal flex items-center gap-2">
              Joining Fee:{" "}
              <span className="font-black text-xl sm:text-2xl">$5</span>{" "}
              <span className="font-semibold line-through text-gray-500 sm:text-xl text-lg">
                $10
              </span>
            </h2>
            <h2 className="text-sm sm:text-lg text-brand-color font-normal flex items-center gap-2">
              First Recharge:{" "}
              <span className="font-black sm:text-2xl text-xl">$10</span>{" "}
              <span className="  text-sm">80 coins</span>
            </h2>
            <p className="font-semibold text-center text-[12px] sm:text-sm">
              Join the exclusive community today.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.3 }}
          className="w-full flex-center"
        >
          <button
            className="shadow-pink-color text-center  text-[16px] 
            sm:text-lg font-semibold bg-proceed-btn text-white px-4 
            w-full py-2 sm:py-3 rounded-md hover:opacity-90 
            cursor-pointer mt-7 sm:w-full"
          >
            Join BLISKR for $15{" "}
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default CongratsPage;
