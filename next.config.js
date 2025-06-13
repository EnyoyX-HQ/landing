/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable SWC for better performance
  swcMinify: true,
  
  // Image configuration
  images: {
    domains: ['images.pexels.com'],
    unoptimized: true
  },
  
  // Development configuration
  reactStrictMode: true,
  
  // Ensure proper file watching in development
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      }
    }
    return config
  },
  
  // For production builds (commented out for development)
  // trailingSlash: true,
  // output: 'export',
  // distDir: 'out',
  // generateEtags: false,
  // poweredByHeader: false
}

module.exports = nextConfig