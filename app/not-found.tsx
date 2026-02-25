import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-red-500 mb-4">404</h1>
        <p className="text-xl text-gray-400 mb-8">Page not found</p>
        <Link 
          href="/" 
          className="text-red-500 hover:text-red-400 underline"
        >
          Return home
        </Link>
      </div>
    </div>
  )
}
