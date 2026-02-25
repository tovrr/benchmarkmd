import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-8 px-6 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm">
          © 2026 BenchmarkMD — <span className="text-red-500">Zero Hype, Maximum Reality</span>
        </p>
        
        <div className="flex items-center gap-6">
          <Link 
            href="https://github.com/tovrr/benchmarkmd" 
            className="text-gray-400 hover:text-white text-sm transition-colors"
          >
            GitHub
          </Link>
          <Link 
            href="/LICENSE" 
            className="text-gray-400 hover:text-white text-sm transition-colors"
          >
            License
          </Link>
        </div>
      </div>
    </footer>
  )
}
