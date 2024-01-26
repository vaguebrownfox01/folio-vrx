import { notFound } from 'next/navigation';
import { allProjects as allPosts } from 'contentlayer/generated';
import { Mdx } from '@/app/components/mdx';
import { Header } from './header';
import './mdx.css';
import { ReportView } from './view';
import { Redis } from '@upstash/redis';

const page = 'projects';

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

	const views = (await redis.get<number>(['pageviews', page, slug].join(':'))) ?? 0;

	return (
		<div className="min-h-screen bg-zinc-50">
			<Header post={post} views={views} />
			<ReportView slug={post.slug} />

			<article className="prose prose-zinc prose-quoteless mx-auto px-4 py-12">
				<Mdx code={post.body.code} />
			</article>
		</div>
	);
}
