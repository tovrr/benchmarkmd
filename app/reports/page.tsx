import Link from 'next/link'
import { getReports } from '@/lib/reports'

export default function ReportsPage() {
  const reports = getReports()

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Intelligence Reports</h1>
        <p className="text-gray-400 mb-12">
          Independent analysis, benchmarks, and uncomfortable truths about AI agents.
        </p>

        <div className="space-y-4">
          {reports.map((report) => (
            <Link
              key={report.slug}
              href={`/reports/${report.slug}`}
              className="block p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-red-500/50 transition-colors group"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm text-gray-500 font-mono">
                      {report.date}
                    </span>
                    {report.tags?.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-0.5 text-xs rounded-full bg-red-500/10 text-red-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-xl font-semibold mb-2 group-hover:text-red-400 transition-colors">
                    {report.title}
                  </h2>
                  <p className="text-gray-400 text-sm line-clamp-2">
                    {report.description}
                  </p>
                </div>
                <span className="text-2xl">📄</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
