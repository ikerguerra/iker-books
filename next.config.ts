/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  // Enable static exports for better SEO
  output: 'standalone',
};

export default nextConfig;
