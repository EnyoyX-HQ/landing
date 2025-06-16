import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface FeatureProps {
  title: string;
  description: string;
  highlighted?: boolean;
}

export const FeaturesSection = (): JSX.Element => {
  const features: FeatureProps[] = [
    {
      title: "Impactful Investing Made Easy",
      description:
        "Access a pipeline of pre-vetted businesses—no need for costly due diligence or sector expertise.",
    },
    {
      title: "Flexible Access and Control",
      description:
        "Enjoy easy access to your funds and manage your investments according to your preferences.",
      highlighted: true,
    },
    {
      title: "Diversify with Healthcare Assets",
      description:
        "Start with healthcare invoices, then expand into new sectors (logistics, pharmaceuticals) as EnvoyX scales.",
    },
  ];

  return (
    <section className="flex flex-col items-start gap-20 px-8 py-24 md:px-[140px] md:py-[100px] relative w-full bg-[#f8f6f2] z-[3]">
      <div className="flex flex-col items-start gap-5 w-full">
        <h2 className="font-bold text-[#081f24] text-2xl md:text-3xl lg:text-[40px] leading-[28.8px] md:leading-tight lg:leading-[56px] [font-family:'Bricolage_Grotesque',Helvetica] max-w-[815px]">
          Grow your fund at less risk
        </h2>

        <p className="text-[#081f24] text-base md:text-lg leading-6 md:leading-7 [font-family:'Neue_Montreal-Regular',Helvetica] max-w-[845px]">
          EnvoyX isn&apos;t just a platform—it&apos;s a partnership. Deploy
          working capital to businesses, strengthen your financial offerings
          while supporting businesses in managing their cash flow through
          invoice financing.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-start gap-10 md:gap-20 w-full">
        <div className="flex flex-col items-start gap-10 flex-1">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="w-full border-none bg-transparent shadow-none"
            >
              <CardContent className="flex flex-col items-start gap-4 p-0">
                <h3
                  className={`self-stretch mt-[-1.00px] [font-family:'Bricolage_Grotesque',Helvetica] font-medium text-2xl md:text-[32px] leading-[28.8px] md:leading-normal ${
                    feature.highlighted ? "text-[#95f270]" : "text-[#081f24]"
                  }`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`self-stretch [font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-base md:text-lg leading-6 md:leading-7 ${
                    feature.highlighted ? "text-[#081f24]" : "text-[#081f24b2]"
                  }`}
                >
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
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