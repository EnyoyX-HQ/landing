import type { Metadata } from 'next'
import Script from 'next/script';
import { Open_Sans } from 'next/font/google';
import MantineSetup from '@/layout/MantineSetup';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Notifications } from '@mantine/notifications';
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
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
