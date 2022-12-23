/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental : {
    appDir: true,
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'starwars-visualguide.com',
        port: '',
        pathname: '/assets/img/**/**',
      },
    ],
  },

}



module.exports = nextConfig
