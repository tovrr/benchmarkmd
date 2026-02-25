'use client'

import Link from 'next/link'
import Terminal from '@/components/Terminal'

// JSON-LD Structured Data for SoftwareApplication
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'BenchmarkMD',
  description: 'Independent AI agent benchmarking, real-world cost analysis, and uncomfortable truths about AI.',
  url: 'https://benchmarkmd.ai',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://benchmarkmd.ai/tool'
    },
    'query-input': 'required name=query'
  },
  publisher: {
    '@type': 'Organization',
    name: 'BenchmarkMD',
    logo: {
      '@type': 'ImageObject',
      url: 'https://benchmarkmd.ai/LOGO.svg'
    }
  }
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 px-4 md:px-6" aria-labelledby="hero-heading">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-mono mb-6" aria-label="Atlas AI 2.5">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" aria-hidden="true"></span>
            Atlas AI 2.5
          </div>
          
          {/* Headline */}
          <h1 
            id="hero-heading"
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
          >
            We Measure.<br />
            <span className="text-gray-500">You Decide.</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Independent benchmarks, real-world cost analysis, and the uncomfortable truths about AI agents.
          </p>
          
          {/* CTA Buttons - Only 2 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/tool" 
              className="px-8 py-3 bg-red-500 text-black font-semibold rounded-lg hover:bg-red-400 transition-colors w-full sm:w-auto"
            >
              Run Benchmark
            </Link>
            <Link 
              href="/reports" 
              className="px-8 py-3 border border-gray-700 text-gray-300 font-semibold rounded-lg hover:border-gray-500 hover:text-white transition-colors w-full sm:w-auto"
            >
              Reports
            </Link>
          </div>
        </div>
      </section>

      {/* Terminal Section */}
      <section className="py-12 px-4 md:px-6" aria-labelledby="demo-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="demo-heading" className="sr-only">Interactive Benchmark Demo</h2>
          <Terminal />
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-gray-900/50" aria-labelledby="services-heading">
        <div className="max-w-6xl mx-auto">
          <h2 id="services-heading" className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center">
            What We Do
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <article className="p-5 md:p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-red-500/50 transition-colors">
              <div className="text-3xl mb-4" aria-hidden="true">📊</div>
              <h3 className="text-lg font-semibold mb-2">Benchmark Tool</h3>
              <p className="text-gray-400 text-sm">Test AI agents on real tasks. Get instant results.</p>
            </article>
            
            <article className="p-5 md:p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-red-500/50 transition-colors">
              <div className="text-3xl mb-4" aria-hidden="true">💰</div>
              <h3 className="text-lg font-semibold mb-2">Cost Analysis</h3>
              <p className="text-gray-400 text-sm">The hidden bill nobody talks about. We expose the real cost.</p>
            </article>
            
            <article className="p-5 md:p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-red-500/50 transition-colors">
              <div className="text-3xl mb-4" aria-hidden="true">🔍</div>
              <h3 className="text-lg font-semibold mb-2">Post-Mortems</h3>
              <p className="text-gray-400 text-sm">When AI projects fail, we document why. Lessons learned.</p>
            </article>
            
            <article className="p-5 md:p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-red-500/50 transition-colors">
              <div className="text-3xl mb-4" aria-hidden="true">⚡</div>
              <h3 className="text-lg font-semibold mb-2">The Hype Filter</h3>
              <p className="text-gray-400 text-sm">"Revolutionary" claims? We ask: Where's the data?</p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-4 md:px-6" aria-labelledby="cta-heading">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="cta-heading" className="text-2xl md:text-3xl font-bold mb-4">
            Ready to benchmark?
          </h2>
          <p className="text-gray-400 mb-8">
            Test any AI agent on your own tasks. See the real cost and quality.
          </p>
          <Link 
            href="/tool" 
            className="inline-block px-8 py-4 bg-red-500 text-black font-semibold rounded-lg hover:bg-red-400 transition-colors"
          >
            Launch Tool (Beta)
          </Link>
        </div>
      </section>
    </div>
  )
}
