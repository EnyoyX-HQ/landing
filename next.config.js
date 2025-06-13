/** @type {import('next').NextConfig} */
const nextConfig = {
  // Force Next.js to use Babel instead of SWC
  swcMinify: false,
  compiler: {
    // Disable SWC compiler
    removeConsole: false,
  },
  experimental: {
    // Disable SWC in experimental features
    forceSwcTransforms: false,
  },
  images: {
    domains: ['images.pexels.com'],
    unoptimized: true
  },
  // Remove static export settings for development
  // trailingSlash: true,
  // output: 'export',
  // distDir: 'out',
  // generateEtags: false,
  // poweredByHeader: false
}

module.exports = nextConfig