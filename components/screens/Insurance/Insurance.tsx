import React from "react";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";
import { NavigationSection } from "./sections/NavigationSection/NavigationSection";
import { ServicesSection } from "./sections/ServicesSection/ServicesSection";

export const Insurance = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full bg-white">
      <NavigationSection />
      <HeroSection />
      <MainContentSection />
      <ServicesSection />
      <div className="relative w-full h-[300px] z-[1] bg-[#163300]">
        <img
          className="absolute w-full h-[607px] top-[-190px] left-0"
          alt="Decorative wave"
          src="/frame-1410105068.svg"
        />
      </div>
      <FooterSection />
    </div>
  );
};