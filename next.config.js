/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer');

const nextConfig = {
    reactStrictMode: true,
    // compression will be done by nginx
    compress: false,
    experimental: {
        outputStandalone: true,
    },
    //trailingSlash: true, // /about => /about/
    /* webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // Important: return the modified config
        return config
      }, */
};

module.exports = withBundleAnalyzer({
    enabled: process.env.ANALYZE === "true"
})({ ...nextConfig })

//module.exports = nextConfig;
