import React from "react";
import { Button } from "@/components/ui/button";

export const UniqueValueSection = (): JSX.Element => {
  const features = [
    "Onboard & service trusted businesses",
    "Confirm individual & business compliance", 
    "Detect fraud & default faster with smarter data",
    "Learn about the payers behaviours",
    "Access real tim data & insights to make decisions",
  ];

  // Index of the highlighted feature (third one - "Detect fraud & default faster with smarter data")
  const highlightedIndex = 2;

  return (
    <section className="flex flex-col items-start pt-24 w-full">
      <div className="w-full h-[700px] bg-white flex overflow-hidden">
        {/* Left content section */}
        <div className="flex-1 px-8 md:px-[140px] py-24 flex flex-col justify-between items-start">
          <div className="w-full">
            <h2 className="text-2xl md:text-3xl lg:text-[40px] font-bold [font-family:'Bricolage_Grotesque',Helvetica] leading-[28.8px] md:leading-tight lg:leading-[56px]">
              <span className="text-[#66db4a]">99%</span>
              <span className="text-[#081f24]"> less risk with<br/>high repayment score.</span>
            </h2>
          </div>

          <div className="flex flex-col items-start gap-4 w-full">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-medium [font-family:'Bricolage_Grotesque',Helvetica] text-[#081f24] leading-8 md:leading-10">
              Powered by Matrix AI
            </h3>
            
            <p className="text-base md:text-lg font-normal [font-family:'Neue_Montreal-Regular',Helvetica] text-[#081f24b2] leading-6 md:leading-7">
              Mitigate risk with our proprietary underwriting engine, analysing 5+ data points per invoice (payer credibility, reimbursement timelines).
            </p>
            
            <Button className="h-12 px-6 py-3 bg-[#66db4a] rounded-[100px] text-[#081f24] text-base font-medium [font-family:'Neue_Montreal-Medium',Helvetica] hover:bg-[#5bc942]">
              Contact Sales
            </Button>
          </div>
        </div>

        {/* Right image section with feature badges */}
        <div className="flex-1 relative overflow-hidden">
          {/* Background image - positioned to fill entire container */}
          <img
            className="absolute inset-0 w-full h-full object-cover"
            alt="Matrix AI Analytics Dashboard"
            src="/matrix-ai.svg"
          />
        </div>
      </div>
    </section>
  );
};