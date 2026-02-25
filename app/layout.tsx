import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ChatWidget from '@/components/ChatWidget'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const jetbrains = JetBrains_Mono({ 
  subsets: ['latin'], 
  variable: '--font-mono',
  weight: ['400', '500', '600'] 
})

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: '/LOGO.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', type: 'image/x-icon' }
    ]
  },
  title: {
    default: 'BenchmarkMD — We Measure. You Decide.',
    template: '%s | BenchmarkMD'
  },
  description: 'Independent AI agent benchmarking, real-world cost analysis, and uncomfortable truths about AI.',
  keywords: ['AI benchmarking', 'agent performance', 'AI cost analysis', 'LLM benchmarks'],
  authors: [{ name: 'Omar' }],
  openGraph: {
    title: 'BenchmarkMD — We Measure. You Decide.',
    description: 'Independent AI agent benchmarking and cost analysis.',
    url: 'https://benchmarkmd.ai',
    siteName: 'BenchmarkMD',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BenchmarkMD',
    description: 'We measure. You decide.',
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
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  )
}
