import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  trailingSlash: true,
  poweredByHeader: false,
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "DENY" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: "/es/casa", destination: "/es/", permanent: true },
      { source: "/es/casa/", destination: "/es/", permanent: true },
      { source: "/ru/casa", destination: "/ru/", permanent: true },
      { source: "/ru/casa/", destination: "/ru/", permanent: true },
      { source: "/category/blog", destination: "/guides/", permanent: true },
      { source: "/category/blog/", destination: "/guides/", permanent: true },
      { source: "/es/category/blog", destination: "/es/guias/", permanent: true },
      { source: "/es/category/blog/", destination: "/es/guias/", permanent: true },
      { source: "/ru/category/blog", destination: "/ru/stati/", permanent: true },
      { source: "/ru/category/blog/", destination: "/ru/stati/", permanent: true },
    ];
  },
};

export default nextConfig;
