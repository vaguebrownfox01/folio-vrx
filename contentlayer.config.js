import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
	path: {
		type: 'string',
		resolve: (doc) => `/${doc._raw.flattenedPath}`,
	},
	slug: {
		type: 'string',
		resolve: (doc) => {
			// console.log("path", `/${doc._raw.flattenedPath}`)
			// console.log("slug", doc._raw.flattenedPath.split('/').slice(-1).join('/'))
			return doc._raw.flattenedPath.split('/').slice(-1).join('/')
		},
	},
}

export const Project = defineDocumentType(() => ({
	name: 'Project',
	filePathPattern: './projects/**/*.mdx',
	contentType: 'mdx',

	fields: {
		published: {
			type: 'boolean',
		},
		featured: {
			type: 'number',
			default: -1,
		},
		title: {
			type: 'string',
			required: true,
		},
		description: {
			type: 'string',
			required: true,
		},
		date: {
			type: 'date',
		},
		url: {
			type: 'string',
		},
		repository: {
			type: 'string',
		},
		tags: {
			type: 'list',
			of: { type: 'string' },
		},
	},
	computedFields,
}))

export const Art = defineDocumentType(() => ({
	name: 'Art',
	filePathPattern: './art/**/*.mdx',
	contentType: 'mdx',

	fields: {
		published: {
			type: 'boolean',
		},
		featured: {
			type: 'number',
			default: -1,
		},
		title: {
			type: 'string',
			required: true,
		},
		description: {
			type: 'string',
			required: true,
		},
		date: {
			type: 'date',
		},
		url: {
			type: 'string',
		},
		repository: {
			type: 'string',
		},
		tags: {
			type: 'list',
			of: { type: 'string' },
		},
	},
	computedFields,
}))

export const Blog = defineDocumentType(() => ({
	name: 'Blog',
	filePathPattern: './blogs/**/*.mdx',
	contentType: 'mdx',

	fields: {
		published: {
			type: 'boolean',
		},
		featured: {
			type: 'number',
			default: -1,
		},
		title: {
			type: 'string',
			required: true,
		},
		description: {
			type: 'string',
			required: true,
		},
		date: {
			type: 'date',
		},
		url: {
			type: 'string',
		},
		repository: {
			type: 'string',
		},
		tags: {
			type: 'list',
			of: { type: 'string' },
		},
	},
	computedFields,
}))

export const Note = defineDocumentType(() => ({
	name: 'Note',
	filePathPattern: './notes/**/*.mdx',
	contentType: 'mdx',

	fields: {
		published: {
			type: 'boolean',
		},
		featured: {
			type: 'number',
			default: -1,
		},
		title: {
			type: 'string',
			required: true,
		},
		description: {
			type: 'string',
			required: true,
		},
		date: {
			type: 'date',
		},
		url: {
			type: 'string',
		},
		repository: {
			type: 'string',
		},
		tags: {
			type: 'list',
			of: { type: 'string' },
		},
	},
	computedFields,
}))

export const Page = defineDocumentType(() => ({
	name: 'Page',
	filePathPattern: 'pages/**/*.mdx',
	contentType: 'mdx',
	fields: {
		title: {
			type: 'string',
			required: true,
		},
		description: {
			type: 'string',
		},
	},
	computedFields,
}))

export default makeSource({
	contentDirPath: './content',
	documentTypes: [Page, Project, Blog, Art, Note],
	mdx: {
		remarkPlugins: [remarkGfm],
		rehypePlugins: [
			rehypeSlug,
			[
				rehypePrettyCode,
				{
					theme: 'github-dark',
					onVisitLine(node) {
						// Prevent lines from collapsing in `display: grid` mode, and allow empty
						// lines to be copy/pasted
						if (node.children.length === 0) {
							node.children = [{ type: 'text', value: ' ' }]
						}
					},
					onVisitHighlightedLine(node) {
						node.properties.className.push('line--highlighted')
					},
					onVisitHighlightedWord(node) {
						node.properties.className = ['word--highlighted']
					},
				},
			],
			[
				rehypeAutolinkHeadings,
				{
					properties: {
						className: ['subheading-anchor'],
						ariaLabel: 'Link to section',
					},
				},
			],
		],
	},
})
