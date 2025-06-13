import React from "react";
import { Card, CardContent } from "../../../../ui/card";

// Feature data for mapping
const features = [
  {
    icon: "/icon-security.svg",
    title: "Built with security in mind",
    description:
      "Bank-level encryption and multi-layer security for every transaction through our partner bank partners.",
  },
  {
    icon: "/icon-frictionless.svg",
    title: "Frictionless experience",
    description:
      "Becoming an EnvoyX financial partner takes minutes and once approved, access all the cash management essentials in one platform.",
  },
  {
    icon: "/icon-support.svg",
    title: "247 dedicated support",
    description:
      "Get a dedicated relationship manager to answer your questions and help propel your business forward.",
  },
];

export const FrameSection = (): JSX.Element => {
  return (
    <section className="py-[100px] pb-[50px] px-[140px] w-full bg-white">
      <div className="flex flex-col items-start gap-20 w-full">
        {/* Heading section */}
        <div className="flex flex-col items-start gap-5">
          <h2 className="w-[761px] [font-family:'Bricolage_Grotesque',Helvetica] font-bold text-[#081f24] text-[40px] leading-[56px]">
            Building trust and protecting our Customers&#39; Data is our highest
            priority.
          </h2>

          <p className="w-[759px] [font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-[#081f24] text-lg leading-7">
            EnvoyX is committed to implementing industry-leading practices to
            ensure the integrity and security of our infrastructure and all
            operations throughout our company.
          </p>
        </div>

        {/* Features grid */}
        <div className="flex items-start gap-8 w-full">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-start justify-center gap-5 flex-1"
            >
              <Card className="w-full bg-[#f8f6f2] rounded-[20px] border-none">
                <CardContent className="flex items-center justify-center p-0">
                  <div className="flex items-center justify-center py-[150px]">
                    <img
                      className="w-auto h-auto"
                      alt="Feature icon"
                      src={feature.icon}
                    />
                  </div>
                </CardContent>
              </Card>

              <h3 className="self-stretch [font-family:'Neue_Montreal-Medium',Helvetica] font-medium text-[#081f24] text-2xl">
                {feature.title}
              </h3>

              <p className="self-stretch [font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-[#081f24] text-lg leading-7">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};