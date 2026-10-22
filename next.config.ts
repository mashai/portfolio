import type { NextConfig } from 'next';

const isDev = process.env.NODE_ENV === 'development';

const nextConfig: NextConfig = {
  // Northflank runs the site as a standalone Node server in a Docker container — see Dockerfile.
  output: 'standalone',
  images: {
    minimumCacheTTL: isDev ? 0 : 60,
  },
};

export default nextConfig;
