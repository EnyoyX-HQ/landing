import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const GrowthMachineSection = (): JSX.Element => {
  const features = [
    {
      title: "Fast, flexible financing",
      description: "Get paid in 24 hours. Choose any invoice to finance, anytime.",
      image: "/flexible.svg"
    },
    {
      title: "Multi-branches & sub wallets", 
      description: "Manage all your branches from one powerful platform.",
      image: "/building.svg"
    },
    {
      title: "Simplest possible terms",
      description: "No hidden fees, zero surprises. What you see is what you pay",
      image: "/risk.svg"
    }
  ];

  return (
    <section className="w-full px-6 md:px-[140px] py-24 bg-white flex flex-col justify-start items-start gap-20 overflow-hidden">
      <div className="flex flex-col justify-start items-start gap-5">
        <div className="w-full max-w-[815px] justify-start text-[#081f24] text-2xl md:text-3xl lg:text-[40px] font-bold font-['Bricolage_Grotesque'] leading-[28.8px] md:leading-tight lg:leading-[56px]">
          Turn your invoices into a growth machine
        </div>
        <div className="w-full max-w-[845px] justify-start text-[#081f24] text-base md:text-lg font-normal font-['Neue_Montreal'] leading-6 md:leading-7">
          EnvoyX isn't just a platform—it's a partnership. Deploy working capital to businesses, strengthen your financial offerings while supporting businesses in managing their cash flow through invoice financing.
        </div>
      </div>
      
      <div className="w-full flex flex-col md:flex-row justify-start items-start gap-5">
        {features.map((feature, index) => (
          <Card 
            key={index} 
            className="flex-1 bg-[#f8f6f2] rounded-[20px] border-0 border-transparent hover:border-[#66db4a] transition-all duration-300 overflow-hidden group"
          >
            <CardContent className="flex flex-col justify-end items-start p-0 h-full">
              {/* Image container - positioned at top like in reference */}
              <div className="w-full h-80 relative bg-[#f8f6f2] flex items-center justify-center overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  alt={feature.title}
                  src={feature.image}
                />
              </div>
              
              {/* Content section */}
              <div className="self-stretch p-10 flex flex-col justify-start items-start gap-2">
                <div className="self-stretch justify-start text-[#081f24] text-xl font-medium font-['Bricolage_Grotesque'] leading-loose">
                  {feature.title}
                </div>
                <div className="self-stretch justify-start text-[#081f24]/70 text-lg font-normal font-['Neue_Montreal'] leading-7">
                  {feature.description}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};