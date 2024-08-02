/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['github.com', process.env.BE_URL.replace('https://', '')],
  },
}

export default nextConfig
