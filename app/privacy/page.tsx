import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'BenchmarkMD Privacy Policy - How we handle your data.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-invert prose-gray">
          <p className="text-gray-400 mb-6">Last updated: February 2026</p>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Data We Collect</h2>
            <p className="text-gray-400">
              BenchmarkMD collects minimal data necessary for our benchmarking services. 
              We do not sell your personal data to third parties.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Benchmark Data</h2>
            <p className="text-gray-400">
              When you use our benchmark tool, we may collect anonymized task descriptions 
              and performance metrics to improve our services. No proprietary code or 
              sensitive data is stored.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Analytics</h2>
            <p className="text-gray-400">
              We use anonymous analytics to understand site usage. No personally 
              identifiable information is collected through analytics.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Cookies</h2>
            <p className="text-gray-400">
              We use essential cookies for site functionality. You can disable 
              cookies in your browser settings without affecting core functionality.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Contact</h2>
            <p className="text-gray-400">
              Questions about this policy? Contact us at{' '}
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
