import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const reportsDirectory = path.join(process.cwd(), 'content/reports')

export interface ReportMeta {
  slug: string
  title: string
  date: string
  description?: string
  tags?: string[]
  [key: string]: unknown
}

export interface Report extends ReportMeta {
  content: string
}

export function getReportSlugs(): string[] {
  try {
    return fs.readdirSync(reportsDirectory)
  } catch {
    return []
  }
}

export function getReportBySlug(slug: string): Report | null {
  try {
    const realSlug = slug.replace(/\.md$/, '')
    const fullPath = path.join(reportsDirectory, `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    return {
      slug: realSlug,
      title: data.title || realSlug,
      date: data.date || '',
      description: data.description,
      tags: data.tags,
      content,
      ...data,
    }
  } catch {
    return null
  }
}

export function getReports(): ReportMeta[] {
  const slugs = getReportSlugs()
  
  const reports = slugs
    .map((slug) => {
      const report = getReportBySlug(slug)
      if (!report) return null
      const { content, ...meta } = report
      return meta
    })
    .filter((report): report is ReportMeta => report !== null)
    .sort((a, b) => {
      if (!a.date || !b.date) return 0
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })

  return reports
}
