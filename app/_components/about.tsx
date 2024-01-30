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
	description: 'A few things I have worked on...',
};

export type Props_article = {
	page: page;
	post: Art | Note | Blog | Project;
	views: number;
};

export { Art, Note, Blog, Project };
export { allArts, allNotes, allBlogs, allProjects };

export const n_months = (dateString: string="1998-01-31") => {
    const givenDate = new Date(dateString);
    const currentDate = new Date();
    const timeDifference = currentDate.getTime() - givenDate.getTime();
    const monthsDifference = timeDifference / (1000 * 60 * 60 * 24 * 30.4375);
    const roundedMonthsDifference = Math.round(monthsDifference);
    return roundedMonthsDifference;
};

export const months = n_months()

export const mori = `::momento mori:: each glimmering speck of dust represents a month of my life thus far. ${n_months()}/${n_months() - n_months('2033-04-19')}`;