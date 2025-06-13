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
    <section className="flex flex-col items-start gap-20 w-full relative">
      <div className="flex w-full items-start relative flex-1 grow">
        {/* Left side with abstract image and feature buttons */}
        <div className="flex flex-col items-center justify-center p-[100px] relative flex-1 self-stretch bg-[#f5f6f4]">
          <img
            className="relative w-full h-auto object-cover"
            alt="Abstract colored mixture"
            src="/for-banks.png"
          />

          <div className="flex flex-col items-start gap-4 absolute top-[200px] left-[121px]">
            {features.map((feature, index) => (
              <Card
                key={index}
                className={`inline-flex items-center gap-3 px-8 py-5 rounded-full shadow-[0px_16px_32px_-8px_#081f2426] ${
                  index === highlightedIndex
                    ? "bg-[#95f270] shadow-[0px_16px_32px_-8px_#081f241a]"
                    : "bg-white"
                }`}
              >
                <CheckIcon className="w-[13px] h-[13px]" />
                <span className="font-medium text-[#081f24] text-lg leading-7 whitespace-nowrap font-['Bricolage_Grotesque',Helvetica]">
                  {feature}
                </span>
              </Card>
            ))}
          </div>
        </div>

        {/* Right side with heading, description and CTA button */}
        <div className="flex flex-col items-start justify-between px-[140px] py-[100px] relative flex-1 self-stretch bg-[#f8f6f2] rounded-lg">
          <h2 className="font-semibold text-[#081f24] text-[40px] leading-[56px] font-['Bricolage_Grotesque',Helvetica] self-stretch">
            For banks/financial institutions
          </h2>

          <div className="flex flex-col items-start gap-4 self-stretch w-full">
            <p className="self-stretch font-normal text-[#081f24] text-lg leading-7 font-['Neue_Montreal-Regular',Helvetica]">
              Extend credit to verified insurance claims reimbursements invoices
              from healthcare providers, increase revenue, and help business
              achieve growth.
            </p>

            <Button className="h-12 px-6 py-3 bg-[#66db4a] rounded-[100px] text-[#081f24] hover:bg-[#5bc942] font-['Neue_Montreal-Medium',Helvetica] font-medium text-base tracking-[-0.35px] leading-6">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};