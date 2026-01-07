"use client";
import lockIcon from "@/public/images/lockIcon.svg";
import Image from "next/image";
import FormInputSection from "@/components/shared/FormInputSection";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Check, ChevronRight, Eye, EyeOff } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

// 1. Define the types (What data can this component accept?)
interface InputComponentProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string; // Good practice to make this dynamic too
}

// 2. Destructure the props in the function arguments
const InputComponent = ({
  value,
  onChange,
  placeholder = "Enter password",
}: InputComponentProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <InputGroup
        className="w-full bg-[rgba(255,255,255,0.40)] has-[[data-slot=input-group-control]:focus-visible]:ring-0
       has-[[data-slot=input-group-control]:focus-visible]:border-brand-color
        shadow-[inset_0_0_3px_0_#55128A] border border-transparent placeholder:text-muted-foreground
         focus-within:border-brand-color focus-within:ring-0 focus-within:ring-offset-0 
         focus-within:outline-none transition-colors duration-200 focus-visible:ring-0"
      >
        <InputGroupInput
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoFocus
          type={showPassword ? "text" : "password"}
          className="bg-transparent border-0 shadow-none focus:shadow-none focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:shadow-none"
        />

        <InputGroupAddon>
          <Image
            src={lockIcon}
            width={12}
            height={12}
            alt="Lock Icon"
            className="w-5"
          />
        </InputGroupAddon>

        <InputGroupAddon align="inline-end">
          <button
            type="button"
            className="w-5 h-5 text-brand-color focus:outline-none focus-visible:outline-none"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? (
              <EyeOff className="w-full h-full " />
            ) : (
              <Eye className="w-full h-full" />
            )}
          </button>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
};
const REQUIREMENTS = [
  {
    key: "eightChar",
    label: "At least 8 characters",
  },
  {
    key: "upperLower",
    label: "One uppercase and lowercase character",
  },
  {
    key: "numberChar",
    label: "At least one number and special character",
  },
] as const;

const PasswordPage = () => {
  // Store the actual password string to validate it
  const [password, setPassword] = useState("");
  const router = useRouter();

  // Track validation states
  const [validations, setValidations] = useState({
    eightChar: false,
    upperLower: false,
    numberChar: false,
  });

  // 2. Real-time Validation Function
  useEffect(() => {
    setValidations({
      eightChar: password.length >= 8,
      upperLower: /[a-z]/.test(password) && /[A-Z]/.test(password),
      // Regex checks for at least one digit AND one special char
      numberChar:
        /\d/.test(password) && /[!@#$%^&*(),.?":{}|<>]/.test(password),
    });
  }, [password]);

  // Derived state: Are all conditions met?
  const isFormValid = Object.values(validations).every(Boolean);

  const handleNext = () => {
    if (!isFormValid) return;

    router.push("/signup/verify");
  };

  return (
    <div className="w-full px-1">
      <FormInputSection
        heading="Create a secure password"
        subheading="Use a strong password to keep your account safe"
      >
        <InputComponent
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
      </FormInputSection>

      <div className="flex justify-between  mt-6">
        <div className="flex flex-col gap-3">
          {REQUIREMENTS.map((req) => {
            const isMet = validations[req.key as keyof typeof validations];

            return (
              <p
                key={req.key}
                className="flex items-center gap-1.5 text-xs font-bold text-gray-900"
              >
                <span
                  className={cn(
                    "flex h-5 w-5 items-center justify-center rounded-full border transition-colors duration-300",
                    isMet
                      ? "border-amber-500 bg-amber-500 text-white"
                      : "border-gray-300 bg-white text-transparent"
                  )}
                >
                  <Check className="h-3 w-3" strokeWidth={4} />
                </span>
                <span
                  className={cn(
                    "transition-opacity",
                    isMet ? "opacity-100" : "opacity-70"
                  )}
                >
                  {req.label}
                </span>
              </p>
            );
          })}
        </div>

        <button
          disabled={!isFormValid}
          onClick={handleNext}
          className={cn(
            "flex-center w-7 h-7 sm:h-8 sm:w-8 shrink-0  rounded-full transition-all duration-300",
            isFormValid
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

export default PasswordPage;
