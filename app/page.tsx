'use client'

import Link from 'next/link'
import Terminal from '@/components/Terminal'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-mono mb-6">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            ATLAS ACTIVE
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            We Measure.<br />
            <span className="text-gray-500">You Decide.</span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Independent benchmarks, real-world cost analysis, and the uncomfortable truths about AI agents.
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <Link 
              href="/tool" 
              className="px-6 py-3 bg-red-500 text-black font-semibold rounded-lg hover:bg-red-400 transition-colors"
            >
              Run Benchmark
            </Link>
            <Link 
              href="/reports" 
              className="px-6 py-3 border border-gray-700 text-gray-300 font-semibold rounded-lg hover:border-gray-500 transition-colors"
            >
              Reports
            </Link>
            <Link 
              href="/docs" 
              className="px-6 py-3 border border-gray-700 text-gray-300 font-semibold rounded-lg hover:border-gray-500 transition-colors"
            >
              Docs
            </Link>
          </div>
        </div>
      </section>

      {/* Terminal Section */}
      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Terminal />
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">What We Do</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-red-500/50 transition-colors">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-lg font-semibold mb-2">Benchmark Tool</h3>
              <p className="text-gray-400 text-sm">Test AI agents on real tasks. Get instant results.</p>
            </div>
            
            <div className="p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-red-500/50 transition-colors">
              <div className="text-3xl mb-4">💰</div>
              <h3 className="text-lg font-semibold mb-2">Cost Analysis</h3>
              <p className="text-gray-400 text-sm">The hidden bill nobody talks about. We expose the real cost.</p>
            </div>
            
            <div className="p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-red-500/50 transition-colors">
              <div className="text-3xl mb-4">🔍</div>
              <h3 className="text-lg font-semibold mb-2">Post-Mortems</h3>
              <p className="text-gray-400 text-sm">When AI projects fail, we document why. Lessons learned.</p>
            </div>
            
            <div className="p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-red-500/50 transition-colors">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-lg font-semibold mb-2">The Hype Filter</h3>
              <p className="text-gray-400 text-sm">"Revolutionary" claims? We ask:Where's the data?</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to benchmark?</h2>
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

      {/* Manifesto */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-mono mb-6">
            "We measure. You decide."
          </blockquote>
          <p className="text-gray-400">
            We're not anti-AI. We're pro-reality. The data speaks — we just make sure it's not lying.
          </p>
        </div>
      </section>
    </div>
  )
}
