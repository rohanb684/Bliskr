import BottomNav from "@/components/features/main/BottomNav";
import TopNav from "@/components/features/main/TopNav";
import React from "react";

const MainApplayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center relative bg-app-gradient  overflow-hidden">
      <div className="max-w-md w-full relative px-3">
        <TopNav />
        <div className="pt-14">{children}</div>
        <BottomNav />
      </div>
    </div>
  );
};

export default MainApplayout;
