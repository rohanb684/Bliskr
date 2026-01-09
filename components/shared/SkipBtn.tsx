import Link from "next/link";

interface SkipBtnProps {
  href: string;
}
const SkipBtn = ({ href }: SkipBtnProps) => {
  return (
    <Link
      href={href}
      className="text-white sm:text-lg sm:px-6 sm:py-3  px-4 py-2 rounded-lg hover:opacity-85 border-0 outline-0 bg-black shadow-pink-color"
    >
      Skip for now
    </Link>
  );
};

export default SkipBtn;
