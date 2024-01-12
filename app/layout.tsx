import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SiteConfig } from '@/config/SiteConfig'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
 title: {
  default: SiteConfig.name,
  template: `%s | ${SiteConfig.name}`
  },
  description: SiteConfig.description,
  icons: [
    {
      url: '/images/logo.png',
      href: '/images/logo.png'
    }
  ]
 }


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  console.log({children})
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
