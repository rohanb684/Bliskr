"use client";
import { usePreferencesStore } from "@/store/usePreferencesStore";
import manImage from "@/public/images/gender/man.png";
import womanImage from "@/public/images/gender/woman.png";
import othersImage from "@/public/images/gender/others.png";
import ntsImage from "@/public/images/gender/nts.png";
import { cn } from "@/lib/utils";
import Image from "next/image";
const genderData = [
  { label: "Man", image: manImage },
  { label: "Woman", image: womanImage },
  { label: "Others", image: othersImage },
  { label: "Prefer not to say", image: ntsImage },
];

const DatingInput = () => {
  const { datingPreference, setDatingPreference } = usePreferencesStore();
  return (
    <div className="grid grid-cols-2 gap-6 w-full max-w-[380px] ">
      {genderData.map((g, i) => (
        <div
          key={i}
          className="flex flex-col justify-center items-center gap-2 w-full "
        >
          <div
            onClick={() => setDatingPreference(g.label)}
            className={cn(
              "perspective-[1000px]",

              "bg-[rgba(255,255,255,0.40)] overflow-hidden group transition-all duration-300 shadow-[0_4px_8px_0_transparent,0_0_3px_0_#55128A_inset] w-full flex items-end justify-center rounded-sm cursor-pointer",
              g.label === datingPreference &&
                "shadow-[0_4px_8px_0_#55128A,0_0_3px_0_#55128A_inset]"
            )}
          >
            <Image
              src={g.image}
              alt={g.label}
              className={cn(
                "w-full transition-transform duration-500 ease-out",
                "group-hover:transform-[rotateX(12deg)_scale(1.1)_translateY(10px)]"
              )}
            />
          </div>
          <h2 className="text-center text-sm font-bold">{g.label}</h2>
        </div>
      ))}
    </div>
  );
};

export default DatingInput;
