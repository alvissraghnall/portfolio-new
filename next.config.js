/** @type {import('next').NextConfig} */
const nextConfig = {
    onDemandEntries: {
        maxInactiveAge: 1000 * 60 * 7,
        pagesBufferLength: 2
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',

            }

        ]
    }
}

module.exports = nextConfig
