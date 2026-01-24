"use client";
import FormInputSection from "@/components/shared/FormInputSection";
import lockIcon from "@/public/images/lockIcon.svg";
import Image from "next/image";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Eye, EyeOff, Mail } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

interface PasswordInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const PasswordInput = ({
  value,
  onChange,
  placeholder = "Enter password",
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <InputGroup
      className="w-full sm:h-10 bg-[rgba(255,255,255,0.40)] has-[[data-slot=input-group-control]:focus-visible]:ring-0
       has-[[data-slot=input-group-control]:focus-visible]:border-brand-color
        shadow-[inset_0_0_3px_0_#55128A] border border-transparent placeholder:text-muted-foreground
         focus-within:border-brand-color focus-within:ring-0 focus-within:ring-offset-0 
         focus-within:outline-none transition-colors duration-200 focus-visible:ring-0"
    >
      <InputGroupInput
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={showPassword ? "text" : "password"}
        className="w-full bg-transparent border-0 shadow-none focus:shadow-none focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:shadow-none"
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
  );
};

const SigninPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    return email.includes("@") && email.includes(".");
  };

  const handleLogin = () => {
    setError("");
    if (!email) {
      setError("Please enter your email address");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (!password) {
      setError("Please enter your password");
      return;
    }

    // TODO: Call your backend API for authentication
    // On error from server, show generic error for security
    // Example: setError("Invalid email or password");

    console.log("Logging in with:", { email, password });
  };

  return (
    <div className="w-full px-1">
      {/* Email Input Section */}
      <FormInputSection
        heading="Sign in to your account"
        subheading="Enter your credentials to continue"
      >
        <div className="w-full">
          <h3 className="text-[#333] font-semibold text-[12px] sm:text-sm mb-1">
            Email
          </h3>
          <InputGroup
            className="w-full sm:h-10 bg-[rgba(255,255,255,0.40)] has-[[data-slot=input-group-control]:focus-visible]:ring-0
       has-[[data-slot=input-group-control]:focus-visible]:border-brand-color
        shadow-[inset_0_0_3px_0_#55128A] border border-transparent placeholder:text-muted-foreground
         focus-within:border-brand-color focus-within:ring-0 focus-within:ring-offset-0 
         focus-within:outline-none transition-colors duration-200 focus-visible:ring-0"
          >
            <InputGroupInput
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
              placeholder="email@example.com"
              type="email"
              autoFocus
              className="w-full bg-transparent border-0 shadow-none focus:shadow-none focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:shadow-none"
            />

            <InputGroupAddon>
              <Mail className="w-5 h-5 text-brand-color" />
            </InputGroupAddon>
          </InputGroup>
        </div>
      </FormInputSection>

      {/* Password Input Section */}
      <div className="mt-5">
        <h3 className="text-[#333] font-semibold text-[12px] sm:text-sm mb-1">
          Password
        </h3>
        <PasswordInput
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError("");
          }}
        />
      </div>

      {/* Error Message */}
      {error && (
        <p className="text-[11px] text-red-600 font-semibold mt-3 text-center">
          {error}
        </p>
      )}

      {/* Login Button */}
      <div className="flex flex-col items-center mt-8 gap-4">
        <button
          type="button"
          onClick={handleLogin}
          className="shadow-pink-color text-center text-[16px] sm:text-lg font-semibold bg-proceed-btn text-white px-4 w-[64%] max-w-sm py-2 sm:py-3 rounded-md hover:opacity-90 cursor-pointer"
        >
          Login
        </button>

        <p className="text-[12px] sm:text-sm text-[#333]">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup/email"
            className="text-brand-color font-semibold hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SigninPage;
