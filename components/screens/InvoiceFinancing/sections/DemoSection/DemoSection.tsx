import React from "react";

export const DemoSection = (): JSX.Element => {
  const processSteps = [
    {
      number: "1.",
      title: "Complete Your Onboarding",
      description: "Complete your onboarding by finishing both KYC & KYB and accepting our invoicing contract."
    },
    {
      number: "2.", 
      title: "Submit Pending Invoices",
      description: "Submit your pending insurance claims by uploading and verifying your invoices on our platform."
    },
    {
      number: "3.",
      title: "Get Credited Fast", 
      description: "Get credited in 24 hours as funds promptly reach your EnvoyX account after approval."
    }
  ];

  return (
    <section className="flex flex-col items-start gap-20 px-6 md:px-[140px] py-12 md:py-[100px] relative w-full bg-white z-[9]">
      {/* 3-Step Process Section */}
      <div className="w-full pt-24 bg-white inline-flex flex-col justify-start items-start gap-20 overflow-hidden">
        <div className="self-stretch px-6 md:px-36 flex flex-col justify-start items-start gap-5">
          <div className="self-stretch flex flex-col justify-start items-start gap-5">
            <div className="w-full justify-start text-[#081f24] text-2xl md:text-3xl lg:text-4xl font-bold font-['Bricolage_Grotesque'] leading-[28.8px] md:leading-tight lg:leading-[56px]">
              Improve Your Cash Flow with EnvoyX in 3 Simple Steps
            </div>
            <div className="w-full justify-start text-[#081f24] text-base md:text-lg font-normal font-['Neue_Montreal'] leading-6 md:leading-7">
              Manage finances, unlock competitive yield, and access AI-powered capital markets solutions—all in one platform.
            </div>
          </div>
        </div>
        
        <div className="self-stretch px-6 md:px-36 inline-flex flex-col md:flex-row justify-start items-start gap-10">
          {processSteps.map((step, index) => (
            <div key={index} className={`flex-1 self-stretch inline-flex flex-col justify-start items-start gap-2 ${index === 1 ? 'md:px-2.5' : index === 2 ? 'md:pl-7' : ''}`}>
              <div className="self-stretch justify-start text-[#081f24] text-lg md:text-xl font-medium font-['Bricolage_Grotesque'] leading-6 md:leading-loose">
                {step.number}
              </div>
              <div className="self-stretch justify-start text-[#081f24] text-lg md:text-xl font-medium font-['Bricolage_Grotesque'] leading-6 md:leading-loose">
                {step.title}
              </div>
              <div className="self-stretch justify-start text-[#081f24]/70 text-base md:text-lg font-normal font-['Neue_Montreal'] leading-6 md:leading-7">
                {step.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-center relative">
        {/* Background image positioned behind the demo image */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: 'url(/paint-2.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        {/* Demo image with relative positioning to appear above background */}
        <img
          className="relative z-10 w-full max-w-[1200px] h-auto object-cover"
          alt="EnvoyX Platform Demo - Invoice financing dashboard showing eligibility check, invoice review, and payment processing"
          src="/product-demo.svg"
        />
      </div>
    </section>
  );
};