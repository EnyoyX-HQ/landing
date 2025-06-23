import React from "react";
import { Button } from "@/components/ui/button";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="flex flex-col md:flex-row w-full relative z-[4]">
      {/* Left content section */}
      <div className="flex flex-col items-start gap-10 py-20 md:py-32 px-6 md:px-0 relative flex-1 bg-[#192517] overflow-hidden">
        {/* Background vector */}
        <img
          className="absolute w-full max-w-[1324px] h-auto top-[-210px] left-[-310px]"
          alt="Background vector"
          src="/banks-hero-left.svg"
        />

        <div className="flex flex-col w-full max-w-[900px] items-start gap-20 md:pl-[140px] md:pr-20 relative z-10">
          <div className="flex flex-col items-start gap-14 w-full">
            <div className="flex flex-col items-start gap-10 w-full">
              <h1 className="mt-[-1.00px] font-['Bricolage_Grotesque',Helvetica] font-bold text-white text-2xl md:text-4xl lg:text-6xl leading-[28.8px] md:leading-tight">
                Unlock New Opportunities in Healthcare Financing
              </h1>

              <p className="font-['Neue_Montreal-Regular',Helvetica] font-normal text-white text-base md:text-lg leading-6 md:leading-7">
                Manage finances, unlock competitive yield, and access AI-powered
                capital markets solutions—all in one platform.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Button className="h-14 px-[18px] py-3 bg-[#f8f6f2] text-[#192517] rounded-[1000px] hover:bg-[#e8e6e2]">
                <span className="font-['Neue_Montreal-Medium',Helvetica] font-medium text-base">
                  Talk To Sales Team
                </span>
              </Button>
            </div>

            <p className="font-['Bricolage_Grotesque',Helvetica] font-normal text-white text-base leading-6">
              Trusted by Africa&apos;s leading financial institutions
            </p>
          </div>
        </div>
      </div>

      {/* Right image section */}
      <div className="flex w-full md:w-[612px] bg-[#192517]">
        <img
          className="w-full h-full object-cover"
          alt="Healthcare professional"
          src="/for-banks-hero.png"
        />
      </div>
    </section>
  );
};