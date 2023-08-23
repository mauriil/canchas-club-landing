/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    distDir: '_static',
    images: {
      unoptimized: true
    }
  }

export default nextConfig