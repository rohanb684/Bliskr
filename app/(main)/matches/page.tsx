import Link from "next/link";
import { cn } from "@/lib/utils";
import match1 from "@/public/images/matches/match1.jpg";
import match2 from "@/public/images/matches/match2.jpg";
import match3 from "@/public/images/matches/match3.jpg";
import match4 from "@/public/images/matches/match4.jpg";
import match5 from "@/public/images/matches/match5.jpg";
import MatchesCompCard from "@/components/shared/MatchesCompCard";

const TABS = [
  { id: "matches", label: "Matches" },
  { id: "favourites", label: "Favourites" },
  { id: "likes", label: "Likes You" },
];

const MATCHES_DATA = [
  { id: "1", name: "Arundhati", age: 27, location: "Kolkata", image: match1 },
  { id: "2", name: "Shamli", age: 25, location: "Gujrat", image: match2 },
  { id: "3", name: "Jiya", age: 25, location: "UP", image: match3 },
  { id: "4", name: "Priya", age: 25, location: "Kanpur", image: match4 },
];

const FAVOURITES_DATA = [
  { id: "5", name: "Sneha", age: 29, location: "Delhi", image: match1 },
  { id: "6", name: "Kavya", age: 24, location: "Bangalore", image: match2 },
];

const LIKES_DATA = [
  { id: "7", name: "Ritika", age: 26, location: "Chennai", image: match1 },
  { id: "8", name: "Meera", age: 28, location: "Kolkata", image: match2 },
  { id: "9", name: "Ananya", age: 23, location: "Pune", image: match3 },
  { id: "10", name: "Anju", age: 23, location: "Gurugram", image: match4 },
  { id: "11", name: "Maitya", age: 23, location: "Rithala", image: match5 },
];

interface MatchesPageProps {
  searchParams: Promise<{ tab?: string }>;
}

const MatchesPage = async ({ searchParams }: MatchesPageProps) => {
  const params = await searchParams;
  const currentTab = params.tab || "matches";

  const getData = () => {
    switch (currentTab) {
      case "favourites":
        return FAVOURITES_DATA;
      case "likes":
        return LIKES_DATA;
      default:
        return MATCHES_DATA;
    }
  };

  return (
    <div className="w-full py-4 pb-24">
      <div className="flex-center gap-3 sm:gap-5 mb-6">
        {TABS.map((tab) => (
          <Link
            key={tab.id}
            href={`/matches?tab=${tab.id}`}
            className={cn(
              "px-3 sm:px-4 py-2 rounded-lg  text-sm font-semibold transition-all duration-300 cursor-pointer",
              "bg-white-card",
              currentTab === tab.id
                ? "shadow-brand-color text-brand-color"
                : "shadow-light-brand-color text-gray-700"
            )}
          >
            {tab.label}
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4">
        {getData().map((profile) => (
          <MatchesCompCard
            key={profile.id}
            id={profile.id}
            name={profile.name}
            age={profile.age}
            location={profile.location}
            image={profile.image}
          />
        ))}
      </div>
    </div>
  );
};

export default MatchesPage;
