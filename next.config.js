/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: 'export',
  basePath: '/ds',
  typescript: {
    ignoreBuildErrors: true,
  },
  assetPrefix: 'http://devandrew.com.br/ds/',
  // assetPrefix: 'http://localhost:3000/ds/',
  images: {
    path: '/<basepath>/_next/image',
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'devandrew.com.br/',
        port: '',
        pathname: '/ds/**',
      },
    ],
  }
}

module.exports = nextConfig
