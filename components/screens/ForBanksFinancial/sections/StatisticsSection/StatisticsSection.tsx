import React from "react";

export const StatisticsSection = (): JSX.Element => {
  const statistics = [
    {
      number: "800+",
      description: "Verified healthcare providers",
    },
    {
      number: "10+",
      description: "Healthcare invoice payers",
    },
    {
      number: "89.93%",
      description: "Reduce invoice accuracy and repayment",
    },
  ];

  return (
    <section className="flex flex-col items-start gap-20 px-8 py-24 md:px-[140px] md:py-[100px] relative w-full bg-white z-[3] overflow-hidden">
      <div className="flex flex-col items-center gap-5 w-full">
        <h2 className="w-full max-w-[881px] text-center text-[#081f24] text-2xl md:text-3xl lg:text-[40px] font-bold [font-family:'Bricolage_Grotesque',Helvetica] leading-[28.8px] md:leading-tight lg:leading-[56px]">
          Plug in to access 800+ verified healthcare insurance invoices due for payment
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-start gap-10 w-full max-w-[1232px] mx-auto">
        {statistics.map((stat, index) => (
          <div key={index} className="flex-1 flex flex-col items-start gap-4">
            <div className="text-[#081f24] text-4xl md:text-5xl lg:text-7xl font-medium [font-family:'Bricolage_Grotesque',Helvetica]">
              {stat.number}
            </div>
            <div className="text-[#081f24b2] text-lg md:text-xl font-normal [font-family:'Neue_Montreal-Regular',Helvetica]">
              {stat.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};