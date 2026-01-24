import Image from "next/image";

import welcome1 from "@/public/images/welcome1.jpg";
import logo from "@/public/images/welcomeLogo.svg";
import logoBlue from "@/public/images/welcomeLogoBlue.svg";
import gIcon from "@/public/images/gIcon.svg";
import Link from "next/link";

const WelcomPage = () => {
  return (
    <div className="w-full min-h-screen md:flex  relative bg-gray-100 ">
      <div className="absolute inset-0 md:relative min-h-screen w-full md:w-1/2">
        <Image
          src={welcome1}
          alt="Background"
          fill
          priority
          className="object-cover w-full h-full object-center mix-blend-plus-darker"
          placeholder="blur"
        />
      </div>

      <main className="z-3 md:bg-app-gradient md:text-black  text-white relative min-h-screen md:flex-1 flex flex-col items-center justify-center py-5">
        <h1 className=" text-shadow-lg text-2xl font-semibold mb-15 md:mb-0 sm:mb-10 sm:text-3xl">
          Welcome to, <span className="text-[#FF7415]">BLISKR</span>
        </h1>
        <Image
          src={logo}
          width={50}
          height={50}
          alt="Bliskr Logo"
          className="w-[70%] max-w-[300px] sm:w-[65%] md:hidden"
          priority
        />
        <Image
          src={logoBlue}
          width={50}
          height={50}
          alt="Bliskr Logo"
          className="w-[70%] sm:w-[65%] max-w-[350px] hidden md:block"
          priority
        />

        <div className="w-[80%] sm:w-[70%] flex flex-col gap-5 text-lg md:text-lg sm:text-xl">
          <Link
            href={"/signup/email"}
            className="bg-[linear-gradient(120deg,#FF7415_0%,#55128A_100%)]
    shadow-[0_4px_8px_0_#E6B0C8] w-full text-center text-white text-shadow-md rounded-sm p-3 sm:p-4 font-bold  cursor-pointer"
          >
            Create Account
          </Link>
          <Link
            href={"/signin"}
            className="bg-[linear-gradient(135deg,#0F172A_0%,#334155_100%)]
    shadow-[0_4px_8px_0_#E6B0C8] w-full text-center text-white text-shadow-md rounded-sm p-3 sm:p-4 font-bold  cursor-pointer"
          >
            Sign In with email
          </Link>
          <button
            className=" bg-[linear-gradient(135deg, rgba(255, 116, 21, 0.08) 0%, rgba(85, 18, 138, 0.08) 100%)]
    shadow-[0_4px_8px_0_#E6B0C8] md:bg-gray-200 w-full text-center font-bold text-white md:text-gray-600 text-shadow-md rounded-sm p-3 sm:p-4 flex items-center justify-center 
    gap-2 cursor-pointer"
          >
            <Image
              src={gIcon}
              alt="Google Icon"
              width={25}
              height={25}
              quality={30}
            />
            Sign In with Google
          </button>
        </div>
      </main>
    </div>
  );
};

export default WelcomPage;
