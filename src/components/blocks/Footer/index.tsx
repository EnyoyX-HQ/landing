"use client"

import { Logo } from "@/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import footerLinks from "@/lib/footerLinks";
import { EksellDisplay } from "@/components/elements/FontContainer"; /*${EksellDisplay.variable}*/
import { usePathname } from 'next/navigation'
interface FooterLinksProps {
  title: string;
  links: Links[];
}

interface Links {
  label: string;
  href: string;
}

const FooterLinks = ({ title, links }: FooterLinksProps) => {
  
  return (
    <div className="footer-link">
      <h3 className={``}>{title}</h3>
      <ul className="links">
        {links.map((item: any) => (
          <li key={item.label}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  const currentPath = usePathname()
  const vercelPath = /vercel\.app/.test(currentPath);
  return (
    <footer className="pt-24 bg-ex-deep-green">
      <div className="ex--container">
        <div className="flex flex-col lg:flex-row gap-14 lg:gap-40">
          <div className="footer-logo">
            <Link href="/">
              <Image src={Logo} className="w-32" alt="logo" />
            </Link>
          </div>
          <div className="flex-grow">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
              {footerLinks.map((item: any) => (
                <FooterLinks key={item.title} {...item} />
              ))}
            </div>
          </div>
        </div>

        <div className="copywrite flex flex-col md:flex-row items-center justify-between gap-5 py-10 text-slate-200 border-t border-yellow-200 opacity-25 mt-20">
          <p className="text-white">
            &copy;
            <Link href="/" target="_blank">
              Envoyx health
            </Link>
          </p>
          <div className="flex gap-10 text-white items-center">
            <ul className="flex items-center gap-2 list-none">
              <li className="list-none">
              {process.env.NODE_ENV === 'development' || vercelPath ? <a className="hover:underline underline-offset-4 decoration-white text-[14px] leading-[1.5] font-[400]" href="/">FR</a> : <a className="hover:underline underline-offset-4 decoration-white text-[14px] leading-[1.5] font-[400]" href="/fr">FR</a>}
                <span className="pl-2">•</span>
              </li>
              <li className="list-none">
                <a className="hover:underline underline-offset-4 decoration-white text-[14px] leading-[1.5] font-[400]" href="/">EN</a>
              </li>
            </ul>
            <div className="flex gap-5">
              <Link href={"/"}>Terms</Link>
              <Link href={"/"}>Privacy</Link>
              <Link href={"/"}>Cookies</Link>
            </div>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
