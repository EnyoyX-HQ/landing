import type { Metadata } from 'next'
import Script from 'next/script';
import { Open_Sans } from 'next/font/google';
import MantineSetup from '@/layout/MantineSetup';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Notifications } from '@mantine/notifications';
// import { useEffect } from 'react';
//import { GoogleAnalytics } from '@next/third-parties/google'
import 'swiper/css'
import './globals.css'
import '@mantine/dates/styles.css'
import '@mantine/charts/styles.css'
import '@mantine/notifications/styles.css'

const openSans = Open_Sans({
  weight: ['400', '500', '700'],
  style: 'normal',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title:
    'EnvoyX - Unlock financial potentials and propel your business operations',
  description:
    'Bridge cash flow gaps and invest in your growth with flexible invoice finance.',
}
{/*<html lang={locale}>*/}
export default function RootLayout({
  children,
  //params: { locale }
}: Readonly<{
  children: React.ReactNode
  // params: {
  //   locale: string;
  // }
}>) {
  // const textToEmbed = "Designed & developed by Dennis Osafo 👉 https://linktr.ee/gribblez_nation"
  return (
    <html lang='en'>
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-KZ7THZC0BP" />
        {/* <Script
          id="embedded-text"
          dangerouslySetInnerHTML={{
            __html: "<p>Your embedded text here</p>"
          }}
        /> */}
        <Script id="google-analytics">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-KZ7THZC0BP');`}
        </Script>
      </head>
      <body className={openSans.className}>
        <MantineSetup>
          <Notifications position='top-center' />
          {children}
        </MantineSetup>
        <SpeedInsights />
      </body>
    </html>
  )
}
