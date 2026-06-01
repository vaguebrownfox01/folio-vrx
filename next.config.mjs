import { withContentlayer } from 'next-contentlayer';

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
	experimental: {
		mdxRs: true,
	},
	allowedDevOrigins: ['192.168.1.44'],
	turbopack: {},
};

export default withContentlayer(nextConfig);
