/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
  async redirects() {
    return [
      {
        source: "/cv",
        destination: "/about",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
