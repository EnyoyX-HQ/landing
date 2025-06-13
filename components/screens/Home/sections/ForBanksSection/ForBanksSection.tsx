import { CheckIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../ui/button";
import { Card } from "../../../../ui/card";

export const ForBanksSection = (): JSX.Element => {
  // Data for feature buttons
  const features = [
    "Onboard & service trusted businesses",
    "Confirm individual & business compliance",
    "Detect fraud & default faster with smarter data",
    "Learn about the payers behaviours",
    "Access real tim data & insights to make decisions",
  ];

  // Index of the highlighted feature
  const highlightedIndex = 2;

  return (
    <section className="flex flex-col lg:flex-row w-full relative">
      {/* Left side with PNG background and feature buttons */}
      <div className="flex-1 relative overflow-hidden">
        {/* PNG Background Image */}
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover object-center"
            alt="For banks - Financial institutions background"
            src="/for-banks.png"
          />
        </div>

        {/* Feature buttons overlay */}
        <div className="relative z-10 flex flex-col items-start gap-4 p-8 md:p-12 lg:p-[100px] min-h-[600px] justify-center">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`inline-flex items-center gap-3 px-6 md:px-8 py-4 md:py-5 rounded-full shadow-[0px_16px_32px_-8px_#081f2426] transition-all duration-300 hover:shadow-[0px_20px_40px_-8px_#081f2430] ${
                index === highlightedIndex
                  ? "bg-[#95f270] shadow-[0px_16px_32px_-8px_#081f241a]"
                  : "bg-white"
              }`}
            >
              <CheckIcon className="w-[13px] h-[13px] flex-shrink-0" />
              <span className="font-medium text-[#081f24] text-base md:text-lg leading-7 whitespace-nowrap font-['Bricolage_Grotesque',Helvetica]">
                {feature}
              </span>
            </Card>
          ))}
        </div>
      </div>

      {/* Right side with heading, description and CTA button */}
      <div className="flex-1 flex flex-col justify-between px-8 md:px-12 lg:px-[140px] py-12 md:py-[100px] bg-[#f8f6f2] min-h-[600px]">
        <div className="flex flex-col gap-8 md:gap-12">
          <h2 className="font-semibold text-[#081f24] text-3xl md:text-[40px] leading-tight md:leading-[56px] font-['Bricolage_Grotesque',Helvetica]">
            For banks/financial institutions
          </h2>

          <p className="font-normal text-[#081f24] text-lg leading-7 font-['Neue_Montreal-Regular',Helvetica]">
            Extend credit to verified insurance claims reimbursements invoices
            from healthcare providers, increase revenue, and help business
            achieve growth.
          </p>
        </div>

        <Button className="h-12 px-6 py-3 bg-[#66db4a] rounded-[100px] text-[#081f24] hover:bg-[#5bc942] font-['Neue_Montreal-Medium',Helvetica] font-medium text-base tracking-[-0.35px] leading-6 w-fit mt-8 lg:mt-0">
          Contact Sales
        </Button>
      </div>
    </section>
  );
};