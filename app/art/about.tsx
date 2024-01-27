import type { Art as Post } from '@/.contentlayer/generated';
import { allArts as allPosts } from 'contentlayer/generated';

const page: { name: string; title: string; description: string } = {
	name: 'art',
	title: 'Art',
	description: 'My art stuff...',
};

export { Post, allPosts, page };
