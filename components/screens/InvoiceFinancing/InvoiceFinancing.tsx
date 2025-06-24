import React from "react";
import { CallToActionSection } from "./sections/CallToActionSection/CallToActionSection";
import { DemoSection } from "./sections/DemoSection/DemoSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { ForSmeSection } from "./sections/ForSmeSection/ForSmeSection";
import { GrowthMachineSection } from "./sections/GrowthMachineSection/GrowthMachineSection";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { HomePageWrapperSection } from "./sections/HomePageWrapperSection/HomePageWrapperSection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";
import { PartnersSection } from "./sections/PartnersSection/PartnersSection";
import { SocialProofSection } from "./sections/SocialProofSection/SocialProofSection";

export const InvoiceFinancing = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full bg-white">
      <HeaderSection />
      <HeroSection />
      <DemoSection />
      <SocialProofSection />
      <PartnersSection />
      <ForSmeSection />
      <HomePageWrapperSection />
      <GrowthMachineSection />
      <MainContentSection />
      <CallToActionSection />
      <FooterSection />
    </div>
  );
};