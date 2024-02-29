'use_client';

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
		name: 'who?',
		href: '/who',
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
	description: 'A few art projects I have worked on...',
};

export const blog_page: page = {
	name: 'blogs',
	title: 'Blogs',
	description: 'Long posts about my thoughts...',
};

export const note_page: page = {
	name: 'notes',
	title: 'Notes',
	description: 'collecting truths...',
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

export const n_months = (dateString: string = '1998-01-31') => {
	const givenDate = new Date(dateString);
	const currentDate = new Date();
	const timeDifference =
		currentDate.getTime() - givenDate.getTime();
	const monthsDifference =
		timeDifference / (1000 * 60 * 60 * 24 * 30.4375);
	const roundedMonthsDifference = Math.round(monthsDifference);
	return roundedMonthsDifference;
};

export const months = n_months();
export const ratio = `${n_months()} of ${n_months() - n_months('2033-01-31')}`;
export const mori = `a glimmering speck of dust for every month of my life thus far`;

const art_tags = {
	'env.vua': 'xxx-violet-400',
	jxp: 'xxx-pink-300',
	fau: 'xxx-red-400',

	concepts: 'xxx-orange-300',
	sketchbook: 'xxx-amber-800',
	procreate: 'xxx-pink-500',

	illustration: 'xxx-yellow-400',
	practice: 'xxx-gray-400',
	design: 'xxx-purple-400',
	paper: 'xxx-white',
};

const project_tags = {
	'spire-lab': 'xxx-orange-400',

	'data-collection': 'xxx-yellow-500',
	'react-js': 'xxx-cyan-400',
	'bio-medical': 'xxx-red-200',
	'product-design': 'xxx-pink-300',
	'machine-learning': 'xxx-yellow-300',
	klatt: 'xxx-green-400',

	'signal-processing': 'xxx-violet-400',
	'speech-processing': 'xxx-orange-500',
	'ml-ops': 'xxx-yellow-400',
	fusion360: 'xxx-orange-200',
	'web-app': 'xxx-green-400',
	matlab: 'xxx-orange-400',
	firebase: 'xxx-yellow-600',
	webpage: 'xxx-green-200',
	'UI/UX': 'xxx-cyan-600',
	'raspberry-pi': 'xxx-pink-500',
	event: 'xxx-yellow-400',
	'embedded-sys': 'xxx-violet-400',

	'app-dev': 'xxx-blue-500',
	android: 'xxx-green-500',

	python: 'xxx-blue-400',
	c: 'xxx-pink-500',

	gratitude: 'xxx-white',
	'user-research': 'xxx-white',
};

const note_tags = {
	flow: 'xxx-white',
};

const tag_colors = {
	...art_tags,
	...project_tags,
	...note_tags,
};

const colorFormat = (tagColors: object) => {
	// Create a new object to avoid modifying the original
	const tagClass: { [key: string]: string } = {};

	// Iterate over original object and update values
	for (const [key, value] of Object.entries(tagColors)) {
		tagClass[key] =
			`${value.replace('xxx', 'border')} ${value.replace('xxx', 'text')}`;
	}

	// Return the new object

	// console.log(tagClass);
	return tagClass;
};

export const tag_class = colorFormat(tag_colors);
