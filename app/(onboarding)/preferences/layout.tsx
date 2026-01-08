"use client";
import { ChevronLeft } from "lucide-react";

import camera from "@/public/images/preferenceIcons/camera.svg";
import heart from "@/public/images/preferenceIcons/date.svg";
import ring from "@/public/images/preferenceIcons/rltStatus.svg";
import message from "@/public/images/preferenceIcons/about.svg";
import guitar from "@/public/images/preferenceIcons/interests.svg";
import eyeImage from "@/public/images/preferenceIcons/fewMore.svg";
import childrenIm from "@/public/images/preferenceIcons/children.svg";
import rlg from "@/public/images/preferenceIcons/religious.svg";
import drink from "@/public/images/preferenceIcons/drink.svg";
import smoke from "@/public/images/preferenceIcons/smoke.svg";
import drugs from "@/public/images/preferenceIcons/drugs.svg";
import into from "@/public/images/preferenceIcons/into.svg";
import fantasy from "@/public/images/preferenceIcons/fantasies.svg";

import StepIndicator from "@/components/shared/StepIndicator";
import { usePathname, useRouter } from "next/navigation";

const FLOW_STEPS = [
  { id: "photos", path: "/preferences/photos", icon: camera },
  { id: "date", path: "/preferences/dating-preference", icon: heart },
  { id: "relationship", path: "/preferences/relationship-status", icon: ring },
  { id: "about", path: "/preferences/about", icon: message },
  { id: "interests", path: "/preferences/interests", icon: guitar },
  { id: "fewmore", path: "/preferences/few-more-details", icon: eyeImage },
  { id: "children", path: "/preferences/children", icon: childrenIm },
  { id: "religiousbeliefs", path: "/preferences/religious-beliefs", icon: rlg },
  { id: "drink", path: "/preferences/drink", icon: drink },
  { id: "smoke", path: "/preferences/smoke", icon: smoke },
  { id: "drugs", path: "/preferences/drugs", icon: drugs },
  {
    id: "typeofrelationship",
    path: "/preferences/type-of-relationship",
    icon: heart,
  },
  {
    id: "compatible-matches",
    path: "/preferences/compatible-matches",
    icon: into,
  },
  { id: "fantasies", path: "/preferences/fantasies", icon: fantasy },
];

const PreferencesFlowLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const router = useRouter();
  const currentIndex = FLOW_STEPS.findIndex((step) => step.path === pathname);
  const safeIndex = currentIndex === -1 ? 0 : currentIndex;

  const handlePrev = () => {
    const currentIndex = FLOW_STEPS.findIndex((step) => step.path === pathname);

    const safeIndex = currentIndex === -1 ? 0 : currentIndex;

    if (safeIndex === 0) return;
    else router.push(FLOW_STEPS[safeIndex - 1].path);
  };
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-app-gradient px-5 overflow-hidden">
      <div className="max-w-md w-full flex mb-7 pt-3">
        {FLOW_STEPS[0].path !== pathname ? (
          <button onClick={handlePrev} className="cursor-pointer w-fit">
            <ChevronLeft color="#55128A" className="w-5 h-5 " />
          </button>
        ) : (
          <button
            onClick={handlePrev}
            className="cursor-pointer w-5 h-5"
          ></button>
        )}
      </div>

      <div className="w-full mb-4 max-w-md">
        <StepIndicator steps={FLOW_STEPS} currentStepIndex={safeIndex} />
      </div>
      <div className="w-full px-1 max-w-md">{children}</div>
    </div>
  );
};

export default PreferencesFlowLayout;
