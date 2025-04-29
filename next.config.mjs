/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.resolve.fallback = {
            ...config.resolve.fallback,
            buffer: require.resolve('buffer/'),
            electron: false,
        };
        return config;
    },
    images: {
        domains: ['gateway.pinata.cloud'], // Add this line to allow external image source
    },
};

export default nextConfig;
