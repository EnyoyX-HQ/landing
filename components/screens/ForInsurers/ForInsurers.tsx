import React from "react";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";

export const ForInsurers = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full bg-white">
      <HeaderSection />
      
      {/* Main content area - placeholder for future content */}
      <main className="flex-1 min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#081f24] [font-family:'Bricolage_Grotesque',Helvetica] mb-4">
            For Insurers
          </h1>
          <p className="text-lg text-[#081f24b2] [font-family:'Neue_Montreal-Regular',Helvetica]">
            Content coming soon...
          </p>
        </div>
      </main>
      
      <FooterSection />
    </div>
  );
};