/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    // Remove the experimental section since we're not using server actions
}

module.exports = nextConfig