"use client";

import { useState } from "react";
import ProfileCarouselSection, {
  ProfileData,
} from "@/components/shared/ProfileCarouselSection";
import UserProfileOverlay from "@/components/UserProfileOverlay";
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
  const [selectedProfile, setSelectedProfile] = useState<ProfileData | null>(
    null,
  );
  const [showOverlay, setShowOverlay] = useState(false);

  const handleProfileClick = (profile: ProfileData) => {
    setSelectedProfile(profile);
    setShowOverlay(true);
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
    setSelectedProfile(null);
  };

  return (
    <div className="w-full py-4 flex flex-col gap-6 pb-24">
      <ProfileCarouselSection
        title="Recently Online"
        profiles={RECENTLY_ONLINE}
        onProfileClick={handleProfileClick}
      />
      <ProfileCarouselSection
        title="Nearby"
        profiles={NEAR_YOU}
        onProfileClick={handleProfileClick}
      />
      <ProfileCarouselSection
        title="Perfect for you"
        profiles={NEAR_YOU}
        onProfileClick={handleProfileClick}
      />
      <ProfileCarouselSection
        title="New members"
        profiles={NEAR_YOU}
        onProfileClick={handleProfileClick}
      />

      <UserProfileOverlay
        isOpen={showOverlay}
        onClose={handleCloseOverlay}
        onReject={() => console.log("Rejected:", selectedProfile?.name)}
        onMatch={() => console.log("Matched:", selectedProfile?.name)}
        onFavorite={() => console.log("Favorited:", selectedProfile?.name)}
      />
    </div>
  );
}
