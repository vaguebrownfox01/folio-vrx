import type { Note as Post } from '@/.contentlayer/generated';
import { allNotes as allPosts } from 'contentlayer/generated';


const page: { name: string; title: string; description: string } = {
	name: 'notes',
	title: 'Notes',
	description: 'Snippets of a few things I have learned...',
};

export { Post, allPosts, page };