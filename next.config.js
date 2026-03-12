/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Important pour Docker : désactive le compression qui peut causer des soucis en dev
  compress: false,
  // Webpack config pour better hot reload dans Docker
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000,  // Check les changements toutes les secondes
        aggregateTimeout: 300,
      }
    }
    return config
  },
}

module.exports = nextConfig