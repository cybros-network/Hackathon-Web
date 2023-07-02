/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "arweave.net"
      },
    ],
  },
  compiler: {
    styledComponents: true,
  },
  eslint: {
    ignoreDuringBuilds: process.env.CI === "false",
  },
};
https://arweave.net/jmHQQsTFTggmP6UjXyvYrfr62w7XtKZG3k0ZRZggnFI
module.exports = nextConfig;
