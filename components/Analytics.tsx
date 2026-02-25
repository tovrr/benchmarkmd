'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

// Free analytics options for BenchmarkMD:
// 1. Umami (self-hosted or cloud) - https://umami.is
// 2. Fathom Lite (open source) - https://github.com/usefathom/fathom
// 3. Ackee (self-hosted) - https://ackee.electerious.com
// 4. Plausible (paid but affordable) - https://plausible.io
// 5. Google Analytics (free but not privacy-friendly)

export default function Analytics() {
  const pathname = usePathname()

  // Simple pageview tracking - can be connected to any analytics service
  useEffect(() => {
    // Track pageview
    console.log('[Analytics] Page view:', pathname)
    
    // TODO: Connect to your preferred analytics service
    // 
    // Option 1: Umami (recommended - free, privacy-friendly)
    // fetch('https://umami.example.com/api/collect', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ websiteId: 'xxx', url: pathname })
    // })
    //
    // Option 2: Custom endpoint
    // fetch('/api/analytics', { method: 'POST', body: JSON.stringify({ path: pathname }) })
    //
    // Option 3: Plausible (paid)
    // Already in head, just add data-domain attribute
    //
    // Option 4: PostHog (free tier available)
    // posthog.capture('pageview')
  }, [pathname])

  return null
}
