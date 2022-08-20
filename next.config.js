/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}
module.exports = {
  images: {
    domains: ['imgur.com','i.imgur.com'],
  },
  nextConfig,
};
