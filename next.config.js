/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.crucerospornilo.com",
      },
      {
        protocol: "https",
        hostname: "www.crucerospornilo.com",
      },
    ],
  },
};

module.exports = nextConfig;
