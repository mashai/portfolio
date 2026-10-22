import type { NextConfig } from 'next';

const isDev = process.env.NODE_ENV === 'development';

const nextConfig: NextConfig = {
  images: {
    minimumCacheTTL: isDev ? 0 : 60,
  },
};

export default nextConfig;
