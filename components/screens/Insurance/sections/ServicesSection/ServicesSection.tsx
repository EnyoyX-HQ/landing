import { CheckIcon } from "lucide-react";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Data for feature badges
const employerFeatures = [
  "Add employees in minutes",
  "Customize coverage for different staff levels",
  "Track benefits usage in real-time",
];

// Data for individual plan features
const individualFeatures = [
  "Plans from just 1,500 CFA/month",
  "80%–100% refunds on consultations, medications, maternity & more",
  "Covered in your neighborhood and beyond",
];

export const ServicesSection = (): JSX.Element => {
  return (
    <section className="bg-[#F8F6F2] py-12 md:py-24 px-6 md:px-12 lg:px-[140px] flex flex-col gap-10 w-full">
      <h2 className="text-xl md:text-2xl lg:text-[40px] leading-[24px] md:leading-tight lg:leading-[56px] font-bold text-[#081f24] [font-family:'Bricolage_Grotesque',Helvetica]">
        Built for People & Businesses
      </h2>

      <Card className="p-6 md:p-10 bg-white rounded-[40px] overflow-hidden relative flex flex-col items-start justify-between">
        {/* Background image with overlay effect - Hidden on mobile for better performance */}
        <div className="hidden lg:block absolute right-0 top-0 w-[664px] h-full">
          <div className="relative w-[1089px] h-[891px] top-[-238px] left-[-425px]">
            <img
              className="absolute w-[664px] h-[full] top-[238px] left-[425px] object-cover"
              alt="Abstract top view"
              src="/paint-white.svg"
            />
            <div className="absolute w-[891px] h-[891px] top-0 left-0 bg-white rounded-[445.5px] blur-[50px]" />
          </div>
        </div>

        <CardContent className="p-0 z-10 w-full">
          <div className="flex flex-col gap-6 md:gap-10">
            {/* Header section */}
            <div className="flex flex-col items-start">
              <p className="text-sm md:text-base text-[#081f2480] [font-family:'Neue_Montreal-Regular',Helvetica]">
                FOR EMPLOYERS
              </p>
              <div className="flex flex-col gap-4 md:gap-5">
                <h3 className="text-xl md:text-2xl lg:text-[40px] leading-[24px] md:leading-tight lg:leading-[56px] font-bold text-[#081f24] [font-family:'Bricolage_Grotesque',Helvetica] max-w-[499px]">
                  Empower & protect your team&apos;s health
                </h3>
                <p className="text-base md:text-lg text-[#081f24b2] [font-family:'Neue_Montreal-Regular',Helvetica] max-w-[490px] leading-6 md:leading-7">
                  Your team deserves care that fits your budget. Healthy
                  workers, healthy business.
                </p>
              </div>
            </div>

            {/* Features section */}
            <div className="flex flex-wrap gap-3 md:gap-4 max-w-[602px]">
              {employerFeatures.map((feature, index) => (
                <Badge
                  key={index}
                  className="flex items-center gap-2 p-3 md:p-4 bg-white rounded-full border border-[#081f241a] font-normal text-sm md:text-base text-[#081f24] [font-family:'Neue_Montreal-Regular',Helvetica]"
                >
                  <CheckIcon className="w-4 h-4 flex-shrink-0" />
                  <span className="whitespace-nowrap">{feature}</span>
                </Badge>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-3">
              <Button className="w-full sm:w-auto h-12 px-6 py-3 bg-[#66db4a] rounded-[100px] text-sm md:text-base text-[#081f24] [font-family:'Neue_Montreal-Medium',Helvetica] tracking-[-0.35px] font-medium">
                Enrol Your Team Now
              </Button>
              <Button
                variant="outline"
                className="w-full sm:w-auto h-12 px-4 md:px-[18px] py-3 bg-[#f8f6f2] rounded-[1000px] text-sm md:text-base text-[#081f24] [font-family:'Neue_Montreal-Medium',Helvetica] font-medium border-none"
              >
                Create a Custom Health Plan
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-10 w-full">
        {/* Individual & Families Card */}
        <Card className="flex flex-col justify-between p-6 md:p-10 bg-[#f0deb8] rounded-[40px] w-full lg:w-[576px] min-h-[400px] md:h-[563px]">
          <CardContent className="p-0">
            <div className="flex flex-col gap-4 md:gap-5">
              <p className="text-sm md:text-base text-[#081f2480] [font-family:'Neue_Montreal-Regular',Helvetica]">
                FOR INDIVIDUALS & FAMILIES
              </p>
              <h3 className="text-xl md:text-2xl lg:text-[40px] leading-[24px] md:leading-tight lg:leading-[56px] font-bold text-[#081f24] [font-family:'Bricolage_Grotesque',Helvetica]">
                Secure your families&apos; future
              </h3>
              <p className="text-base md:text-lg text-[#081f24b2] [font-family:'Neue_Montreal-Regular',Helvetica] leading-6 md:leading-7">
                We designed EnvoyX Care so that anyone — from market sellers to
                taxi drivers — can afford to see a doctor.
              </p>
            </div>
          </CardContent>
          <Button className="h-12 px-6 w-10 py-3 bg-[#66db4a] rounded-[100px] text-sm md:text-base text-[#081f24] [font-family:'Neue_Montreal-Medium',Helvetica] tracking-[-0.35px] font-medium mt-6">
            Compare Health Plans
          </Button>
        </Card>

        {/* Image Card with Features */}
        <Card className="relative rounded-[40px] overflow-hidden w-full lg:flex-1 min-h-[400px] md:h-[563px]">
          <CardContent className="p-0 h-full">
            <img
              className="w-full h-full object-cover"
              alt="Family health coverage"
              src="/frank-mckenna-lhojrolclx4-unsplash-1.png"
            />
            <div className="absolute bottom-6 md:bottom-10 left-6 md:left-[30px] flex flex-col gap-3 md:gap-5">
              {individualFeatures.map((feature, index) => (
                <Badge
                  key={index}
                  className="flex items-start gap-2 px-4 md:px-8 py-3 md:py-4 bg-white rounded-full font-normal text-sm md:text-base text-[#081f24] [font-family:'Neue_Montreal-Regular',Helvetica] max-w-[280px] md:max-w-none"
                >
                  <CheckIcon className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span className="leading-tight">{feature}</span>
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};