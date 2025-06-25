"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDownIcon } from "lucide-react";

interface MegaMenuProps {
  theme?: "light" | "dark";
}

interface MenuItem {
  name: string;
  href: string;
  description: string;
  icon?: string;
}

interface MenuSection {
  title: string;
  items: MenuItem[];
}

interface MegaMenuData {
  [key: string]: {
    sections: MenuSection[];
    columns: number;
  };
}

const megaMenuData: MegaMenuData = {
  Products: {
    columns: 3,
    sections: [
      {
        title: "Core Products",
        items: [
          {
            name: "Invoice Financing",
            href: "/invoice-financing",
            description: "Access quick working capital through invoice financing.",
            icon: "💰",
          },
          {
            name: "Insurance",
            href: "/insurance",
            description: "Get a comprehensive health insurance coverage for your team and family.",
            icon: "🏥",
          },
        ],
      },
    ],
  },
  Solutions: {
    columns: 1,
    sections: [
      {
        title: "Industry Solutions",
        items: [
          {
            name: "For banks & liquidity providers",
            href: "/for-banks",
            description: "Partner with EnvoyX to expand your lending portfolio",
            icon: "🏦",
          },
          {
            name: "For insurers",
            href: "/insurance",
            description: "Streamline claims processing and payments",
            icon: "🛡️",
          },
        ],
      },
    ],
  },
  Resources: {
    columns: 1,
    sections: [
      {
        title: "Learn & Support",
        items: [
          {
            name: "Blog",
            href: "#",
            description: "Latest insights on B2B financing and fintech",
            icon: "📝",
          },
          {
            name: "FAQ",
            href: "/faq",
            description: "Frequently asked questions and answers",
            icon: "❓",
          },
        ],
      },
    ],
  },
  Company: {
    columns: 1,
    sections: [
      {
        title: "About EnvoyX",
        items: [
          {
            name: "About",
            href: "/about",
            description: "Learn about our mission and vision",
            icon: "🏢",
          },
          {
            name: "Careers",
            href: "/careers",
            description: "Join our growing team",
            icon: "💼",
          },
          {
            name: "Partners",
            href: "/partners",
            description: "Our trusted partners and integrations",
            icon: "🤝",
          },
        ],
      },
    ],
  },
};

export const MegaMenu = ({ theme = "light" }: MegaMenuProps): JSX.Element => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const textColor = theme === "dark" ? "text-white" : "text-[#081F24]";

  const handleMouseEnter = (menuName: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveMenu(menuName);
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    timeoutRef.current = setTimeout(() => {
      if (!isHovering) {
        setActiveMenu(null);
      }
    }, 150);
  };

  const handleMenuMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsHovering(true);
  };

  const handleMenuMouseLeave = () => {
    setIsHovering(false);
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const menuItems = ["Products", "Solutions", "Resources", "Company"];

  const renderProductsMenu = () => (
    <div className="p-10 bg-white rounded-xl inline-flex justify-start items-start gap-14">
      <div className="w-64 inline-flex flex-col justify-start items-start gap-10">
        {megaMenuData.Products.sections[0].items.map((item, index) => (
          <div key={index} className="self-stretch flex flex-col justify-start items-start gap-2">
            <div className="self-stretch flex flex-col justify-start items-start gap-1">
              <div className="self-stretch justify-start text-[#081F24] text-xl font-medium font-['Inter']">
                {item.name}
              </div>
              <div className="self-stretch justify-start text-[#081F24]/70 text-sm font-normal font-['Inter'] leading-tight">
                {item.description}
              </div>
            </div>
            <Link href={item.href} onClick={() => setActiveMenu(null)}>
              <div className="rounded-full inline-flex justify-start items-center gap-1 overflow-hidden hover:opacity-80 transition-opacity cursor-pointer">
                <div className="justify-start text-[#081F24] text-sm font-medium font-['Neue_Montreal'] leading-tight">
                  Learn more
                </div>
                <div className="w-4 h-4 p-1 flex justify-start items-center gap-2.5 overflow-hidden">
                  <div className="w-2 h-2 bg-[#66DB4A] rounded-full"></div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-start items-center gap-2.5">
        <div className="w-56 h-80 relative bg-[#163300] rounded-xl overflow-hidden">
          <div className="w-[545.70px] h-[583.85px] left-[-262.79px] top-[-79.45px] absolute outline outline-[32.44px] outline-offset-[-16.22px] outline-[#95F270] rounded-full"></div>
        </div>
      </div>
    </div>
  );

  const renderSolutionsMenu = () => (
    <div className="p-10 bg-white rounded-xl inline-flex justify-start items-start gap-14">
      <div className="w-64 inline-flex flex-col justify-start items-start gap-10">
        {megaMenuData.Solutions.sections[0].items.map((item, index) => (
          <div key={index} className="self-stretch flex flex-col justify-start items-start gap-2">
            <div className="self-stretch flex flex-col justify-start items-start gap-1">
              <div className="self-stretch justify-start text-[#081F24] text-xl font-medium font-['Inter']">
                {item.name}
              </div>
              <div className="self-stretch justify-start text-[#081F24]/70 text-sm font-normal font-['Inter'] leading-tight">
                {item.description}
              </div>
            </div>
            <Link href={item.href} onClick={() => setActiveMenu(null)}>
              <div className="rounded-full inline-flex justify-start items-center gap-1 overflow-hidden hover:opacity-80 transition-opacity cursor-pointer">
                <div className="justify-start text-[#081F24] text-sm font-medium font-['Neue_Montreal'] leading-tight">
                  Learn more
                </div>
                <div className="w-4 h-4 p-1 flex justify-start items-center gap-2.5 overflow-hidden">
                  <div className="w-2 h-2 bg-[#66DB4A] rounded-full"></div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-start items-center gap-2.5">
        <div className="w-56 h-80 relative bg-[#163300] rounded-xl overflow-hidden">
          <div className="w-[545.70px] h-[583.85px] left-[-262.79px] top-[-79.45px] absolute outline outline-[32.44px] outline-offset-[-16.22px] outline-[#95F270] rounded-full"></div>
        </div>
      </div>
    </div>
  );

  const renderResourcesMenu = () => (
    <div className="p-10 bg-white rounded-xl inline-flex justify-start items-start gap-14">
      <div className="w-64 inline-flex flex-col justify-start items-start gap-10">
        {megaMenuData.Resources.sections[0].items.map((item, index) => (
          <div key={index} className="self-stretch flex flex-col justify-start items-start gap-2">
            <div className="self-stretch flex flex-col justify-start items-start gap-1">
              <div className="self-stretch justify-start text-[#081F24] text-xl font-medium font-['Inter']">
                {item.name}
              </div>
              <div className="self-stretch justify-start text-[#081F24]/70 text-sm font-normal font-['Inter'] leading-tight">
                {item.description}
              </div>
            </div>
            <Link href={item.href} onClick={() => setActiveMenu(null)}>
              <div className="rounded-full inline-flex justify-start items-center gap-1 overflow-hidden hover:opacity-80 transition-opacity cursor-pointer">
                <div className="justify-start text-[#081F24] text-sm font-medium font-['Neue_Montreal'] leading-tight">
                  Learn more
                </div>
                <div className="w-4 h-4 p-1 flex justify-start items-center gap-2.5 overflow-hidden">
                  <div className="w-2 h-2 bg-[#66DB4A] rounded-full"></div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-start items-center gap-2.5">
        <div className="w-56 h-80 relative bg-[#163300] rounded-xl overflow-hidden">
          <div className="w-[545.70px] h-[583.85px] left-[-262.79px] top-[-79.45px] absolute outline outline-[32.44px] outline-offset-[-16.22px] outline-[#95F270] rounded-full"></div>
        </div>
      </div>
    </div>
  );

  const renderCompanyMenu = () => (
    <div className="p-10 bg-white rounded-xl inline-flex justify-start items-start gap-14">
      <div className="w-64 inline-flex flex-col justify-start items-start gap-10">
        {megaMenuData.Company.sections[0].items.map((item, index) => (
          <div key={index} className="self-stretch flex flex-col justify-start items-start gap-2">
            <div className="self-stretch flex flex-col justify-start items-start gap-1">
              <div className="self-stretch justify-start text-[#081F24] text-xl font-medium font-['Inter']">
                {item.name}
              </div>
              <div className="self-stretch justify-start text-[#081F24]/70 text-sm font-normal font-['Inter'] leading-tight">
                {item.description}
              </div>
            </div>
            <Link href={item.href} onClick={() => setActiveMenu(null)}>
              <div className="rounded-full inline-flex justify-start items-center gap-1 overflow-hidden hover:opacity-80 transition-opacity cursor-pointer">
                <div className="justify-start text-[#081F24] text-sm font-medium font-['Neue_Montreal'] leading-tight">
                  Learn more
                </div>
                <div className="w-4 h-4 p-1 flex justify-start items-center gap-2.5 overflow-hidden">
                  <div className="w-2 h-2 bg-[#66DB4A] rounded-full"></div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-start items-center gap-2.5">
        <div className="w-56 h-80 relative bg-[#163300] rounded-xl overflow-hidden">
          <div className="w-[545.70px] h-[583.85px] left-[-262.79px] top-[-79.45px] absolute outline outline-[32.44px] outline-offset-[-16.22px] outline-[#95F270] rounded-full"></div>
        </div>
      </div>
    </div>
  );

  const renderMenuContent = (menuName: string) => {
    switch (menuName) {
      case "Products":
        return renderProductsMenu();
      case "Solutions":
        return renderSolutionsMenu();
      case "Resources":
        return renderResourcesMenu();
      case "Company":
        return renderCompanyMenu();
      default:
        return null;
    }
  };

  return (
    <div className="relative" ref={menuRef}>
      {/* Navigation Items */}
      <nav className="hidden md:flex items-center justify-center gap-5">
        {menuItems.map((item) => (
          <div
            key={item}
            className="relative"
            onMouseEnter={() => handleMouseEnter(item)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex items-center gap-1 cursor-pointer py-2">
              <span className={`font-normal ${textColor} text-base tracking-[-0.35px] leading-6 whitespace-nowrap`}>
                {item}
              </span>
              <ChevronDownIcon 
                className={`w-3 h-3 transition-transform duration-200 ${
                  activeMenu === item ? "rotate-180" : ""
                }`} 
              />
            </div>
          </div>
        ))}
      </nav>

      {/* Mega Menu Dropdown */}
      {activeMenu && (
        <div
          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-50"
          onMouseEnter={handleMenuMouseEnter}
          onMouseLeave={handleMenuMouseLeave}
        >
          {renderMenuContent(activeMenu)}
        </div>
      )}
    </div>
  );
};