import Image from "next/image";

import welcome1 from "@/public/images/welcome1.jpg";
import logo from "@/public/images/welcomeLogo.svg";
import gIcon from "@/public/images/gIcon.svg";

const WelcomPage = () => {
  return (
    <div className="w-full min-h-screen  relative bg-gray-100 ">
      <Image
        src={welcome1}
        alt="Background"
        fill
        priority
        className="object-cover object-center absolute inset-0 mix-blend-plus-darker"
        placeholder="blur"
      />

      <main className="z-3 text-white relative min-h-screen  flex flex-col items-center justify-center py-5">
        <h1 className=" text-shadow-lg text-2xl font-semibold mb-15 sm:mb-10 sm:text-3xl">
          Welcome to, <span className="text-[#FF7415]">BLISKR</span>
        </h1>
        <Image
          src={logo}
          width={50}
          height={50}
          alt="Bliskr Logo"
          className="w-[70%] sm:w-[65%]"
          priority
        />

        <div className="w-[80%] sm:w-[70%] flex flex-col gap-8 text-lg sm:text-xl">
          <button
            className=" bg-[linear-gradient(135deg,#FF7415_0%,#55128A_100%)]
    shadow-[0_4px_8px_0_#E6B0C8] w-full text-center text-white text-shadow-md rounded-sm p-3 sm:p-4 font-bold  cursor-pointer"
          >
            Create Account
          </button>
          <button
            className=" bg-[linear-gradient(135deg, rgba(255, 116, 21, 0.08) 0%, rgba(85, 18, 138, 0.08) 100%)]
    shadow-[0_4px_8px_0_#E6B0C8] w-full text-center font-bold text-white text-shadow-md rounded-sm p-3 sm:p-4 flex items-center justify-center 
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
