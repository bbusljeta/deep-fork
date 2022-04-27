/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer');

const nextConfig = {
    reactStrictMode: true,
    async rewrites() {
        return [
            {
                source: '/post',
                destination: '/post?title=Some&action=edit',
            },
        ]
    },
    /* async redirects() {
        return [
            {
                source: '/about',
                destination: '/',
                permanent: true,
            },
        ]
    },
    async headers() {
        return [
            {
                source: '/about',
                headers: [
                    {
                        key: 'x-custom-header',
                        value: 'my custom header value',
                    },
                    {
                        key: 'x-another-custom-header',
                        value: 'my other custom header value',
                    },
                ],
            },
        ]
    }, */
    env: {
        customKey: 'my-value',
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
