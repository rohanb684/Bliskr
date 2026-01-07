import PhotosInput from "@/components/features/photos/PhotosInput";
import PhotosProceed from "@/components/features/photos/PhotosProceed";
import FormInputSection from "@/components/shared/FormInputSection";
import { Check, X } from "lucide-react";
const PhotosPage = () => {
  return (
    <div className="pb-4">
      <FormInputSection
        heading="Add your best photos"
        subheading="Profiles with photos get 10x more attention"
      >
        <PhotosInput />
      </FormInputSection>

      <div className="w-full flex-center text-[13px] mt-4 font-semibold text-black">
        <div className="flex flex-col gap-3 w-fit">
          <p className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-amber-500 flex-center ">
              <Check color="white" className="w-[60%] h-[60%]" />
            </span>
            Clear Face Shot
          </p>
          <p className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-amber-500 flex-center ">
              <Check color="white" className="w-[60%] h-[60%]" />
            </span>
            Good Lighting
          </p>
          <p className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-white flex-center ">
              <X color="red" className="w-[60%] h-[60%]" />
            </span>
            No group photos
          </p>
        </div>
      </div>
      <PhotosProceed />
      <div className="w-full flex-center">
        <button
          className="shadow-pink-color text-center mt-4 text-[16px]
        sm:text-lg font-semibold bg-black text-white
         px-4 w-[64%] max-w-sm py-2 sm:py-3 rounded-md hover:opacity-80 
         cursor-pointer"
        >
          Add Details later
        </button>
      </div>
    </div>
  );
};

export default PhotosPage;
