"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDownIcon } from "lucide-react";
import { Card, CardContent } from "../../ui/card";

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
  const bgColor = theme === "dark" ? "bg-[#192517]" : "bg-white";

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

  const renderDefaultMenu = (menuName: string) => (
    <Card className="border-none shadow-lg">
      <CardContent className="p-8">
        <div
          className={`grid gap-8 ${
            megaMenuData[menuName].columns === 3
              ? "grid-cols-3"
              : megaMenuData[menuName].columns === 2
              ? "grid-cols-2"
              : "grid-cols-1"
          }`}
        >
          {megaMenuData[menuName].sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="space-y-4">
              <h3 className={`font-semibold ${textColor} text-sm uppercase tracking-wide opacity-70`}>
                {section.title}
              </h3>
              <div className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <Link
                    key={itemIndex}
                    href={item.href}
                    className="block group"
                    onClick={() => setActiveMenu(null)}
                  >
                    <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <span className="text-xl flex-shrink-0 mt-0.5">
                        {item.icon}
                      </span>
                      <div className="flex-1">
                        <h4 className={`font-medium ${textColor} text-base group-hover:text-[#66db4a] transition-colors`}>
                          {item.name}
                        </h4>
                        <p className={`text-sm ${textColor} opacity-70 mt-1 leading-relaxed`}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

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
          className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-50 ${
            activeMenu === "Products" ? "" : `${bgColor} border border-gray-200 rounded-lg shadow-lg min-w-[600px]`
          }`}
          onMouseEnter={handleMenuMouseEnter}
          onMouseLeave={handleMenuMouseLeave}
        >
          {activeMenu === "Products" ? renderProductsMenu() : renderDefaultMenu(activeMenu)}
        </div>
      )}
    </div>
  );
};