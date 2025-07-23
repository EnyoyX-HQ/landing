import React from "react";
import { Button } from "@/components/ui/button";

export const HeroSection = (): JSX.Element => {
  return (
    <div className="w-full h-[1030px] pt-36 bg-[#192517] inline-flex flex-col justify-start items-start gap-10 overflow-hidden relative">
      <div className="self-stretch px-36 flex flex-col justify-start items-start gap-20">
        <div className="self-stretch flex flex-col justify-start items-center gap-14">
          <div className="self-stretch flex flex-col justify-start items-center gap-1">
            <div className="w-[708px] text-center justify-start text-lime-300 text-base font-normal font-['Neue_Montreal'] leading-normal">
              Digital Invoice financing platform for B2B businesses
            </div>
            <div className="flex flex-col justify-start items-center gap-10">
              <div className="w-[901px] text-center justify-start text-white text-6xl font-bold font-['Bricolage_Grotesque']">
                Unlock payments and credit for you & your buyers
              </div>
              <div className="w-[708px] text-center justify-start text-white text-lg font-normal font-['Neue_Montreal'] leading-7">
                Access fast, flexible financing backed by your pending insurance reimbursements. EnvoyX helps you turn invoices into working capital for growth opportunities.
              </div>
            </div>
          </div>
          <div className="inline-flex justify-start items-center gap-3">
            <div className="flex justify-start items-start gap-3">
              <Button className="h-14 px-6 py-3 bg-lime-300 rounded-[100px] flex justify-center items-center gap-3 overflow-hidden">
                <span className="justify-start text-gray-900 text-base font-medium font-['Neue_Montreal'] leading-normal">
                  Schedule a Call
                </span>
              </Button>
            </div>
            <Button className="h-14 px-4 py-3 bg-stone-100 rounded-full flex justify-center items-center gap-3 overflow-hidden">
              <span className="justify-start text-gray-900 text-base font-medium font-['Neue_Montreal']">
                Learn more
              </span>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Finger SVG positioned at the bottom of the hero section */}
      <div className="absolute bottom-0 left-0 w-full">
        <img
          className="w-full h-auto"
          alt="Finger pointing illustration"
          src="/finger.svg"
        />
      </div>
    </div>
  );
};