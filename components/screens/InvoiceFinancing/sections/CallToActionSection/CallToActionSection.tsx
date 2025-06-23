import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const CallToActionSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#163300] pt-[100px] px-6 md:px-[140px] z-[2] relative">
      <Card className="w-full bg-[#c8f169] rounded-[20px] overflow-hidden relative">
        <CardContent className="p-10 md:p-20 flex flex-col items-start gap-20 relative">
          {/* Background decoration - positioned to match the image exactly */}
          <div className="absolute top-0 right-0 w-[595px] h-[452px] rounded-[100px] overflow-hidden">
            <svg 
              width="595" 
              height="452" 
              viewBox="0 0 595 452" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <g clipPath="url(#clip0_86_27)">
                <path 
                  d="M679.81 460.161C718.94 500.702 748.83 548.415 769.49 603.302H553.53C547.39 594.139 540.72 585.522 533.52 577.452C484.11 522.458 421.39 494.961 345.34 494.961C269.29 494.961 206.996 522.243 158.447 576.808C118.447 621.72 94.78 684.83 87.448 766.135H-110.468C-101.783 638.674 -60.909 536.897 12.155 460.805C95.075 374.877 205.922 331.913 344.7 331.913C485.19 331.913 596.89 374.662 679.81 460.161Z" 
                  stroke="#66DB4A" 
                  strokeWidth="54.2778" 
                  strokeLinejoin="round"
                />
                <path 
                  d="M-77.275 -48.0312C-56.611 6.85484 -26.718 54.5688 12.404 95.1098C95.325 180.609 207.031 223.358 347.52 223.358C486.3 223.358 597.14 180.394 680.06 94.4658C753.13 18.3738 794 -83.4032 802.69 -210.865H604.77C597.44 -129.559 573.77 -66.4495 533.77 -21.5368C485.22 33.0268 422.92 60.3098 346.88 60.3098C270.83 60.3098 208.105 32.8128 158.697 -22.1814C151.502 -30.2515 144.832 -38.868 138.685 -48.0312H-77.275Z" 
                  stroke="#66DB4A" 
                  strokeWidth="54.2778" 
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_86_27">
                  <rect width="595" height="452" rx="100" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </div>

          <div className="flex flex-col items-start gap-12 relative z-10 max-w-[815px]">
            <div className="flex flex-col items-start gap-5">
              <h2 className="text-[#081f24] text-2xl md:text-3xl lg:text-[40px] font-bold leading-[28.8px] md:leading-tight lg:leading-[56px] [font-family:'Bricolage_Grotesque',Helvetica] tracking-[0]">
                Own your business growth with fast invoice financing with EnvoyX
              </h2>

              <p className="text-[#081f24] text-base md:text-lg font-normal leading-6 md:leading-7 [font-family:'Neue_Montreal-Regular',Helvetica] max-w-[716px]">
                EnvoyX is committed to implementing industry-leading practices
                to ensure the integrity and security of our infrastructure and
                all operations throughout our company.
              </p>
            </div>

            <Button className="w-[150px] h-14 px-6 py-3 bg-[#081f24] rounded-[28px] text-white [font-family:'Neue_Montreal-Medium',Helvetica] font-medium text-base tracking-[-0.35px] leading-6 hover:bg-[#0a1f26] transition-colors">
              Schedule a Call
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};