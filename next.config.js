// next.config.js

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.fifacm.com",
        port: "",
        pathname: "/content/media/imgs/**",
      },
    ],
  },
};

module.exports = nextConfig;
