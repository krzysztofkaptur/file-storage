/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'github.com',
      process.env.NEXT_PUBLIC_SUPABASE_URL.replace('https://', ''),
    ],
  },
}

export default nextConfig
