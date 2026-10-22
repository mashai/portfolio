import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Northflank runs the site as a standalone Node server in a Docker container — see Dockerfile.
  output: 'standalone',
};

export default nextConfig;
