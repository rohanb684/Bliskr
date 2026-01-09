"use client";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import coins from "@/public/images/coins.png";
import { usePathname, useRouter } from "next/navigation";
const TopNavBckBtn = () => {
  const pathname = usePathname();
  const router = useRouter();

  const isHomePage = pathname === "/";
  return (
    <>
      {!isHomePage ? (
        <button
          onClick={() => router.back()}
          className=" cursor-pointer p-1 -ml-2"
        >
          <ChevronLeft className="text-brand-color w-7 h-7" />
        </button>
      ) : (
        <div className="flex items-center gap-1">
          <Image src={coins} alt="Coins" className="w-8 h-8" />
          <p className="text-brand-color text-sm font-semibold">65</p>
        </div>
      )}
    </>
  );
};

export default TopNavBckBtn;
