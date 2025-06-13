import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'EnvoyX - Digital Invoice Financing Platform',
  description: 'AI + data powered infrastructure: The future of B2B lending. Building AI-powered infrastructures for B2B lending in emerging markets.',
  keywords: 'invoice financing, B2B lending, fintech, Africa, working capital, cash flow',
  authors: [{ name: 'EnvoyX Inc.' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}