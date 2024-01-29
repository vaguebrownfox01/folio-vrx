import type {
	Art,
	Note,
	Blog,
	Project,
} from '@/.contentlayer/generated';
import {
	allArts,
	allNotes,
	allBlogs,
	allProjects,
} from 'contentlayer/generated';

export const moniker = 'jeevan kylash';
export const email = 'jeevank@iisc.ac.in';
export const x_handle = 'vaguebrownfox_x';
export const git_handle = 'vaguebrownfox01';
export const tagline = 'Research Associate	•	SPIRE Lab	•	IISc Bangalore';

export const navs = [
	{
		name: 'art',
		href: '/posts/art',
	},
	{
		name: 'notes',
		href: '/posts/notes',
	},
	{
		name: 'projects',
		href: '/posts/projects',
	},
	{
		name: 'contact',
		href: '/contact',
	},
];

export type page = {
	name: string;
	title: string;
	description: string;
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

export type Props_article = {
	page: page;
	post: Art | Note | Blog | Project;
	views: number;
};

export { Art, Note, Blog, Project };
export { allArts, allNotes, allBlogs, allProjects };
