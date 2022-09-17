/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ["links.papareact.com", "image.tmdb.org", "rb.gy"],
	},
};

module.exports = nextConfig;
