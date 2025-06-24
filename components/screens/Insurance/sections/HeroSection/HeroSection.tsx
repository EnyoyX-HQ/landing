import React from "react";
import { Button } from "@/components/ui/button";

export const HeroSection = (): JSX.Element => {
  return (
    <div className="w-full max-w-[1512px] mx-auto h-[800px] pt-36 bg-stone-900 flex flex-col justify-start items-center gap-10 overflow-hidden">
      <div className="w-full px-36 flex flex-col justify-start items-start gap-20">
        <div className="w-full flex flex-col justify-start items-center gap-14">
          <div className="flex flex-col justify-start items-center gap-10">
            <div className="w-full max-w-[1040px] text-center">
              <span className="text-white text-6xl font-bold font-['Bricolage_Grotesque']">Quality </span>
              <span className="text-green-400 text-6xl font-bold font-['Bricolage_Grotesque']">|</span>
              <span className="text-white text-6xl font-bold font-['Bricolage_Grotesque']"> Affordable Healthcare</span>
            </div>
            <div className="w-full max-w-[708px] text-center text-white text-lg font-normal font-['Neue_Montreal'] leading-7">
              Get the care you need without breaking the bank.<br/>
              Whether you're a business or a family, EnvoyX Care makes healthcare simple, affordable, and accessible.
            </div>
          </div>
          <div className="flex justify-center items-center gap-3">
            <Button className="h-14 px-6 py-3 bg-lime-100 text-gray-900 text-base font-medium font-['Neue_Montreal'] capitalize leading-normal rounded-full hover:bg-lime-200 transition-colors">
              See our health plans
            </Button>
            <Button className="h-14 px-4 py-3 bg-stone-100 text-gray-900 text-base font-medium font-['Neue_Montreal'] capitalize rounded-full hover:bg-stone-200 transition-colors">
              Create a custom product
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};