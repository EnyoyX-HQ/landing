import React from "react";
import { CallToActionSection } from "./sections/CallToActionSection/CallToActionSection";
import { DemoSection } from "./sections/DemoSection/DemoSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { ForSmeSection } from "./sections/ForSmeSection/ForSmeSection";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { HomePageWrapperSection } from "./sections/HomePageWrapperSection/HomePageWrapperSection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";
import { PartnersSection } from "./sections/PartnersSection/PartnersSection";
import { SocialProofSection } from "./sections/SocialProofSection/SocialProofSection";

export const InvoiceFinancing = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full bg-white">
      <HeaderSection />
      
      {/* Hero Section - Placeholder for future hero content */}
      <section className="relative z-[12] w-full bg-[#192517] min-h-[60vh] flex flex-col overflow-hidden">
        <div className="container mx-auto px-6 lg:px-[140px] relative z-10 pt-20 pb-32">
          <div className="flex flex-col items-center gap-14 w-full max-w-4xl mx-auto text-center">
            <div className="flex flex-col items-center gap-1 w-full">
              <p className="w-full max-w-[708px] [font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-[#95f270] text-base text-center leading-6">
                Fast access to working capital
              </p>

              <div className="flex flex-col items-center gap-10">
                <h1 className="w-full max-w-[901px] [font-family:'Bricolage_Grotesque',Helvetica] font-bold text-white text-3xl md:text-4xl lg:text-[64px] text-center leading-[36px] md:leading-tight lg:leading-[normal]">
                  Invoice Financing Made Simple
                </h1>

                <p className="w-full max-w-[708px] [font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-white text-lg text-center leading-7">
                  Turn your outstanding invoices into immediate working capital with our AI-powered financing platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Added sections from homepage */}
      <DemoSection />
      <SocialProofSection />
      <PartnersSection />
      <ForSmeSection />
      <HomePageWrapperSection />
      <MainContentSection />
      <CallToActionSection />
      
      <FooterSection />
    </div>
  );
};