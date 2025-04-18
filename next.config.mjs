/** @type {import('next').NextConfig} */
const nextConfig = { 
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // Add a specific configuration for server-side rendering
  experimental: {
    // This improves how Next.js handles certain browser-specific libraries during SSR
    esmExternals: 'loose'
  },
  // Carefully control which dependencies are included in the server bundle
  transpilePackages: [
    'react-lottie', 
    'three', 
    'three-globe',
    'framer-motion'
  ],
  webpack: (config) => {
    // Create fallbacks for browser-specific globals
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      module: false,
      path: false,
      os: false,
      crypto: false,
    };
    
    return config;
  },
};

export default nextConfig;
