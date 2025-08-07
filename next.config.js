/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove the experimental.appDir since it's now standard in newer Next.js versions
  images: {
    domains: ['localhost', 'vercel.app'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  }
  // Remove the env section if you're not using MongoDB or NextAuth
}

module.exports = nextConfig