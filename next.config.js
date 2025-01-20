/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  experimental: {
    esmExternals: false,
  },
  images: {
    domains: ["pub-3a63e4a193254663a7631829c69adb4a.r2.dev", "lh3.googleusercontent.com"],
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  redirects: async () => {
    return [
      {
        source: '/room/:roomId',  // The source route
        destination: 'https://app.tuft.in/room/:roomId',  // Use the named capture group
        permanent: true,
      }
    ]
  }
};

module.exports = nextConfig;
