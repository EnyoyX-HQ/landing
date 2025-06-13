import React from "react";

export const DemoSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-20 px-6 md:px-[140px] py-12 md:py-[100px] relative w-full bg-white z-[9]">
      <div className="flex flex-col items-center gap-5 w-full">
        <h2 className="w-full max-w-[863px] [font-family:'Bricolage_Grotesque',Helvetica] font-bold text-[40px] text-center leading-[56px]">
          <span className="text-[#081f24]">See EnvoyX in action</span>
        </h2>

        <p className="max-w-[845px] [font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-[#081f24] text-lg text-center leading-7">
          Experience our intuitive platform that streamlines invoice financing from application to funding in just a few clicks.
        </p>
      </div>

      <div className="w-full flex justify-center">
        <div className="relative w-full max-w-[1200px] rounded-[20px] overflow-hidden shadow-[0px_16px_32px_-8px_#081f2426]">
          <img
            className="w-full h-auto object-cover"
            alt="EnvoyX Platform Demo - Invoice financing dashboard showing eligibility check, invoice review, and payment processing"
            src="/product-demo.svg"
          />
        </div>
      </div>
    </section>
  );
};