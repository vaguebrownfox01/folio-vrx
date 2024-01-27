import { allProjects as allPosts } from 'contentlayer/generated';
import type { Project as Post } from '@/.contentlayer/generated';

const page: { name: string; title: string; description: string } = {
	name: 'projects',
	title: 'Projects',
	description: 'Some of the projects I have worked on.',
};

export { Post, allPosts, page };
