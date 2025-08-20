// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
    ],
    // Atau untuk pengaturan sederhana (Next.js 12+):
    domains: ['localhost'],
  },
}