import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const SocialProofSection = (): JSX.Element => {
  const statistics = [
    {
      number: "200+",
      title: "Verified businesses",
      description: "Every business that submits invoices through us are duly verified. And we use data to constantly ensure they remain eligible for credit."
    },
    {
      number: "3+", 
      title: "Healthcare invoice payers",
      description: "Our network is supported by over 10 healthcare invoice payers including insurers, third-party payment administrators."
    },
    {
      number: "3000+",
      title: "Invoices paid since 2023", 
      description: "We verify every payer invoice using our intelligent claims processing AI model which executes using the exact payers workflow."
    }
  ];

  return (
    <section className="w-[full] px-36 py-24 bg-white inline-flex flex-col justify-start items-start gap-20 overflow-hidden">
      <div className="self-stretch flex flex-col justify-start items-center gap-5">
        <div className="w-[881px] text-center justify-start text-[#081f24] text-4xl font-bold font-['Bricolage_Grotesque'] leading-[56px]">
          EnvoyX by numbers since launch in 2023
        </div>
        <div className="w-[full] text-center justify-start text-[#081f24] text-lg font-normal font-['Neue_Montreal'] leading-7">
          Manage finances, unlock competitive yield, and access AI-powered capital markets solutions—all in one platform.
        </div>
      </div>
      
      <div className="w-[1232px] inline-flex justify-start items-center gap-5">
        {statistics.map((stat, index) => (
          <Card key={index} className="flex-1 h-96 p-10 bg-[#f8f6f2] rounded-[20px] border-none shadow-none">
            <CardContent className="inline-flex flex-col justify-between items-center p-0 h-full">
              <div className="self-stretch flex flex-col justify-start items-start gap-4">
                <div className="self-stretch text-center justify-start text-[#081f24] text-4xl font-medium font-['Bricolage_Grotesque'] leading-10">
                  {stat.number}
                </div>
                <div className="self-stretch text-center justify-start text-[#081f24] text-xl font-medium font-['Bricolage_Grotesque'] leading-7">
                  {stat.title}
                </div>
                <div className="self-stretch text-center justify-start text-[#081f24]/70 text-lg font-normal font-['Neue_Montreal'] leading-7">
                  {stat.description}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};