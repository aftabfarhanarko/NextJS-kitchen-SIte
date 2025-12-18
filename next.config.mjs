/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.themealdb.com",
        pathname: "/images/media/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
        pathname: "/api/portraits/**",
        search: "",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/food-detlise/:id",
        destination: "/food/:id",
        permanent: true,
      },
    ];
  },

  reactCompiler: true,
};

export default nextConfig;
