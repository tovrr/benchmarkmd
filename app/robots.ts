import { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Robots.txt',
  metadataBase: new URL('https://benchmarkmd.ai'),
}

export default function robots() {
  return {
    rules: [
      // Allow all search engines
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',      // Block API routes
          '/admin/',    // Block admin routes
        ],
      },
      // Specific rules for AI bots - optionally block them
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'Google-Extended',
          'AdsBot-Google',
          'Applebot',
          'Baiduspider',
          'Bingbot',
          'DuckDuckBot',
          'FacebookBot',
          'Slurp',
          'YandexBot',
        ],
        allow: '/',
        disallow: '/api/',
      },
      // Block known AI training scrapers (optional - uncomment if desired)
      // {
      //   userAgent: [
      //     'CCBot',
      //     'Omgilibot',
      //     'OAI-SearchBot',
      //   ],
      //   disallow: '/',
      // },
    ],
    sitemap: 'https://benchmarkmd.ai/sitemap.xml',
  }
}
