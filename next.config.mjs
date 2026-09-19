/** @type {import('next').NextConfig} */
const nextConfig = {
  // Serve modern formats for the next/image-optimized assets.
  images: {
    formats: ["image/avif", "image/webp"],
    // Optimised variants are immutable per source file, so there is no reason to re-derive them.
    minimumCacheTTL: 31536000,
  },
  // Collapse the apex domain onto the canonical www host so link equity and crawl budget are not
  // split across two origins. Vercel also needs the apex added as a redirecting domain in the
  // project's Domains settings for this to apply to requests that never reach the app.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "homerehab.ge" }],
        destination: "https://www.homerehab.ge/:path*",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};

export default nextConfig;
