import { ChevronLeft } from "lucide-react";
import Link from "next/link";

const SigninFlowLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-app-gradient px-5 overflow-hidden">
      <div className="max-w-md w-full flex mb-7 pt-3">
        <Link href={"/welcome"} className="cursor-pointer w-fit">
          <ChevronLeft color="#55128A" className="w-5 h-5 " />
        </Link>
      </div>

      <div className="w-full max-w-md ">{children}</div>
    </div>
  );
};
export default SigninFlowLayout;
