import { allBlogs as allPosts, blog_page as page } from '@/app/_components/about';
import Header from '@/app/_components/header';
import { Mdx } from '@/app/_components/mdx';
import { ReportView } from '@/app/_components/view';
import { Redis } from '@upstash/redis';
import { notFound } from 'next/navigation';
import './mdx.css';

export const revalidate = 60;
type Props = {
	params: {
		slug: string;
	};
};

const redis = Redis.fromEnv();

export async function generateStaticParams(): Promise<Props['params'][]> {
	return allPosts
		.filter((p) => p.published)
		.map((p) => ({
			slug: p.slug,
		}));
}

export default async function PostPage({ params }: Props) {
	const slug = params?.slug;
	const post = allPosts.find((post) => post.slug === slug);

	if (!post) {
		notFound();
	}

	const views = (await redis.get<number>(['viewcount', page.name, slug].join(':'))) ?? 0;

	return (
		<div className="min-h-screen bg-zinc-50">
			<Header page={page} post={post} views={views} />
			<ReportView pagename={page.name} slug={post.slug} />

			<article className="prose prose-zinc prose-quoteless mx-auto px-4 py-12">
				<Mdx code={post.body.code} />
			</article>
		</div>
	);
}
