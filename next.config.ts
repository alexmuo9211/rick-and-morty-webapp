import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [new URL('https://rickandmortyapi.com/api/**')],
  },
};

export default nextConfig;
