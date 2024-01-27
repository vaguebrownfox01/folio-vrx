import type { Note as Post } from '@/.contentlayer/generated';
import { allNotes as allPosts } from 'contentlayer/generated';


const page: { name: string; title: string; description: string } = {
	name: 'notes',
	title: 'Notes',
	description: 'Snippets of a few notes I have learned so far...',
};

export { Post, allPosts, page };