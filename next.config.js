const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  eslint: {
    ignoreDuringBuilds: true, // ✅ disables ESLint during Vercel builds
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  },
};

module.exports = nextConfig;
