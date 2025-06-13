import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-20 px-8 py-24 md:px-[140px] md:py-[100px] relative w-full bg-white z-[3]">
      <div className="flex flex-col items-start gap-5 w-full">
        <h2 className="font-bold text-[#081f24] text-3xl md:text-[40px] leading-tight md:leading-[56px] [font-family:'Bricolage_Grotesque',Helvetica] max-w-[815px]">
          Partner with EnvoyX for Healthcare Finance
        </h2>

        <p className="text-[#081f24] text-lg leading-7 [font-family:'Neue_Montreal-Regular',Helvetica] max-w-[845px]">
          EnvoyX isn&apos;t just a platform—it&apos;s a partnership. Deploy
          working capital to businesses, strengthen your financial offerings
          while supporting businesses in managing their cash flow through
          invoice financing.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-start gap-10 md:gap-20 w-full">
        <div className="flex flex-col items-start gap-10 flex-1">
          <Card className="w-full border-none bg-transparent shadow-none">
            <CardContent className="flex flex-col items-start gap-4 p-0">
              <h3 className="self-stretch mt-[-1.00px] [font-family:'Bricolage_Grotesque',Helvetica] font-medium text-[32px] leading-normal text-[#081f24]">
                Streamlined Operations
              </h3>
              <p className="self-stretch [font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-lg leading-7 text-[#081f24b2]">
                Reduce operational overhead with our automated invoice processing and risk assessment tools.
              </p>
            </CardContent>
          </Card>

          <Card className="w-full border-none bg-transparent shadow-none">
            <CardContent className="flex flex-col items-start gap-4 p-0">
              <h3 className="self-stretch mt-[-1.00px] [font-family:'Bricolage_Grotesque',Helvetica] font-medium text-[32px] leading-normal text-[#95f270]">
                Competitive Returns
              </h3>
              <p className="self-stretch [font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-lg leading-7 text-[#081f24]">
                Access attractive yields while supporting healthcare businesses across Africa.
              </p>
            </CardContent>
          </Card>

          <Card className="w-full border-none bg-transparent shadow-none">
            <CardContent className="flex flex-col items-start gap-4 p-0">
              <h3 className="self-stretch mt-[-1.00px] [font-family:'Bricolage_Grotesque',Helvetica] font-medium text-[32px] leading-normal text-[#081f24]">
                Risk Management
              </h3>
              <p className="self-stretch [font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-lg leading-7 text-[#081f24b2]">
                Benefit from our AI-powered risk assessment and comprehensive due diligence processes.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="relative flex-1 h-[400px] md:h-[700px] w-full bg-[#f5f6f4] rounded-[40px] overflow-hidden">
          <img
            className="absolute w-full h-full object-cover"
            alt="Financial professional working with EnvoyX"
            src="/image-8.png"
          />
        </div>
      </div>
    </section>
  );
};