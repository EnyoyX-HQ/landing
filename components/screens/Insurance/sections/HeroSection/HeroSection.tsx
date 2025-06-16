import React from "react";
import { Button } from "@/components/ui/button";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative z-[12] w-full bg-[#163300] pt-[140px] overflow-hidden">
      <div className="absolute w-full h-[556px] bottom-0 left-0">
        <img
          className="w-full h-full object-cover"
          alt="Healthcare coverage visualization"
          src="/group-1410103959.png"
        />
      </div>

      <div className="container mx-auto px-6 md:px-[140px] mb-20">
        <div className="flex flex-col items-center gap-14 w-full">
          <div className="flex flex-col items-center gap-1 w-full">
            <p className="w-full max-w-[708px] [font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-[#ffee78] text-base text-center leading-6">
              Comprehensive Health Insurance for Everyone
            </p>

            <div className="flex flex-col items-center gap-10">
              <h1 className="w-full max-w-[901px] [font-family:'Bricolage_Grotesque',Helvetica] font-bold text-white text-3xl md:text-4xl lg:text-[64px] text-center leading-[36px] md:leading-tight lg:leading-[normal]">
                Healthcare that fits your life.
              </h1>

              <p className="w-full max-w-[708px] [font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-white text-base md:text-lg text-center leading-6 md:leading-7">
                Affordable health plans designed for individuals, families, and businesses across Africa.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Button className="h-14 px-6 py-3 bg-[#66db4a] rounded-[100px] [font-family:'Neue_Montreal-Medium',Helvetica] font-medium text-[#081f24] text-base tracking-[-0.35px] leading-6 hover:bg-[#5bc942]">
              Compare Health Plans
            </Button>

            <Button
              variant="outline"
              className="h-14 px-[18px] py-3 bg-[#f8f6f2] rounded-[1000px] [font-family:'Neue_Montreal-Medium',Helvetica] font-medium text-[#081f24] text-base leading-[normal] border-none hover:bg-[#eae8e4]"
            >
              Learn More About Coverage
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};