import React from "react";
import { Button } from "../../../../ui/button";

export const ForSmeSection = (): JSX.Element => {
  return (
    <section className="flex flex-col md:flex-row w-full relative">
      {/* Left content section - Changed from flex-1 to w-1/2 for 50% width */}
      <div className="w-full md:w-1/2 bg-[#f8f6f2] px-6 py-12 md:px-[140px] md:py-[100px] flex flex-col justify-between gap-20">
        <div className="flex flex-col gap-20 w-full">
          <h2 className="font-['Bricolage_Grotesque',Helvetica] font-bold text-[#081f24] text-2xl md:text-3xl lg:text-[40px] leading-[28.8px] md:leading-tight lg:leading-[56px]">
            For medium & small-scale enterprises
          </h2>

          <p className="font-['Neue_Montreal-Regular',Helvetica] text-[#081f24] text-base md:text-lg leading-6 md:leading-7">
            EnvoyX isn&apos;t just a platform—it&apos;s a partnership. Deploy
            working capital to businesses, strengthen your financial offerings
            while supporting businesses in managing their cash flow through
            invoice financing.
          </p>
        </div>

        <Button
          variant="outline"
          className="h-14 px-[18px] py-3 bg-white rounded-[1000px] flex items-center gap-3 w-fit"
        >
          <span className="font-['Neue_Montreal-Medium',Helvetica] font-medium text-[#081f24] text-base">
            Learn more about invoice financing
          </span>
          <img alt="Arrow icon" src="/frame-1.svg" />
        </Button>
      </div>

      {/* Right image section - Changed from flex-1 to w-1/2 for 50% width */}
      <div className="w-full md:w-1/2 relative">
        <img
          className="w-full h-[800px] object-cover"
          alt="For SME - Medium & small-scale enterprises invoice financing solutions"
          src="/for-sme.svg"
        />
      </div>
    </section>
  );
};