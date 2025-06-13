import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../ui/button";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative z-[12] w-full bg-[#192517] pt-[140px] overflow-hidden">
      <div className="absolute w-full h-[556px] bottom-0 left-0">
        <img
          className="w-full h-full object-cover"
          alt="Platform visualization"
          src="/group-1410103959.png"
        />
      </div>

      <div className="container mx-auto px-[140px] mb-20">
        <div className="flex flex-col items-center gap-14 w-full">
          <div className="flex flex-col items-center gap-1 w-full">
            <p className="w-full max-w-[708px] [font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-[#95f270] text-base text-center leading-6">
              Digital Invoice financing platform for B2B businesses
            </p>

            <div className="flex flex-col items-center gap-10">
              <h1 className="w-full max-w-[901px] [font-family:'Bricolage_Grotesque',Helvetica] font-bold text-white text-[64px] text-center leading-[normal]">
                One platform. Endless opportunities.
              </h1>

              <p className="w-full max-w-[708px] [font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-white text-lg text-center leading-7">
                Building AI-powered infrastructures for B2B lending in emerging
                markets.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button className="h-14 px-6 py-3 bg-[#95f270] rounded-[100px] [font-family:'Neue_Montreal-Medium',Helvetica] font-medium text-[#081f24] text-base tracking-[-0.35px] leading-6 hover:bg-[#86e361]">
              Schedule a Call
            </Button>

            <Button
              variant="outline"
              className="h-14 px-[18px] py-3 bg-[#f8f6f2] rounded-[1000px] [font-family:'Neue_Montreal-Medium',Helvetica] font-medium text-[#081f24] text-base leading-[normal] border-none hover:bg-[#eae8e4]"
            >
              Learn more
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};