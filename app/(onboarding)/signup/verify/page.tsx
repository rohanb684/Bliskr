"use client";

import { REGEXP_ONLY_DIGITS } from "input-otp";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import FormInputSection from "@/components/shared/FormInputSection";
import { useSignupStore } from "@/store/useSignupStore";
import { ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const slotClassName = `
  !rounded-[7px] !border 
  w-11 h-11
  sm:text-xl
  sm:w-14 sm:h-14
  bg-[rgba(255,255,255,0.40)] 
  shadow-[inset_0_0_3px_0_#55128A]
  data-[active=true]:border-brand-color
  data-[active=true]:ring-0
`;

const VerifyPage = () => {
  const { email } = useSignupStore();
  const router = useRouter();

  const [otp, setOtp] = useState("");

  const [timeLeft, setTimeLeft] = useState(60);
  const [canResend, setCanResend] = useState(false);

  const isOtpValid = otp.length === 6 && /^\d{6}$/.test(otp);

  useEffect(() => {
    if (timeLeft <= 0) {
      setCanResend(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  // Handle resend code
  const handleResendCode = () => {
    // Reset timer
    setTimeLeft(60);
    setCanResend(false);
    // TODO: Add your resend OTP API call here
  };

  // Handle next button click
  const handleNext = () => {
    if (!isOtpValid) return;
    router.push("/signup/gender");
  };

  return (
    <div className="w-full px-1">
      <FormInputSection
        heading="Verify your email"
        subheading="Enter the 6-digit code sent to"
        optionalsubHeading={email}
      >
        <InputOTP
          maxLength={6}
          pattern={REGEXP_ONLY_DIGITS}
          className="w-full"
          value={otp}
          onChange={(value) => setOtp(value)}
        >
          <InputOTPGroup className="flex justify-between w-full">
            <InputOTPSlot index={0} className={slotClassName} />
            <InputOTPSlot index={1} className={slotClassName} />
            <InputOTPSlot index={2} className={slotClassName} />
            <InputOTPSlot index={3} className={slotClassName} />
            <InputOTPSlot index={4} className={slotClassName} />
            <InputOTPSlot index={5} className={slotClassName} />
          </InputOTPGroup>
        </InputOTP>
      </FormInputSection>

      {/* Resend Code / Timer Section */}
      <div className="flex items-center justify-between mt-6">
        <div className="text-sm">
          {canResend ? (
            <button
              onClick={handleResendCode}
              className="text-brand-color font-semibold cursor-pointer hover:underline"
            >
              Resend Code
            </button>
          ) : (
            <p className="text-gray-600">
              Resend code in{" "}
              <span className="font-semibold text-brand-color">
                {formatTime(timeLeft)}
              </span>
            </p>
          )}
        </div>

        {/* Next Button */}
        <button
          disabled={!isOtpValid}
          onClick={handleNext}
          className={cn(
            "flex-center w-7 h-7 sm:h-8 sm:w-8 shrink-0 rounded-full transition-all duration-300",
            isOtpValid
              ? "bg-brand-color shadow-lg hover:scale-105 cursor-pointer"
              : "bg-gray-300 cursor-not-allowed"
          )}
        >
          <ChevronRight
            className="h-[80%] w-[80%]"
            color="white"
            strokeWidth={2.5}
          />
        </button>
      </div>
    </div>
  );
};

export default VerifyPage;
