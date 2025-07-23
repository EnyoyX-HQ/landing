import React from "react";

export const AboutInsurance = (): JSX.Element => {
  return (
    <div className="w-[full] px-36 py-24 bg-stone-100 inline-flex justify-start items-start gap-20 overflow-hidden">
      <div className="flex-1 self-stretch inline-flex flex-col justify-between items-start">
        <div className="self-stretch flex flex-col justify-start items-start gap-5">
          <div className="self-stretch justify-start text-gray-900 text-4xl font-bold font-['Bricolage_Grotesque'] leading-[56px]">
            Healthcare shouldn't be a luxury.
          </div>
          <div className="w-[553px] justify-start text-gray-900 text-lg font-normal font-['Neue_Montreal'] leading-7">
            EnvoyX Care is a micro health insurance product made for everyday people and businesses in Côte d'Ivoire.<br/>
            We help individuals, families, and employers protect what matters most — health without heavy paperwork or high premiums.
          </div>
        </div>
        <div className="w-[538px] flex flex-col justify-start items-start gap-5">
          <div className="px-10 py-6 bg-white rounded-full inline-flex justify-start items-center gap-4">
            <div className="w-4 h-4 relative overflow-hidden">
              <div className="w-3 h-3 left-[1.50px] top-[1.50px] absolute bg-green-400"></div>
            </div>
            <div className="justify-start text-gray-900 text-l font-normal font-['Bricolage_Grotesque'] leading-loose">
              No medical check-ups to sign up
            </div>
          </div>
          <div className="px-10 py-6 bg-white rounded-full inline-flex justify-start items-center gap-4">
            <div className="w-4 h-4 relative overflow-hidden">
              <div className="w-3 h-3 left-[1.50px] top-[1.50px] absolute bg-green-400"></div>
            </div>
            <div className="justify-start text-gray-900 text-l font-normal font-['Bricolage_Grotesque'] leading-loose">
              Network of strong clinics, pharmacies & TPAs
            </div>
          </div>
          <div className="px-10 py-6 bg-white rounded-full inline-flex justify-start items-center gap-4">
            <div className="w-4 h-4 relative overflow-hidden">
              <div className="w-3 h-3 left-[1.50px] top-[1.50px] absolute bg-green-400"></div>
            </div>
            <div className="justify-start text-gray-900 text-l font-normal font-['Bricolage_Grotesque'] leading-loose">
              Get reimbursed fast. No stress.
            </div>
          </div>
        </div>
      </div>
      <div className="pt-24 flex justify-start items-center gap-2.5">
        <img 
          className="w-[528px] h-[683.51px] rounded-[40px]" 
          src="/family-laughs.png" 
          alt="Healthcare illustration"
        />
      </div>
    </div>
  );
};