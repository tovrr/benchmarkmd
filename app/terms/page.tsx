import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'BenchmarkMD Terms of Service.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="prose prose-invert prose-gray">
          <p className="text-gray-400 mb-6">Last updated: February 2026</p>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Acceptance of Terms</h2>
            <p className="text-gray-400">
              By using BenchmarkMD, you agree to these terms. If you disagree, 
              please do not use our services.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Use of Service</h2>
            <p className="text-gray-400">
              BenchmarkMD provides independent AI agent benchmarking. You may use 
              our tool for legitimate testing purposes. We reserve the right to 
              suspend access for misuse.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Intellectual Property</h2>
            <p className="text-gray-400">
              All content, benchmarks, and methodology on BenchmarkMD are our 
              intellectual property. You may not copy, modify, or distribute 
              our proprietary benchmarking data without permission.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Disclaimer</h2>
            <p className="text-gray-400">
              Benchmark results are provided for informational purposes. We strive 
              for accuracy but do not guarantee results. Use our data at your 
              own discretion.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Limitation of Liability</h2>
            <p className="text-gray-400">
              BenchmarkMD shall not be liable for any damages arising from use 
              of our services or reliance on benchmark data.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Contact</h2>
            <p className="text-gray-400">
              Questions? Contact us at{' '}
              <a href="mailto:info@benchmarkmd.ai" className="text-red-400 hover:underline">
                info@benchmarkmd.ai
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
