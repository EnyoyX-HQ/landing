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
            href: "#",
            description: "Fast access to working capital through invoice financing",
            icon: "💰",
          },
        ],
      },
      {
        items: [
          {
            name: "Insurance",
            href: "/insurance",
            description: "Comprehensive health insurance coverage",
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
            name: "For healthcare providers",
            href: "#",
            description: "Accelerate cash flow from insurance reimbursements",
            icon: "🏥",
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
            href: "#",
            description: "Frequently asked questions and answers",
            icon: "❓",
          },
          {
            name: "Developers",
            href: "#",
            description: "API documentation and integration guides",
            icon: "👨‍💻",
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
            href: "#",
            description: "Learn about our mission and vision",
            icon: "🏢",
          },
          {
            name: "Careers",
            href: "#",
            description: "Join our growing team",
            icon: "💼",
          },
          {
            name: "Partners",
            href: "#",
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

  const textColor = theme === "dark" ? "text-white" : "text-[#141515]";
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
        
        {/* Developers - Simple link without dropdown */}
        <div className="flex items-center gap-1">
          <Link 
            href="#"
            className={`font-normal ${textColor} text-base tracking-[-0.35px] leading-6 whitespace-nowrap hover:opacity-80 transition-opacity`}
          >
            Developers
          </Link>
        </div>
      </nav>

      {/* Mega Menu Dropdown */}
      {activeMenu && (
        <div
          className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-50 ${bgColor} border border-gray-200 rounded-lg shadow-lg min-w-[600px]`}
          onMouseEnter={handleMenuMouseEnter}
          onMouseLeave={handleMenuMouseLeave}
        >
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <div
                className={`grid gap-8 ${
                  megaMenuData[activeMenu].columns === 3
                    ? "grid-cols-3"
                    : megaMenuData[activeMenu].columns === 2
                    ? "grid-cols-2"
                    : "grid-cols-1"
                }`}
              >
                {megaMenuData[activeMenu].sections.map((section, sectionIndex) => (
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
        </div>
      )}
    </div>
  );
};