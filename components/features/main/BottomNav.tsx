"use client";
import exploreA from "@/public/images/bottomnav/exploreA.svg";
import exploreI from "@/public/images/bottomnav/exploreI.svg";
import heartA from "@/public/images/bottomnav/heartA.svg";
import heartI from "@/public/images/bottomnav/heartI.svg";
import chatsA from "@/public/images/bottomnav/chatsA.svg";
import chatsI from "@/public/images/bottomnav/chatsI.svg";
import coinsA from "@/public/images/bottomnav/coinsA.svg";
import coinsI from "@/public/images/bottomnav/coinsI.svg";
import profileA from "@/public/images/bottomnav/profileA.svg";
import profileI from "@/public/images/bottomnav/profileI.svg";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

const menuItems = [
  {
    activeImage: exploreA,
    InactiveImage: exploreI,
    path: "/",
    name: "Discover",
  },
  {
    activeImage: heartA,
    InactiveImage: heartI,
    path: "/matches",
    name: "Matches",
  },
  { activeImage: chatsA, InactiveImage: chatsI, path: "/chat", name: "Chats" },
  { activeImage: coinsA, InactiveImage: coinsI, path: "/coins", name: "Coins" },
  {
    activeImage: profileA,
    InactiveImage: profileI,
    path: "/profile",
    name: "Profile",
  },
];

const BottomNav = () => {
  const pathname = usePathname();
  return (
    <div className="fixed left-0 bottom-0 w-full flex-center z-5">
      <div className=" flex items-center px-6 justify-between rounded-tl-4xl rounded-tr-4xl  w-full h-18 bg-[#FAFAFA] shadow-[0_0_4px_0_#55128A]  max-w-md ">
        {menuItems.map((m, i) => {
          const isCurrentPath = pathname === m.path;

          return (
            <Link href={m.path} key={i} className="flex-center flex-col gap-1">
              <Image
                src={isCurrentPath ? m.activeImage : m.InactiveImage}
                alt={`${m.name} Icon`}
                className="w-7"
              />
              <h3
                className={cn(
                  "text-[10px] text-[#333] font-normal",
                  isCurrentPath && "text-brand-color"
                )}
              >
                {m.name}
              </h3>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;
