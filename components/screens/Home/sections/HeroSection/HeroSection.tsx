import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../ui/button";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative z-[12] w-full bg-[#192517] min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background hero image - positioned to not obstruct text */}
      <div className="absolute w-full h-[60vh] bottom-0 left-0 opacity-80">
        <img
          className="w-full h-full object-cover object-center"
          alt="Platform visualization"
          src="/hero-image.svg"
        />
        {/* Gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#192517] via-transparent to-[#192517]/20"></div>
      </div>

      {/* Content container - centered vertically */}
      <div className="container mx-auto px-6 lg:px-[140px] relative z-10 flex-1 flex items-center">
        <div className="flex flex-col items-center gap-14 w-full max-w-4xl mx-auto text-center">
          <div className="flex flex-col items-center gap-1 w-full">
            <p className="w-full max-w-[708px] [font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-[#95f270] text-base text-center leading-6">
              Digital Invoice financing platform for B2B businesses
            </p>

            <div className="flex flex-col items-center gap-10">
              <h1 className="w-full max-w-[901px] [font-family:'Bricolage_Grotesque',Helvetica] font-bold text-white text-4xl md:text-5xl lg:text-[64px] text-center leading-tight lg:leading-[normal]">
                One platform. Endless opportunities.
              </h1>

              <p className="w-full max-w-[708px] [font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-white text-lg text-center leading-7">
                Building AI-powered infrastructures for B2B lending in emerging
                markets.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
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