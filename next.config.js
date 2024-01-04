/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.egyptfortravel.com",
      },
      {
        protocol: "https",
        hostname: "www.egyptfortravel.com",
      },
    ],
  },
};

module.exports = nextConfig;
