'use client'

import { useState, useEffect } from 'react'

export default function Terminal() {
  const [cursorVisible, setCursorVisible] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setCursorVisible(v => !v)
    }, 500)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="rounded-xl bg-gray-950 border border-gray-800 overflow-hidden font-mono text-sm">
      <div className="flex items-center gap-2 px-4 py-2 bg-gray-900 border-b border-gray-800">
        <span className="w-3 h-3 rounded-full bg-red-500"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
        <span className="w-3 h-3 rounded-full bg-green-500"></span>
        <span className="ml-4 text-gray-500 text-xs">benchmarkmd@atlas:~/monitor</span>
      </div>
      
      <div className="p-4 space-y-2">
        <div className="text-gray-400">
          <span className="text-green-400">$</span>
          <span className="ml-2">./benchmark --scan --network</span>
        </div>
        
        <div className="text-gray-300 pl-4">
          <span className="text-gray-600">[00:14:22]</span>
          <span className="ml-2 px-1.5 py-0.5 text-xs rounded bg-gray-800 text-gray-400">SYSTEM</span>
          <span className="ml-2">Initializing public agent network monitor... OK</span>
        </div>
        
        <div className="text-gray-300 pl-4">
          <span className="text-gray-600">[00:14:23]</span>
          <span className="ml-2 px-1.5 py-0.5 text-xs rounded bg-yellow-500/10 text-yellow-400">ANALYSIS</span>
          <span className="ml-2">847 agents scanned | 23 anomalous | 3 critical</span>
        </div>
        
        <div className="text-gray-400 pt-2">
          <span className="text-green-400">$</span>
          <span className="ml-2 inline-block w-2 h-4 bg-green-400" style={{ opacity: cursorVisible ? 1 : 0 }}></span>
        </div>
      </div>
    </div>
  )
}
