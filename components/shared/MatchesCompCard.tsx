import Image, { StaticImageData } from "next/image";
import match1 from "@/public/images/matches/match1.jpg";
import oLocation from "@/public/images/orangeLocation.svg";
import Link from "next/link";
import gift from "@/public/images/gift.png";

interface MatchesCompCardProps {
  id?: string;
  name?: string;
  age?: number;
  location?: string;
  image?: StaticImageData;
}

const MatchesCompCard = ({
  id = "1",
  name = "Arundhati",
  age = 27,
  location = "Kolkata",
  image = match1,
}: MatchesCompCardProps) => {
  return (
    <Link
      href={`/profile/${id}`}
      className="flex flex-col gap-2 w-full shrink-0 group"
    >
      <div className="w-full overflow-hidden shadow-light-brand-color rounded-lg">
        <Image
          className="w-full object-center object-cover h-[52vw] max-h-60"
          src={image}
          alt="Profile Image"
        />
      </div>
      <div className="flex w-full rounded-md shadow-light-brand-color justify-between items-center bg-white p-2">
        <div className="flex flex-col">
          <h2 className="text-brand-color font-normal text-sm">
            {name}, <span className="text-amber-500">{age}</span>
          </h2>
          <h3 className="flex items-center text-brand-color font-normal text-sm -ml-1">
            <span>
              <Image src={oLocation} alt="Location icon" className="w-5" />
            </span>
            {location}
          </h3>
        </div>

        <div
          role="button"
          className="flex-center text-brand-color cursor-pointer"
        >
          <Image src={gift} alt="Gift Image" className="w-6" />
        </div>
      </div>
    </Link>
  );
};

export default MatchesCompCard;
