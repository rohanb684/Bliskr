"use client";
import FormInputSection from "@/components/shared/FormInputSection";
import Image from "next/image";
import manImage from "@/public/images/gender/man.png";
import womanImage from "@/public/images/gender/woman.png";
import othersImage from "@/public/images/gender/others.png";
import ntsImage from "@/public/images/gender/nts.png";
import { useState } from "react";
import bulb from "@/public/images/bulbIcon.svg";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useSignupStore } from "@/store/useSignupStore";

const genderData = [
  { label: "Man", image: manImage },
  { label: "Woman", image: womanImage },
  { label: "Others", image: othersImage },
  { label: "Prefer not to say", image: ntsImage },
];

const GenderPage = () => {
  const [selectedGender, setSelectedGender] = useState("");
  const router = useRouter();
  const { setGender } = useSignupStore();

  const handleNext = () => {
    if (!selectedGender) return;
    setGender(selectedGender);
    router.push("/signup/details");
  };
  return (
    <div className="w-full px-1 pb-5">
      <FormInputSection
        heading="What's Your Gender? "
        subheading="You cannot change this later"
      >
        <div className="grid grid-cols-2 gap-6 w-full max-w-[380px] ">
          {genderData.map((g, i) => (
            <div
              key={i}
              className="flex flex-col justify-center items-center gap-2 w-full "
            >
              <div
                onClick={() => setSelectedGender(g.label)}
                className={cn(
                  "perspective-[1000px]",

                  "bg-[rgba(255,255,255,0.40)] overflow-hidden group transition-all duration-300 shadow-[0_4px_8px_0_transparent,0_0_3px_0_#55128A_inset] w-full flex items-end justify-center rounded-sm cursor-pointer",
                  g.label === selectedGender &&
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
      </FormInputSection>

      <div className="mt-4 w-full sm:mt-7 flex-col gap-2 flex-center">
        <p className="text-[11px]  sm:text-[13px] font-semibold flex items-center gap-1.5 overflow-hidden">
          <Image
            src={bulb}
            width={10}
            height={10}
            className="w-6 sm:w-7 "
            alt="Light Bulb Icon"
          />
          Your Gender will be displayed on your profile
        </p>
        <button
          type="button"
          onClick={handleNext}
          className="text-center text-sm sm:text-lg font-semibold bg-proceed-btn text-white px-4 py-2 rounded-md hover:opacity-90 cursor-pointer"
          disabled={!selectedGender}
        >
          Proceed
        </button>
      </div>
    </div>
  );
};

export default GenderPage;
