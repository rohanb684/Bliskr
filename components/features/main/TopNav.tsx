import Image from "next/image";
import logo from "@/public/images/logoBrandColour.svg";
import bell from "@/public/images/bellIcon.svg";
import TopNavBckBtn from "./TopNavBckBtn";

const TopNav = () => {
  return (
    <div className="fixed top-0 left-0 w-full flex-center bg-app-gradient z-5">
      <div className="flex items-center justify-between h-14  w-full max-w-md ">
        <div className="w-17 pl-2">
          <TopNavBckBtn />
        </div>
        <div className="w-17 flex-center">
          <Image src={logo} alt="Bliskr logo" className="w-8 " />
        </div>
        <div className="w-17 flex-center">
          <Image src={bell} alt="Bliskr logo" className="w-8 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
