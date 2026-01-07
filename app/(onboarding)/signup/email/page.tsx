"use client";
import FormInputSection from "@/components/shared/FormInputSection";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import bulb from "@/public/images/bulbIcon.svg";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useSignupStore } from "@/store/useSignupStore";
import { useState } from "react";

const page = () => {
  const router = useRouter();
  const { email, setEmail } = useSignupStore();
  const [error, setError] = useState("Something went wrong");

  const handleNext = () => {
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    router.push("/signup/password");
  };

  const InputComponent = () => {
    return (
      <>
        <Input
          type="email"
          value={email}
          placeholder="email@example.com"
          className="form-input"
          autoFocus
          onChange={(e) => {
            setEmail(e.target.value);
            setError("");
          }}
        />
        <p className="text-[11px] text-red-600 font-semibold mt-1">{error}</p>
      </>
    );
  };
  return (
    <div className="w-full px-1">
      <FormInputSection
        heading="What's your email?"
        subheading="This will be your username. We'll never share it."
        InputComponent={InputComponent}
      />
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-1">
          <Image
            src={bulb}
            width={10}
            height={10}
            className="w-6 sm:w-7"
            alt="Light Bulb Icon"
          />
          <h4 className="text-[10px] sm:text-[13px] font-semibold">
            We recommend using a private email
          </h4>
        </div>
        <button
          onClick={handleNext}
          className="w-7 h-7 sm:h-8 sm:w-8 bg-brand-color rounded-full flex items-center justify-center cursor-pointer"
        >
          <ChevronRight className="w-[80%] h-[80%]" color="white" />
        </button>
      </div>
    </div>
  );
};

export default page;
