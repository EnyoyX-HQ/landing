"use client";

import React from "react";
import { Button } from "../../ui/button";
import { MegaMenu } from "./MegaMenu";

interface NavigationProps {
  logoVariant?: "default" | "insurance" | "banks";
  theme?: "light" | "dark";
}

const logoSources = {
  default: "/logo-dark.svg",
  insurance: "/logo-dark.svg", 
  banks: "/logo-dark.svg"
};

export const Navigation = ({ logoVariant = "default", theme = "light" }: NavigationProps): JSX.Element => {
  const logoSrc = logoSources[logoVariant];
  const bgColor = theme === "dark" ? "bg-[#192517]" : "bg-white";

  return (
    <header className={`flex w-full items-center justify-between px-8 py-4 relative z-[13] ${bgColor} shadow-[0px_1px_5px_#0000000a] lg:px-[140px]`}>
      <div className="flex items-center gap-8 lg:gap-20">
        {/* Logo */}
        <div className="flex items-center">
          <img
            className="relative w-auto h-8"
            alt="EnvoyX Logo"
            src={logoSrc}
          />
        </div>

        {/* Mega Menu Navigation */}
        <MegaMenu theme={theme} />
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-3">
        <Button
          variant="outline"
          className="h-14 px-[18px] py-3 bg-[#f8f6f2] rounded-[1000px] font-medium text-[#081f24] text-base"
        >
          Sign In
        </Button>
        <Button className="h-14 px-6 py-3 bg-[#081f24] rounded-[100px] font-medium text-white text-base tracking-[-0.35px] leading-6">
          Schedule a Call
        </Button>
      </div>
    </header>
  );
};