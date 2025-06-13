import { MapPinIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Separator } from "../../ui/separator";

interface FooterProps {
  theme?: "light" | "dark";
}

// Data for footer columns
const footerColumns = [
  {
    title: "Products",
    links: [
      { name: "Invoice Financing", href: "#" },
      { name: "Accounts Receivable", href: "#" }, 
      { name: "Expense Card", href: "#" },
      { name: "Embedded Invoice Financing", href: "#" },
      { name: "Insurance", href: "/insurance" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { name: "For banks & liquidity providers", href: "/for-banks" },
      { name: "For healthcare providers", href: "#" },
      { name: "For insurers", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Partners", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Developers", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Financing agreement", href: "#" },
      { name: "Service agreement", href: "#" },
    ],
  },
];

export const Footer = ({ theme = "dark" }: FooterProps): JSX.Element => {
  const bgColor = theme === "dark" ? "bg-[#060f00]" : "bg-white";
  const textColor = theme === "dark" ? "text-white" : "text-[#081f24]";
  const mutedTextColor = theme === "dark" ? "text-[#ffffff80]" : "text-[#081f2480]";
  const accentColor = theme === "dark" ? "text-[#66db4a]" : "text-[#081f24]";

  return (
    <footer className={`flex flex-col items-start self-stretch w-full ${bgColor}`}>
      <div className="flex flex-col items-start gap-10 pt-[100px] pb-10 px-[140px] self-stretch w-full">
        {/* Top section with logo, tagline, address and social links */}
        <div className="flex items-end justify-between self-stretch w-full">
          <div className="flex flex-col items-start gap-4">
            <img
              className="mt-[-0.54px] ml-[-0.54px]"
              alt="Logo"
              src="/frame-5-1.svg"
            />

            <div className={`w-fit font-['Bricolage_Grotesque',Helvetica] font-medium ${textColor} text-[40px] leading-[56px] whitespace-nowrap`}>
              Digital Invoice financing platform for B2B businesses
            </div>

            <div className="flex items-start gap-4 self-stretch w-full">
              <MapPinIcon className={`w-5 h-5 ${textColor}`} />

              <div className={`flex-1 mt-[-1.00px] font-['Neue_Montreal-Regular',Helvetica] ${mutedTextColor} text-lg leading-7`}>
                1675 Clay st Apt 4 San Francisco CA 941099-3721
                <br />
                Immeuble Ivoire Trade center, angle rue Brooker Washington et du
                boulevard Hassan II, Cocody Abidjan
              </div>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <a
              href="#"
              className={`w-fit mt-[-1.00px] font-['Neue_Montreal-Regular',Helvetica] ${mutedTextColor} text-lg leading-7 underline whitespace-nowrap`}
            >
              LinkedIn
            </a>

            <a
              href="#"
              className={`w-fit mt-[-1.00px] font-['Neue_Montreal-Regular',Helvetica] ${mutedTextColor} text-lg leading-7 underline whitespace-nowrap`}
            >
              X(Twitter)
            </a>
          </div>
        </div>

        {/* Footer columns with links */}
        <div className="flex flex-wrap items-start justify-between gap-[40px_56px] self-stretch w-full">
          {footerColumns.map((column, index) => (
            <div key={index} className="flex flex-col items-start gap-4">
              <div className={`font-['Neue_Montreal-Medium',Helvetica] font-medium ${accentColor} text-lg leading-7 w-fit mt-[-1.00px] whitespace-nowrap`}>
                {column.title}
              </div>

              <div className="flex flex-col items-start gap-4">
                {column.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    href={link.href}
                    className={`w-fit font-['Neue_Montreal-Regular',Helvetica] ${mutedTextColor} text-lg leading-7 whitespace-nowrap hover:opacity-80 transition-opacity`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom section with disclaimers and copyright */}
      <div className="flex flex-col items-center gap-20 px-[140px] py-10 self-stretch w-full">
        <div className="flex flex-col items-center justify-center gap-5 rounded-lg">
          <p className={`w-[866px] mt-[-1.00px] font-['Neue_Montreal-Regular',Helvetica] ${mutedTextColor} text-lg text-center leading-7`}>
            EnvoyX is a fintech company, not a bank. Banking services provided
            through licensed banking partners. Invoice financing services are
            regulated under Ivorian financial regulations. Data protection
            compliance certified by CNIL. Insurance reimbursement processing
            subject to partner terms and conditions.
          </p>

          <p className={`w-[860px] font-['Neue_Montreal-Regular',Helvetica] ${mutedTextColor} text-lg text-center leading-7`}>
            All investment services are provided by the respective EnvoyX
            investment and banking partners
          </p>
        </div>

        <div className="flex items-start justify-between self-stretch w-full">
          <div className={`w-fit mt-[-1.00px] font-['Neue_Montreal-Regular',Helvetica] ${textColor} text-lg leading-7 whitespace-nowrap`}>
            © EnvoyX Inc. 2025
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className={`w-fit mt-[-1.00px] font-['Neue_Montreal-Regular',Helvetica] ${mutedTextColor} text-lg leading-7 whitespace-nowrap`}
            >
              Terms of service
            </a>

            <Separator orientation="vertical" className={`h-6 ${theme === "dark" ? "bg-[#ffffff80]" : "bg-[#081f2480]"}`} />

            <a
              href="#"
              className={`w-fit mt-[-1.00px] font-['Neue_Montreal-Regular',Helvetica] ${mutedTextColor} text-lg leading-7 whitespace-nowrap`}
            >
              Privacy policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};