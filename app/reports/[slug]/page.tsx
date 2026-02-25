import { getReportBySlug, getReportSlugs } from '@/lib/reports'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import Link from 'next/link'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getReportSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const report = getReportBySlug(slug)
  
  if (!report) return {}
  
  return {
    title: report.title,
    description: report.description,
  }
}

export default async function ReportPage({ params }: Props) {
  const { slug } = await params
  const report = getReportBySlug(slug)

  if (!report) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Report not found</h1>
          <Link href="/reports" className="text-red-500 hover:underline">
            Back to reports
          </Link>
        </div>
      </div>
    )
  }

  return (
    <article className="min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <Link 
          href="/reports"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
        >
          ← Back to Reports
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4 flex-wrap">
            <span className="text-sm text-gray-500 font-mono">{report.date}</span>
            {report.tags?.map((tag) => (
              <span 
                key={tag}
                className="px-2 py-0.5 text-xs rounded-full bg-red-500/10 text-red-400"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <h1 className="text-4xl font-bold mb-4">{report.title}</h1>
          
          {report.description && (
            <p className="text-xl text-gray-400">{report.description}</p>
          )}
        </header>

        <div className="prose prose-invert prose-red max-w-none">
          <MDXRemote 
            source={report.content} 
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
              }
            }} 
          />
        </div>
      </div>
    </article>
  )
}
