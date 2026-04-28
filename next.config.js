/** @type {import('next').NextConfig} */
const nextConfig = {
  // Mode standalone pour Docker
  output: 'standalone',

  poweredByHeader: false,

  // Images optimisées
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 jours
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Compression gzip/brotli
  compress: true,
}

module.exports = nextConfig
