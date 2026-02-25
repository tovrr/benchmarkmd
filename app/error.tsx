'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center p-8">
        <h2 className="text-3xl font-bold text-red-500 mb-4">Something went wrong!</h2>
        <p className="text-gray-400 mb-8">An unexpected error occurred.</p>
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-400 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  )
}
