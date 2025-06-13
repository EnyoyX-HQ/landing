import React from "react";

export const PartnersSection = (): JSX.Element => {
  // Partner logos data
  const partnerLogos = [
    { src: "/advanns.png", alt: "Image", width: "99.53px", height: "19.91px" },
    {
      src: "/vitalis.png",
      alt: "Image",
      width: "71.48px",
      height: "71.48px",
      marginY: "-3.74px",
    },
    {
      src: "/lapaire.png",
      alt: "Lapaire glasses logo",
      width: "51.74px",
      height: "51.74px",
    },
    {
      src: "/ascoma.png",
      alt: "Partner",
      width: "100.35px",
      height: "35.79px",
    },
    { src: "/ankara.png", alt: "Image", width: "137.35px", height: "21.9px" },
    {
      src: "/mci.png",
      alt: "Image",
      width: "72.99px",
      height: "72.99px",
      marginY: "-4.49px",
    },
    { src: "/inclusive.png", alt: "Image", width: "99.3px", height: "45.56px" },
  ];

  return (
    <section className="flex flex-col w-full items-start gap-20 px-4 py-16 lg:px-[140px] lg:py-[100px] relative z-[11]">
      <div className="flex flex-col items-center gap-10 w-full">
        <h2 className="max-w-[886px] mt-[-1.00px] font-bold text-[#081f24] text-xl text-center leading-normal">
          Trusted by Africa&apos;s fastest growing medium & small scale
          businesses
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-4 w-full">
          {partnerLogos.map((logo, index) => (
            <div
              key={index}
              className="flex flex-col h-20 items-center justify-center px-8 py-2 bg-white rounded-[100px] border border-solid border-[#081f241a]"
            >
              <img
                className={`relative ${logo.width ? `w-[${logo.width}]` : ""} ${logo.height ? `h-[${logo.height}]` : ""} ${logo.marginY || ""} object-cover`}
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