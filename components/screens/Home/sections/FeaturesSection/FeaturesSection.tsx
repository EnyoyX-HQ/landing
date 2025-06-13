import React from "react";
import { Badge } from "../../../../ui/badge";
import { Button } from "../../../../ui/button";
import { Card, CardContent } from "../../../../ui/card";

// Feature badges data for the right card
const featureBadges = [
  "KYC/B",
  "Data extraction & cleaning",
  "Risk analysis",
  "Smart Claims underwriting",
  "Fraud detection",
  "Credit financing",
];

export const FeaturesSection = (): JSX.Element => {
  return (
    <section className="w-full px-[140px] py-[100px] bg-white flex flex-col items-start gap-20 relative z-10">
      <div className="flex flex-col items-center gap-5 w-full">
        <h2 className="w-full max-w-[863px] [font-family:'Bricolage_Grotesque',Helvetica] font-bold text-[40px] text-center leading-[56px]">
          <span className="text-[#66db4a]">AI + data</span>
          <span className="text-[#081f24]">
            {" "}
            powered infrastructure: The future of B2B lending
          </span>
        </h2>

        <p className="max-w-[845px] [font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-[#081f24] text-lg text-center leading-7">
          EnvoyX isn&apos;t just a platform—it&apos;s a partnership. Deploy
          working capital to businesses, strengthen your financial offerings
          while supporting businesses in managing their cash flow through
          invoice financing.
        </p>
      </div>

      <div className="flex flex-col items-start gap-10 w-full">
        <div className="flex items-center gap-10 w-full">
          {/* Left Card - Alternative credit scoring */}
          <Card className="flex-1 h-[600px] bg-[#f8f6f2] rounded-[20px] border-none">
            <CardContent className="flex flex-col h-full items-start justify-end gap-10 p-10">
              <div className="flex flex-col items-start gap-5 w-full">
                <h3 className="w-full max-w-[381px] [font-family:'Bricolage_Grotesque',Helvetica] font-semibold text-[#081f24] text-[40px] leading-[56px]">
                  Alternative credit scoring
                </h3>

                <p className="[font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-[#081f24] text-lg leading-7">
                  EnvoyX isn&apos;t just a platform—it&apos;s a partnership.
                  Deploy working capital to businesses, strengthen your
                  financial offerings while supporting businesses in managing
                  their cash flow through invoice financing.
                </p>
              </div>

              <Button className="h-14 px-[18px] py-3 bg-white text-[#081f24] rounded-[1000px] hover:bg-gray-100">
                <span className="[font-family:'Neue_Montreal-Medium',Helvetica] font-medium text-base">
                  Learn more
                </span>
              </Button>
            </CardContent>
          </Card>

          {/* Right Card - Features with image */}
          <Card className="flex-1 h-[600px] bg-[#f8f6f2] rounded-[20px] border-none overflow-hidden relative">
            <CardContent className="p-0 h-full">
              <img
                className="w-full h-[600px] object-cover"
                alt="Emmanuel ikwuegbu"
                src="/emmanuel-ikwuegbu-co9cz1y9cug-unsplash-1.png"
              />

              <div className="flex flex-col items-start gap-[16.25px] absolute top-[76px] left-10">
                {featureBadges.map((feature, index) => (
                  <Badge
                    key={index}
                    className="flex items-center gap-[13px] px-[32.5px] py-[19.5px] bg-white rounded-[8124.19px] shadow-[0px_16px_32px_-8px_#081f2426]"
                  >
                    <img
                      className="w-[13px] h-[13px]"
                      alt="Feature icon"
                      src="/frame-5.svg"
                    />
                    <span className="[font-family:'Bricolage_Grotesque',Helvetica] font-medium text-[#081f24] text-lg leading-7 whitespace-nowrap">
                      {feature}
                    </span>
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};