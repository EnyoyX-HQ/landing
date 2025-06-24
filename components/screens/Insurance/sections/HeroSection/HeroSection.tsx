import React from "react";
import { Button } from "@/components/ui/button";

export const HeroSection = (): JSX.Element => {
  return (
    <div className="w-[1512px] h-[800px] pt-36 bg-stone-900 inline-flex flex-col justify-start items-start gap-10 overflow-hidden">
      <div className="self-stretch px-36 flex flex-col justify-start items-start gap-20">
        <div className="self-stretch flex flex-col justify-start items-center gap-14">
          <div className="flex flex-col justify-start items-center gap-10">
            <div className="w-[1040px] text-center justify-start">
              <span className="text-white text-6xl font-bold font-['Bricolage_Grotesque']">Quality </span>
              <span className="text-green-400 text-6xl font-bold font-['Bricolage_Grotesque']">|</span>
              <span className="text-white text-6xl font-bold font-['Bricolage_Grotesque']"> Affordable Healthcare</span>
            </div>
            <div className="w-[708px] text-center justify-start text-white text-lg font-normal font-['Neue_Montreal'] leading-7">
              Get the care you need without breaking the bank.<br/>
              Whether you're a business or a family, EnvoyX Care makes healthcare simple, affordable, and accessible.
            </div>
          </div>
          <div className="inline-flex justify-start items-center gap-3">
            <div className="flex justify-start items-start gap-3">
              <div className="h-14 px-6 py-3 bg-lime-300 rounded-[100px] flex justify-center items-center gap-3 overflow-hidden">
                <Button className="all-[unset] justify-start text-gray-900 text-base font-medium font-['Neue_Montreal'] capitalize leading-normal">
                  See our health plans
                </Button>
              </div>
            </div>
            <div className="h-14 px-4 py-3 bg-stone-100 rounded-full flex justify-center items-center gap-3 overflow-hidden">
              <Button className="all-[unset] justify-start text-gray-900 text-base font-medium font-['Neue_Montreal'] capitalize">
                Create a custom product
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};