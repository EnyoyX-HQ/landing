import React from "react";
import { FeaturesSection } from "./sections/FeaturesSection/FeaturesSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { StatisticsSection } from "./sections/StatisticsSection/StatisticsSection";
import { UniqueValueSection } from "./sections/UniqueValueSection/UniqueValueSection";

export const ForBanksFinancial = (): JSX.Element => {
  return (
    <main className="flex flex-col w-full bg-white">
      <HeaderSection />
      <HeroSection />
      <UniqueValueSection />
      <StatisticsSection />
      <FeaturesSection />
      <FooterSection />
    </main>
  );
};