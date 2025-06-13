import { HelpCircleIcon } from "lucide-react";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const MainContentSection = (): JSX.Element => {
  // Health plan data
  const plans = [
    {
      name: "Plan Sécurité",
      price: "80.000",
      isPopular: false,
    },
    {
      name: "Plan Confort",
      price: "100.000",
      isPopular: true,
    },
    {
      name: "Plan Excellence",
      price: "150.000",
      isPopular: false,
    },
  ];

  // Healthcare benefits data
  const benefits = [
    { name: "General Consultation", tooltip: true },
    { name: "Specialist Consultation", tooltip: true },
    { name: "Urgency / Night Services", tooltip: true },
    { name: "Pharmacy & Medical Products", tooltip: true },
    { name: "Radiology & Imaging", tooltip: true },
    { name: "Lab Tests:", tooltip: true },
    { name: "Preventive Treatments (e.g. vaccines)", tooltip: true },
    { name: "HIV/AIDS Treatments", tooltip: true },
    { name: "Medical Aids (e.g. physiotherapy)", tooltip: true },
    { name: "Dental Care", tooltip: true },
  ];

  // Coverage details for each plan
  const coverageDetails = [
    [
      "80% covered, up to 100,000 FCFA",
      "80%, up to 100,000 FCFA",
      "80%, up to 100,000 FCFA",
      "80%, up to 130,000 FCFA",
      "80%, up to 100,000 FCFA",
      "80%, up to 120,000 FCFA",
      "80%, up to 50,000 FCFA",
      "Up to 200,000 FCFA / person/year",
      "Full coverage (frais réels)",
      "80%, up to 80,000 FCFA",
    ],
    [
      "80%, up to 200,000 FCFA",
      "80%, up to 200,000 FCFA",
      "80%, up to 200,000 FCFA",
      "80%, up to 260,000 FCFA",
      "80%, up to 200,000 FCFA",
      "80%, up to 240,000 FCFA",
      "80%, up to 50,000 FCFA",
      "Up to 300,000 FCFA / person/year",
      "Full coverage (frais réels)",
      "80%, up to 160,000 FCFA",
    ],
    [
      "100% covered (frais réels)",
      "100%, frais réels",
      "100%, frais réels",
      "100%, frais réels",
      "100%, frais réels",
      "100%, frais réels",
      "100%, frais réels – INHP rate",
      "Up to 500,000 FCFA / person/year",
      "100%, frais réels",
      "100%, up to 250,000 FCFA per person/year",
    ],
  ];

  return (
    <section className="py-12 md:py-24 px-6 md:px-12 lg:px-20 bg-[#163300] overflow-hidden flex flex-col w-full items-start">
      <div className="flex flex-col items-start gap-5 w-full mb-12 md:mb-20">
        <h2 className="font-['Bricolage_Grotesque',Helvetica] font-bold text-[#ffee78] text-2xl md:text-4xl leading-tight md:leading-[56px]">
          Our Health Plans
        </h2>
        <p className="font-['Neue_Montreal-Regular',Helvetica] font-normal text-white text-base md:text-lg leading-6 md:leading-7 max-w-[686px]">
          Choose the coverage that suits your needs—from essential healthcare to
          premium protection.
        </p>
      </div>

      {/* Mobile-first responsive design */}
      <div className="w-full">
        {/* Mobile view - Stack cards vertically */}
        <div className="block lg:hidden space-y-6">
          {plans.map((plan, planIndex) => (
            <Card key={planIndex} className="p-6 bg-gradient-to-b from-[rgba(26,59,4,1)_80%] to-[rgba(32,72,5,1)_100%] rounded-[20px] border-[#377f0040]">
              <CardContent className="p-0 space-y-4">
                <div className="flex items-center gap-2">
                  <h3 className="font-['Bricolage_Grotesque',Helvetica] font-medium text-[#66db4a] text-xl leading-[30px]">
                    {plan.name}
                  </h3>
                  {plan.isPopular && (
                    <Badge className="bg-white text-[#081f24] font-['Neue_Montreal-Medium',Helvetica] text-sm">
                      Popular
                    </Badge>
                  )}
                </div>
                
                <div className="flex flex-wrap items-end gap-1">
                  <span className="font-['Bricolage_Grotesque',Helvetica] font-medium text-white text-2xl md:text-[32px] leading-8">
                    {plan.price}
                    <span className="text-[#ffffff80] tracking-[-0.20px]">
                      FCFA
                    </span>
                  </span>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-['Neue_Montreal-Regular',Helvetica] text-[#ffffff80] leading-6">
                      Monthly / For each insured
                    </span>
                  </div>
                </div>

                <Button className="h-12 w-full bg-[#1a3b04] text-[#66db4a] hover:bg-[#204805] font-['Neue_Montreal-Medium',Helvetica] rounded-full">
                  Buy Now
                </Button>

                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex justify-between items-start gap-4 py-2 border-b border-[#377f0040] last:border-b-0">
                      <div className="flex items-center gap-1 flex-1">
                        <span className="font-['Neue_Montreal-Medium',Helvetica] font-medium text-white text-sm leading-6">
                          {benefit.name}
                        </span>
                        {benefit.tooltip && (
                          <HelpCircleIcon className="w-4 h-4 text-white opacity-70 flex-shrink-0" />
                        )}
                      </div>
                      <span className="font-['Neue_Montreal-Regular',Helvetica] text-[#ffffffb2] text-sm leading-6 text-right">
                        {coverageDetails[planIndex][index]}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Desktop view - Original grid layout */}
        <div className="hidden lg:flex flex-col w-full gap-2">
          {/* Plan headers */}
          <div className="grid grid-cols-4 gap-5 w-full">
            <div className="h-[200px] flex flex-col justify-end">
              <div className="flex items-center gap-2">
                <h3 className="font-['Bricolage_Grotesque',Helvetica] font-medium text-[#66db4a] text-xl leading-[30px]">
                  Healthcare Benefits
                </h3>
              </div>
            </div>

            {plans.map((plan, index) => (
              <div key={index} className="flex flex-col">
                <div className="px-6 flex items-center gap-2">
                  <h3 className="font-['Bricolage_Grotesque',Helvetica] font-medium text-[#66db4a] text-xl leading-[30px] whitespace-nowrap">
                    {plan.name}
                  </h3>
                  {plan.isPopular && (
                    <Badge className="bg-white text-[#081f24] font-['Neue_Montreal-Medium',Helvetica] text-sm">
                      Popular
                    </Badge>
                  )}
                </div>

                <div className="px-6 pt-5 flex flex-col gap-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-wrap items-end gap-1">
                      <span className="font-['Bricolage_Grotesque',Helvetica] font-medium text-white text-[32px] leading-8">
                        {plan.price}
                        <span className="text-[#ffffff80] tracking-[-0.20px]">
                          FCFA
                        </span>
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="font-['Neue_Montreal-Regular',Helvetica] text-[#ffffff80] text-base leading-6">
                          Monthly
                        </span>
                        <span className="font-['Neue_Montreal-Regular',Helvetica] text-[#ffffff80] text-base leading-6">
                          /
                        </span>
                        <span className="font-['Neue_Montreal-Regular',Helvetica] text-[#ffffff80] text-base leading-6">
                          For each insured
                        </span>
                      </div>
                    </div>
                  </div>

                  <Button className="h-12 bg-[#1a3b04] text-[#66db4a] hover:bg-[#204805] font-['Neue_Montreal-Medium',Helvetica] rounded-full">
                    Buy Now
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits comparison table */}
          <div className="grid grid-cols-4 gap-2 w-full shadow-[0px_16px_32px_-8px_#081f2440]">
            {/* Benefits column */}
            <div className="py-2">
              <div className="flex flex-col">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex h-14 items-center">
                    <div className="flex items-center gap-1">
                      <span className="font-['Neue_Montreal-Medium',Helvetica] font-medium text-white text-base leading-6">
                        {benefit.name}
                      </span>
                      {benefit.tooltip && (
                        <HelpCircleIcon className="w-4 h-4 text-white opacity-70" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Coverage columns for each plan */}
            {coverageDetails.map((planCoverage, planIndex) => (
              <div key={planIndex} className="flex flex-col gap-6">
                <Card className="p-2 rounded-[20px] border-[#377f0040] bg-gradient-to-b from-[rgba(26,59,4,1)_80%] to-[rgba(32,72,5,1)_100%]">
                  <CardContent className="p-0">
                    {planCoverage.map((coverage, index) => (
                      <div key={index} className="flex h-14 items-center px-6">
                        <span className="font-['Neue_Montreal-Regular',Helvetica] text-[#ffffffb2] text-base leading-6">
                          {coverage}
                        </span>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <div className="px-6">
                  <Button className="h-12 w-full bg-[#1a3b04] text-[#66db4a] hover:bg-[#204805] font-['Neue_Montreal-Medium',Helvetica] rounded-full">
                    Buy Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};