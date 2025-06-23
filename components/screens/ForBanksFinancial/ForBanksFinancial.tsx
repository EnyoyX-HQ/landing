import React from "react";
import { FeaturesSection } from "./sections/FeaturesSection/FeaturesSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";
import { StatisticsSection } from "./sections/StatisticsSection/StatisticsSection";

export const ForBanksFinancial = (): JSX.Element => {
  return (
    <main className="flex flex-col w-full bg-white">
      <HeaderSection />
      <HeroSection />
      <MainContentSection />
      <FeaturesSection />
      <FooterSection />
    </main>
  );
};