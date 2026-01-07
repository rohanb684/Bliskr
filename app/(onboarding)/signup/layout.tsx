"use client";
import { ChevronLeft } from "lucide-react";

import emailIcon from "@/public/images/signupIcons/email.svg";
import passwordIcon from "@/public/images/signupIcons/password.svg";
import otpIcon from "@/public/images/signupIcons/otp.svg";
import genderIcon from "@/public/images/signupIcons/gender.svg";
import userIcon from "@/public/images/signupIcons/name.svg";
import StepIndicator from "@/components/shared/StepIndicator";
import { usePathname, useRouter } from "next/navigation";

const FLOW_STEPS = [
  { id: "email", path: "/signup/email", icon: emailIcon },
  { id: "password", path: "/signup/password", icon: passwordIcon },
  { id: "verify", path: "/signup/verify", icon: otpIcon },
  { id: "gender", path: "/signup/gender", icon: genderIcon },
  { id: "others", path: "/signup/details", icon: userIcon },
];

const SignupFlowLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const router = useRouter();
  const currentIndex = FLOW_STEPS.findIndex((step) => step.path === pathname);
  const safeIndex = currentIndex === -1 ? 0 : currentIndex;

  const handlePrev = () => {
    const currentIndex = FLOW_STEPS.findIndex((step) => step.path === pathname);
    console.log(currentIndex);
    const safeIndex = currentIndex === -1 ? 0 : currentIndex;

    if (currentIndex === 0) return;
    else router.push(FLOW_STEPS[currentIndex - 1].path);
  };
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-app-gradient px-5 overflow-hidden">
      <div className="max-w-md w-full flex mb-7 pt-3">
        <button onClick={handlePrev} className="cursor-pointer w-fit">
          <ChevronLeft color="#55128A" className="w-5 h-5 " />
        </button>
      </div>

      <div className="w-full mb-4 max-w-md">
        <StepIndicator steps={FLOW_STEPS} currentStepIndex={safeIndex} />
      </div>

      <div className="w-full max-w-md ">{children}</div>
    </div>
  );
};
export default SignupFlowLayout;
