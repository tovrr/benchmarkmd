import Link from 'next/link'

export default function DocsPage() {
  const docs = [
    { href: '/docs/setup', title: 'Getting Started', desc: 'Quick start guide for setting up BenchmarkMD.' },
    { href: '/docs/api', title: 'API Reference', desc: 'Python API for running your own benchmarks.' },
    { href: '/docs/atlas', title: 'Atlas AI', desc: 'Our decision engine for autonomous analysis.' },
  ]

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Documentation</h1>
        <p className="text-gray-400 mb-12">
          Setup guides and API reference for BenchmarkMD.
        </p>

        <div className="space-y-4">
          {docs.map((doc) => (
            <Link
              key={doc.href}
              href={doc.href}
              className="block p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-red-500/50 transition-colors group"
            >
              <h2 className="text-xl font-semibold mb-2 group-hover:text-red-400 transition-colors">
                {doc.title}
              </h2>
              <p className="text-gray-400">{doc.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
