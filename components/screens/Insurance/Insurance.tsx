import React from "react";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";
import { NavigationSection } from "./sections/NavigationSection/NavigationSection";
import { ServicesSection } from "./sections/ServicesSection/ServicesSection";
import { AboutInsurance } from "./sections/AboutInsurance/AboutInsurance";

export const Insurance = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full bg-white">
      <NavigationSection />
      <HeroSection />
      <AboutInsurance />
      <MainContentSection />
      <ServicesSection />
      <FooterSection />
    </div>
  );
};