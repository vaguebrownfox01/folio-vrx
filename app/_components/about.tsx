import type { Art, Note, Blogs, Project } from '@/.contentlayer/generated';
import { allArts, allNotes, allBlogs, allProjects } from 'contentlayer/generated';

export type page = {
	name: string;
	title: string;
	description: string;
};

export type Props_article = {
	page: page;
	post: Art | Note | Blogs | Project;
	views: number;
};

export type Props_postcol = {
	page: page;
	Post: Art | Note | Blogs | Project;
	posts: Art[] | Note[] | Blogs[] | Project[];
	views: Record<string, number>;
};

export const art_page: page = {
	name: 'art',
	title: 'Art',
	description: 'My art stuff...',
};

export const blog_page: page = {
	name: 'blogs',
	title: 'Blogs',
	description: 'Long posts about my thoughts...',
};

export const note_page: page = {
	name: 'notes',
	title: 'Notes',
	description: 'Snippets of a few things I have learned...',
};

export const project_page: page = {
	name: 'projects',
	title: 'Projects',
	description:
		'designing pnoi-phone, a breath acoustic based biomedical device for monitoring asthma.',
};

export { Art, Note, Blogs, Project };

export { allArts, allNotes, allBlogs, allProjects };
