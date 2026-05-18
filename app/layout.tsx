import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Bangers } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })
const _bangers = Bangers({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PORTFOLIO // Manga Style',
  description: 'A personal manga-panel portfolio website with black and white ink aesthetics',
}

export const viewport: Viewport = {
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
