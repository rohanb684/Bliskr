"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";

type Step = {
  id: string;
  path: string;
  icon: StaticImageData;
};

interface StepIndicatorProps {
  steps: Step[];
  currentStepIndex: number;
}

export default function StepIndicator({
  steps,
  currentStepIndex,
}: StepIndicatorProps) {
  return (
    <div className="flex items-center gap-2">
      {steps.map((step, index) => {
        const isActive = index === currentStepIndex;
        const isPast = index < currentStepIndex;

        return (
          <motion.div
            key={step.id}
            layout
            initial={false}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 30,
              duration: 0.3,
            }}
            className={cn(
              "relative flex items-center justify-center rounded-full transition-colors",
              isActive
                ? "h-10 w-10 border-2 border-brand-color bg-white shadow-xl"
                : isPast
                ? "h-2 w-2 bg-brand-color"
                : "h-2 w-2 bg-gray-400"
            )}
          >
            {isActive && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="relative h-[65%] w-[65%]"
              >
                <Image
                  src={step.icon}
                  alt={step.id}
                  fill
                  className="object-contain"
                />
              </motion.div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
