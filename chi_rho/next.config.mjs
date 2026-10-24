import createMDX from '@next/mdx';
import withPWA from '@ducanh2912/next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  
  images: {
    domains: ['js.stripe.com'],
  },
  
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://js.stripe.com",
              "style-src 'self' 'unsafe-inline' https://js.stripe.com https://fonts.googleapis.com",
              "img-src 'self' data: https://*.stripe.com",
              "font-src 'self' https://fonts.gstatic.com",
              "connect-src 'self' https://api.stripe.com",
              "frame-src 'self' https://js.stripe.com https://hooks.stripe.com"
            ].join('; ')
          }
        ]
      }
    ];
  },
  
  // Handle Stripe's module resolution
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false
    };
    return config;
  }
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

// Apply PWA and MDX configurations
export default withMDX(
  withPWA({
    ...nextConfig,
    pwa: {
      dest: 'public',
      register: true,
      skipWaiting: true,
      disable: process.env.NODE_ENV === 'development',
    },
    webpack: (config, { isServer }) => {
      if (!isServer) {
        // Service worker will be built to public/service-worker.js
        config.resolve.alias['@/service-worker'] = false;
      }
      return config;
    },
  })
);