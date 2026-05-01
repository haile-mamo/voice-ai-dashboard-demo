/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 1. የ TypeScript ስህተቶችን በ Build ሰዓት ችላ እንዲል ያደርገዋል
  typescript: {
    ignoreBuildErrors: true,
  },
  // 2. የ ESLint ስህተቶችን በ Build ሰዓት ችላ እንዲል ያደርገዋል
  eslint: {
    ignoreDuringBuilds: true,
  },
  // 3. Static Rendering ችግሮችን ለማለፍ ይረዳል
  output: 'standalone',
};

export default nextConfig;