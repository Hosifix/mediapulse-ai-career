/** @type {import('next').NextConfig} */

// Базовые безопасные заголовки. Намеренно без жёсткого CSP, чтобы не сломать
// Vercel Analytics / Speed Insights, самостоятельно хостируемые шрифты,
// inline-SVG и CSS-анимации.
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  eslint: {
    // ESLint is intentionally not configured for this project.
    ignoreDuringBuilds: true,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
