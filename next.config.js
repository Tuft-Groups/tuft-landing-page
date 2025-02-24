const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: '/groups/:path*',
        destination: 'https://app.tuft.in/groups/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
