import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ChatWidget from '@/components/ChatWidget'
import Analytics from '@/components/Analytics'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const jetbrains = JetBrains_Mono({ 
  subsets: ['latin'], 
  variable: '--font-mono',
  weight: ['400', '500', '600'] 
})

// Dynamic metadataBase
const metadataBase = new URL('https://benchmarkmd.ai')

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: 'BenchmarkMD — We Measure. You Decide.',
    template: '%s | BenchmarkMD'
  },
  description: 'Independent AI agent benchmarking, real-world cost analysis, and uncomfortable truths about AI. Test AI agents, expose real costs, and separate hype from reality.',
  keywords: [
    'AI benchmarking',
    'AI agent performance', 
    'AI cost analysis',
    'LLM benchmarks',
    'AI testing',
    'agent evaluation',
    'AI ROI',
    'AI pricing'
  ],
  authors: [{ name: 'BenchmarkMD' }],
  creator: 'BenchmarkMD',
  publisher: 'BenchmarkMD',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'BenchmarkMD — We Measure. You Decide.',
    description: 'Independent AI agent benchmarking, real-world cost analysis, and uncomfortable truths about AI.',
    url: metadataBase.href,
    siteName: 'BenchmarkMD',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BenchmarkMD — We Measure. You Decide.',
    description: 'Independent AI agent benchmarking. Test agents, analyze costs, find reality.',
    creator: '@benchmarkmd',
    images: ['/LOGO.svg'],
  },
  verification: {
    google: 'google-site-verification-code',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', type: 'image/x-icon', sizes: 'any' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="min-h-screen bg-black text-gray-100 font-sans antialiased">
        <Analytics />
        <Header />
        <main id="main-content" className="pt-16" role="main">
          {children}
        </main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  )
}
