import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import MantineSetup from "@/layout/MantineSetup";
import "swiper/css";

const openSans = Open_Sans({
  weight: ["400", "500", "700"],
  style: "normal",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "EnvoyX - Unlock financial potentials and propel your business operations",
  description:
    "Bridge cash flow gaps and invest in your growth with flexible invoice finance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <MantineSetup>{children}</MantineSetup>
      </body>
    </html>
  );
}
