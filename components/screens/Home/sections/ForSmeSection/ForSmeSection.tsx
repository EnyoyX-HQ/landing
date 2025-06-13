import React from "react";
import { Button } from "../../../../ui/button";
import { Card, CardContent } from "../../../../ui/card";

export const ForSmeSection = (): JSX.Element => {
  return (
    <section className="flex flex-col md:flex-row w-full relative">
      {/* Left content section */}
      <div className="flex-1 bg-[#f8f6f2] px-6 py-12 md:px-[140px] md:py-[100px] flex flex-col justify-between gap-20">
        <div className="flex flex-col gap-20 w-full">
          <h2 className="font-['Bricolage_Grotesque',Helvetica] font-bold text-[#081f24] text-3xl md:text-[40px] leading-[56px]">
            For medium & small-scale enterprises
          </h2>

          <p className="font-['Neue_Montreal-Regular',Helvetica] text-[#081f24] text-lg leading-7">
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

      {/* Right image section */}
      <div className="flex-1 bg-[#66db4a] relative">
        <img
          className="w-full h-[800px] object-cover"
          alt="Business professionals"
          src="/inframe-studio-s-bbblnqvl8xa-unsplash.png"
        />

        <Card className="absolute w-[284px] h-[284px] top-[456px] left-[236px] rounded-[19.88px] overflow-hidden">
          <CardContent className="p-0 h-full relative">
            <div className="absolute top-[39px] left-[23px] font-['Neue_Montreal-Regular',Helvetica] font-normal text-[#081f24] text-[56px]">
              3K+
            </div>

            <div className="absolute w-[199px] top-[218px] left-[23px] font-['Neue_Montreal-Medium',Helvetica] font-medium text-[#081f24] text-base leading-6">
              invoices paid since 2023
            </div>

            <div className="absolute w-[148px] h-[148px] -top-7 left-[182px]">
              <img
                className="absolute w-[91px] h-[108px] top-7 left-[11px]"
                alt="Invoice graphic"
                src="/group.png"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};