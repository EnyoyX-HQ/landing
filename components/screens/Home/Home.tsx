import React from "react";
import { CallToActionSection } from "./sections/CallToActionSection";
import { DemoSection } from "./sections/DemoSection/DemoSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { FooterSection } from "./sections/FooterSection";
import { ForBanksSection } from "./sections/ForBanksSection";
import { ForInsurersSection } from "./sections/ForInsurersSection";
import { ForSmeSection } from "./sections/ForSmeSection";
import { FrameSection } from "./sections/FrameSection";
import { HeroSection } from "./sections/HeroSection";
import { HomePageWrapperSection } from "./sections/HomePageWrapperSection";
import { MainContentSection } from "./sections/MainContentSection";
import { NavigationSection } from "./sections/NavigationSection";
import { PartnersSection } from "./sections/PartnersSection";

export const Home = (): JSX.Element => {
  return (
    <div className="flex flex-col items-start relative bg-white overflow-hidden w-full">
      {/* Navigation Bar */}
      <NavigationSection />

      {/* Hero Section */}
      <HeroSection />

      {/* Partners Section */}
      <PartnersSection />

      {/* Feature Sections */}
      <FeaturesSection />
      <DemoSection />
      <ForSmeSection />
      <ForInsurersSection />
      <ForBanksSection />
      <HomePageWrapperSection />
      <FrameSection />
      <MainContentSection />
      <CallToActionSection />

      {/* Green Section with SVG */}
      <div className="relative w-full h-[300px] z-[1] bg-[#163300]">
        <img
          className="absolute w-full h-[607px] top-[-190px] left-0"
          alt="Frame"
          src="/frame-1410105068.svg"
        />
      </div>

      {/* Footer Section */}
      <FooterSection />
    </div>
  );
};