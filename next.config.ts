/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",// used when images are uploaded to server
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "instagram.fpnq13-1.fna.fbcdn.net",
      },
      
    ],
  },
};

module.exports = nextConfig;