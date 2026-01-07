"use client";
import { useState } from "react";
import Image from "next/image";
import FormInputSection from "@/components/shared/FormInputSection";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { ChevronRight, Search } from "lucide-react";
import bulb from "@/public/images/bulbIcon.svg";

import nameIcon from "@/public/images/nameIcon.svg";
import mapPin from "@/public/images/mapPinIcon.svg";
import { useRouter } from "next/navigation";

const inputGroupClassName = `w-full sm:h-12 bg-[rgba(255,255,255,0.40)] has-[[data-slot=input-group-control]:focus-visible]:ring-0
  has-[[data-slot=input-group-control]:focus-visible]:border-brand-color
  shadow-[inset_0_0_3px_0_#55128A] border border-transparent placeholder:text-muted-foreground
  focus-within:border-brand-color focus-within:ring-0 focus-within:ring-offset-0 
  focus-within:outline-none transition-colors duration-200 focus-visible:ring-0`;

// Sample cities list
const CITIES = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Kolkata",
  "Pune",
  "Ahmedabad",
  "Jaipur",
  "Lucknow",
  "Surat",
  "Kanpur",
  "Nagpur",
  "Indore",
  "Thane",
  "Bhopal",
  "Visakhapatnam",
  "Patna",
  "Vadodara",
  "Ghaziabad",
];

const DetailsPage = () => {
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [city, setCity] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const router = useRouter();

  const filteredCities = CITIES.filter((c) =>
    c.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCitySelect = (selectedCity: string) => {
    setCity(selectedCity);
    setIsDrawerOpen(false);
    setSearchQuery("");
  };

  const handleNext = () => {
    router.push("/congratulations");
  };

  return (
    <div className="w-full px-1 pb-5">
      <div className="w-full flex flex-col gap-10">
        {/* Name Section */}
        <FormInputSection
          heading="What should people call you?"
          subheading="Enter your first name or nickname"
        >
          <div className="flex flex-col gap-4 w-full">
            {/* First Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-gray-700">
                First Name <span className="text-red-500">*</span>
              </label>
              <InputGroup className={inputGroupClassName}>
                <InputGroupInput
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Enter your first name"
                  className="w-full bg-transparent border-0 shadow-none focus:shadow-none focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:shadow-none"
                />
                <InputGroupAddon>
                  <Image
                    src={nameIcon}
                    width={16}
                    height={16}
                    alt="Name Icon"
                    className="w-5 h-5 sm:h-6 sm:w-6"
                  />
                </InputGroupAddon>
              </InputGroup>
              <p className="text-[13px] ">
                <span className="text-red-500">*</span>This is what people will
                see
              </p>
            </div>

            {/* Surname */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-gray-700">
                Surname
              </label>
              <InputGroup className={inputGroupClassName}>
                <InputGroupInput
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                  placeholder="Enter your surname"
                  className="w-full bg-transparent border-0 shadow-none focus:shadow-none focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:shadow-none"
                />
                <InputGroupAddon>
                  <Image
                    src={nameIcon}
                    width={16}
                    height={16}
                    alt="Name Icon"
                    className="w-5 h-5 sm:h-6 sm:w-6"
                  />
                </InputGroupAddon>
              </InputGroup>
            </div>
          </div>
        </FormInputSection>

        <FormInputSection
          heading="Where do you live?"
          subheading="We'll show you people nearby"
        >
          <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
            <DrawerTrigger asChild>
              {/* <div className="w-full "> */}
              <InputGroup className={inputGroupClassName}>
                <InputGroupInput
                  value={city}
                  placeholder="Select your city"
                  readOnly
                  className="w-full bg-transparent border-0 shadow-none cursor-pointer focus:shadow-none focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:shadow-none"
                />
                <InputGroupAddon>
                  <Image
                    src={mapPin}
                    width={16}
                    height={16}
                    alt="Location Icon"
                    className="w-5 h-5 sm:h-6 sm:w-6"
                  />
                </InputGroupAddon>
              </InputGroup>
              {/* </div> */}
            </DrawerTrigger>

            <DrawerContent className="max-h-[70vh] inset-x-auto! left-1/2! -translate-x-1/2! max-w-md w-[calc(100%-2rem)] rounded-t-2xl">
              <DrawerHeader className="pb-2">
                <DrawerTitle>Select your city</DrawerTitle>
              </DrawerHeader>

              {/* Search Input */}
              <div className="px-4 pb-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search cities..."
                    className="pl-10"
                    autoFocus
                  />
                </div>
              </div>

              <div className="px-4 pb-6 overflow-y-auto max-h-[50vh]">
                <div className="flex flex-col gap-1">
                  {filteredCities.length > 0 ? (
                    filteredCities.map((c) => (
                      <button
                        key={c}
                        onClick={() => handleCitySelect(c)}
                        className={`text-left px-3 py-2.5 rounded-md transition-colors hover:bg-gray-100 ${
                          city === c
                            ? "bg-brand-color/10 text-brand-color font-semibold"
                            : "text-gray-700"
                        }`}
                      >
                        {c}
                      </button>
                    ))
                  ) : (
                    <p className="text-center text-gray-500 py-4">
                      No cities found
                    </p>
                  )}
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </FormInputSection>
      </div>

      <div className="w-full flex items-center justify-between mt-5">
        <div className="flex items-center gap-1">
          <Image
            src={bulb}
            width={10}
            height={10}
            className="w-6 sm:w-7"
            alt="Light Bulb Icon"
          />
          <h4 className="text-[12px] sm:text-[13px] font-semibold">
            You can change this later
          </h4>
        </div>
        <button
          onClick={handleNext}
          className="w-7 h-7 shrink-0 sm:h-8 sm:w-8 bg-brand-color rounded-full flex items-center justify-center cursor-pointer"
        >
          <ChevronRight className="w-[80%] h-[80%]" color="white" />
        </button>
      </div>
    </div>
  );
};

export default DetailsPage;
