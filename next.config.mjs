/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn-icons-png.flaticon.com'
            },
            {
                protocol: 'https',
                hostname: 'img.icons8.com'
            },
            {
                protocol: 'https',
                hostname: 'cdn.iconscout.com'
            },
            {
                protocol: 'https',
                hostname: 'www.cdnlogo.com'
            },
            {
                protocol: 'https',
                hostname: 'static-00.iconduck.com'
            },
        ]
    }
};
export default nextConfig;
