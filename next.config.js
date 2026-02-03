const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/admin',
        destination: '/admin/index.html',
      },
      {
        source: '/admin/',
        destination: '/admin/index.html',
      },
    ];
  },
  images: {
    domains: ['github.com'],
  },

}

module.exports = nextConfig
