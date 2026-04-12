/** @type {import('next').NextConfig} */
const nextConfig = {
  // Mode standalone pour Docker
  output: 'standalone',
  
  // Images optimisées
  images: {
    formats: ['image/webp', 'image/avif'],
  },
}

module.exports = nextConfig
