import React from "react";
import { Button } from "../../../../ui/button";
import { Card, CardContent } from "../../../../ui/card";

export const ForInsurersSection = (): JSX.Element => {
  return (
    <section className="w-full py-12 md:py-[100px] px-6 md:px-[10%] bg-white">
      <div className="flex flex-col lg:flex-row gap-6 md:gap-10 w-full">
        {/* Left Card - For insurers content */}
        <Card className="flex-1 h-auto lg:h-[600px] bg-[#f8f6f2] rounded-[20px] p-0 border-none">
          <CardContent className="flex flex-col justify-between h-full p-8 md:p-10">
            <div className="flex flex-col gap-5">
              <h2 className="font-semibold text-2xl md:text-3xl lg:text-[40px] leading-[28.8px] md:leading-tight lg:leading-[56px] text-[#081f24] [font-family:'Bricolage_Grotesque',Helvetica]">
                For insurers
              </h2>
              <p className="text-base md:text-lg leading-6 md:leading-7 text-[#081f24] [font-family:'Neue_Montreal-Regular',Helvetica]">
                EnvoyX isn&apos;t just a platform—it&apos;s a partnership.
                Deploy working capital to businesses, strengthen your
                financial offerings while supporting businesses in managing
                their cash flow through invoice financing.
              </p>
            </div>
            <Button
              variant="outline"
              className="h-14 px-[18px] py-3 bg-white rounded-[1000px] [font-family:'Neue_Montreal-Medium',Helvetica] font-medium text-base text-[#081f24] border border-[#081f241a] hover:bg-gray-50 w-fit mt-8 lg:mt-0"
            >
              Learn more
            </Button>
          </CardContent>
        </Card>

        {/* Right Card - Spiral image extending beyond container */}
        <Card className="flex-1 h-[400px] lg:h-[600px] bg-[#163300] rounded-[20px] overflow-hidden border-none relative">
          <CardContent className="p-0 h-full relative">
            {/* Container for the oversized spiral image */}
            <div className="relative w-[150%] h-[150%] -top-[25%] -left-[25%]">
              <img
                className="w-full h-full object-cover"
                alt="For insurers - Insurance solutions and partnerships"
                src="/spiral.svg"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};