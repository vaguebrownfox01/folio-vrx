import type { Blogs as Post } from '@/.contentlayer/generated';
import { allBlogs as allPosts } from 'contentlayer/generated';

const page: { name: string; title: string; description: string } = {
	name: 'blogs',
	title: 'Blogs',
	description: 'Long posts about my thoughts...',
};

export { Post, allPosts, page };
