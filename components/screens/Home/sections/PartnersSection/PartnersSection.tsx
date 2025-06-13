import React from "react";

export const PartnersSection = (): JSX.Element => {
  // Partner logos data
  const partnerLogos = [
    { src: "/advanns.png", alt: "Advanns", name: "Advanns" },
    { src: "/vitalis.png", alt: "Vitalis", name: "Vitalis" },
    { src: "/lapaire.png", alt: "Lapaire glasses logo", name: "Lapaire" },
    { src: "/ascoma.png", alt: "Ascoma", name: "Ascoma" },
    { src: "/ankara.png", alt: "Ankara", name: "Ankara" },
    { src: "/mci.png", alt: "MCI", name: "MCI" },
    { src: "/inclusive.png", alt: "Inclusive", name: "Inclusive" },
  ];

  return (
    <section className="flex flex-col w-full items-start gap-20 px-4 py-16 lg:px-[140px] lg:py-[100px] relative z-[11]">
      <div className="flex flex-col items-center gap-10 w-full">
        <h2 className="max-w-[886px] mt-[-1.00px] font-bold text-[#081f24] text-xl text-center leading-normal">
          Trusted by Africa&apos;s fastest growing medium & small scale
          businesses
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8 w-full">
          {partnerLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-16 px-6 py-3 bg-white rounded-[100px] border border-solid border-[#081f241a] min-w-[120px]"
            >
              <img
                className="max-h-10 max-w-[100px] w-auto h-auto object-contain"
                alt={logo.alt}
                src={logo.src}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};