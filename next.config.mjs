/** @type {import('next').NextConfig} */
const nextConfig = {
  // Let Vercel handle output natively
  output: 'standalone',
  
  // Disable x-powered-by header
  poweredByHeader: false,
  
  // TypeScript errors don't fail build
  typescript: {
    ignoreBuildErrors: false,
  },
}

export default nextConfig
