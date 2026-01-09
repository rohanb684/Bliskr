import ProfileCarouselSection from "@/components/shared/ProfileCarouselSection";
import match1 from "@/public/images/matches/match1.jpg";

const RECENTLY_ONLINE = [
  { id: "1", name: "Arundhati", age: 27, location: "Kolkata", image: match1 },
  { id: "2", name: "Priya", age: 25, location: "Mumbai", image: match1 },
  { id: "3", name: "Sneha", age: 29, location: "Delhi", image: match1 },
  { id: "4", name: "Kavya", age: 24, location: "Bangalore", image: match1 },
  { id: "5", name: "Ritika", age: 26, location: "Chennai", image: match1 },
];

const NEAR_YOU = [
  { id: "6", name: "Meera", age: 28, location: "Kolkata", image: match1 },
  { id: "7", name: "Ananya", age: 23, location: "Kolkata", image: match1 },
  { id: "8", name: "Diya", age: 26, location: "Kolkata", image: match1 },
];

export default function Home() {
  return (
    <div className="w-full py-4 flex flex-col gap-6 pb-24">
      <ProfileCarouselSection
        title="Recently Online"
        profiles={RECENTLY_ONLINE}
      />
      <ProfileCarouselSection title="Nearby" profiles={NEAR_YOU} />
      <ProfileCarouselSection title="Perfect for you" profiles={NEAR_YOU} />
      <ProfileCarouselSection title="New members" profiles={NEAR_YOU} />
    </div>
  );
}
