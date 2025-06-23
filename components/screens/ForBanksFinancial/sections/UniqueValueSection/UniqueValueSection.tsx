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
        <div className="flex-1 px-8 py-24 bg-[#f5f6f4] relative flex flex-col justify-center items-center">
          {/* Background image */}
          <img
            className="w-full max-w-[774px] h-auto"
            alt="Matrix AI Analytics Dashboard"
            src="/matrix-ai.svg"
          />
          
          {/* Feature badges overlay */}
          <div className="absolute left-[121px] top-[150px] flex flex-col gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`px-8 py-5 rounded-full shadow-[0px_16px_32px_-8px_rgba(8,31,36,0.15)] flex items-center gap-3 ${
                  index === highlightedIndex
                    ? "bg-[#66db4a] shadow-[0px_16px_32px_-8px_rgba(8,31,36,0.10)]"
                    : "bg-white"
                }`}
              >
                <div className="w-3 h-3 relative overflow-hidden">
                  <div 
                    className={`w-2.5 h-2.5 absolute left-[1.22px] top-[1.22px] ${
                      index === highlightedIndex ? "bg-white" : "bg-[#66db4a]"
                    }`}
                  />
                </div>
                <span className="text-[#081f24] text-lg font-medium [font-family:'Bricolage_Grotesque',Helvetica] leading-7 whitespace-nowrap">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};