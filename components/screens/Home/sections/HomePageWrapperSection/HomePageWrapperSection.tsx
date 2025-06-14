import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../ui/avatar";
import { Button } from "../../../../ui/button";
import { Card, CardContent } from "../../../../ui/card";

// Testimonial data that can be expanded for a carousel
const testimonials = [
  {
    id: 1,
    title:
      "Accelerated Lapaire's invoices and cashflow by Over 4x—Unmatched Speed & Support",
    content:
      '"EnvoyX offers the best solution for forward thinking businesses across Africa to quickly turn their idle insurance reimbursement invoices into working capital in hours and not 45 or 60  days.',
    author: {
      name: "Jerome Lapaire",
      position: "CEO @ Lapaire Glasses",
      image: "/image-5-1.png",
      initials: "JL",
    },
  },
];

export const HomePageWrapperSection = (): JSX.Element => {
  const currentTestimonial = testimonials[0];

  return (
    <section className="flex flex-col items-center gap-12 px-6 md:px-[140px] py-12 md:py-[100px] w-full bg-white relative">
      <Card className="border-none shadow-none w-full max-w-[800px]">
        <CardContent className="p-0">
          <div className="flex flex-col items-start gap-12">
            <div className="flex flex-col items-start gap-5 w-full">
              <h2 className="font-bold text-2xl md:text-[40px] leading-tight md:leading-[56px] text-[#081f24] font-['Bricolage_Grotesque',Helvetica] mt-[-1px]">
                {currentTestimonial.title}
              </h2>
              <p className="text-lg leading-7 text-[#081f24] font-['Neue_Montreal-Regular',Helvetica]">
                {currentTestimonial.content}
              </p>
            </div>

            {/* Author info container */}
            <div className="flex items-center gap-4 w-full">
              <Avatar className="w-16 md:w-20 h-16 md:h-20 rounded-none">
                <AvatarImage
                  src={currentTestimonial.author.image}
                  alt={currentTestimonial.author.name}
                  className="object-cover"
                />
                <AvatarFallback>
                  {currentTestimonial.author.initials}
                </AvatarFallback>
              </Avatar>

              <div className="flex flex-col items-start gap-1">
                <h3 className="text-xl md:text-2xl font-medium text-[#081f24] font-['Bricolage_Grotesque',Helvetica] mt-[-1px]">
                  {currentTestimonial.author.name}
                </h3>
                <p className="text-base md:text-lg leading-7 text-[#081f24b2] font-['Neue_Montreal-Regular',Helvetica]">
                  {currentTestimonial.author.position}
                </p>
              </div>
            </div>

            {/* Navigation arrows - positioned below author info on mobile, beside content on desktop */}
            <div className="flex items-center justify-center gap-8 w-full md:hidden">
              <Button
                variant="default"
                size="icon"
                className="w-12 h-12 p-2.5 bg-[#081f24] rounded-[40px] border border-solid border-[#081f241a] hover:bg-[#081f24]/90"
                aria-label="Previous testimonial"
              >
                <ArrowLeftIcon className="w-5 h-5" />
              </Button>

              <Button
                variant="default"
                size="icon"
                className="w-12 h-12 p-2.5 bg-[#081f24] rounded-[40px] border border-solid border-[#081f241a] hover:bg-[#081f24]/90"
                aria-label="Next testimonial"
              >
                <ArrowRightIcon className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Desktop arrows - positioned with even spacing from text content */}
      <Button
        variant="default"
        size="icon"
        className="hidden md:block w-12 h-12 p-2.5 absolute top-1/2 left-8 lg:left-16 transform -translate-y-1/2 bg-[#081f24] rounded-[40px] border border-solid border-[#081f241a] hover:bg-[#081f24]/90"
        aria-label="Previous testimonial"
      >
        <ArrowLeftIcon className="w-5 h-5" />
      </Button>

      <Button
        variant="default"
        size="icon"
        className="hidden md:block w-12 h-12 p-2.5 absolute top-1/2 right-8 lg:right-16 transform -translate-y-1/2 bg-[#081f24] rounded-[40px] border border-solid border-[#081f241a] hover:bg-[#081f24]/90"
        aria-label="Next testimonial"
      >
        <ArrowRightIcon className="w-5 h-5" />
      </Button>
    </section>
  );
};