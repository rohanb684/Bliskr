"use client";

import { useEffect, useState } from "react";

interface ProfileCompletionIndicatorProps {
  percentage: number;
}

const ProfileCompletionIndicator = ({
  percentage,
}: ProfileCompletionIndicatorProps) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedPercentage(percentage);
    }, 100);
    return () => clearTimeout(timer);
  }, [percentage]);

  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (animatedPercentage / 100) * circumference;

  return (
    <div
      className="flex items-center gap-4 p-4 rounded-2xl"
      style={{
        background: "linear-gradient(90deg, #D5E5FE 0%, #FEEFEB 100%)",
      }}
    >
      <div className="relative w-16 h-16 shrink-0">
        <svg
          className="w-full h-full -rotate-90"
          viewBox="0 0 44 44"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="progressGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#FF7415" />
              <stop offset="100%" stopColor="#55128A" />
            </linearGradient>
          </defs>
          <circle
            cx="22"
            cy="22"
            r="20"
            fill="none"
            stroke="#E5E7EB"
            strokeWidth="4"
          />
          <circle
            cx="22"
            cy="22"
            r="20"
            fill="none"
            stroke="url(#progressGradient)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            style={{
              transition: "stroke-dashoffset 1s ease-out",
            }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-bold bg-linear-to-br from-[#FF7415] to-brand-color bg-clip-text text-transparent">
            {Math.round(animatedPercentage)}%
          </span>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-medium text-gray-700">
          Your Profile is
        </span>
        <span className="text-lg font-bold bg-linear-to-r from-[#FF7415] to-brand-color bg-clip-text text-transparent">
          {percentage}% Complete
        </span>
      </div>
    </div>
  );
};

export default ProfileCompletionIndicator;
