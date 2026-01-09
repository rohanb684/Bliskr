import MatchProfileCard from "@/components/shared/MatchProfileCard";
import { StaticImageData } from "next/image";

interface ProfileData {
  id: string;
  name: string;
  age: number;
  location: string;
  image: StaticImageData;
}

interface ProfileCarouselSectionProps {
  title: string;
  profiles: ProfileData[];
}

const ProfileCarouselSection = ({
  title,
  profiles,
}: ProfileCarouselSectionProps) => {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-brand-color text-lg font-semibold">{title}</h2>

      <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
        {profiles.map((profile) => (
          <div key={profile.id} className="snap-start">
            <MatchProfileCard
              id={profile.id}
              name={profile.name}
              age={profile.age}
              location={profile.location}
              image={profile.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileCarouselSection;
