import { Redis } from '@upstash/redis';
import { useMemo } from 'react';
import { Card } from '@/app/_components/card';
import Mainpost from '@/app/_components/mainpost';
import { Navigation } from '@/app/_components/nav';

import { Blog as Post, allBlogs as allPosts, blog_page as page } from '@/app/_components/about';

import Article from '@/app/_components/article';

const redis = Redis.fromEnv();

export const revalidate = 60;

const PostColumn = ({ posts, views }: { posts: Post[]; views: any }) => {
	const columns = useMemo(() => {
		const column = (n: number) => {
			return posts
				.filter((_: any, i: number) => i % 3 === n)
				.map((post: Post) => (
					<Card key={post.slug}>
						<Article page={page} post={post} views={views[post.slug]} />
					</Card>
				));
		};

		return [0, 1, 2].map((n) => (
			<div key={`g${n}`} className="grid grid-cols-1 gap-4">
				{column(n)}
			</div>
		));
	}, [posts, views]);

	return <>{columns}</>;
};

export default async function PostsPage() {
	const views = (
		await redis.mget<number[]>(
			...allPosts.map((p: Post) => ['viewcount', page.name, p.slug].join(':')),
		)
	).reduce(
		(acc, v, i) => {
			acc[allPosts[i].slug] = v ?? 0;
			return acc;
		},
		{} as Record<string, number>,
	);

	const featuredPosts = allPosts
		.filter((p: Post) => p.featured && p.featured > 0)
		.sort((a: Post, b: Post) => (a.featured ?? 0) - (b.featured ?? 0));

	const sorted = allPosts
		.filter((p: Post) => p.published)
		.filter((post: Post) => post.featured < 0)
		.sort(
			(a: Post, b: Post) =>
				new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
				new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
		);

	return (
		<div className="relative pb-16">
			<Navigation />
			<div className="mx-auto max-w-7xl space-y-8 px-6 pt-20 md:space-y-16 md:pt-24 lg:px-8 lg:pt-32">
				<div className="mx-auto max-w-2xl lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
						{page.title}
					</h2>
					<p className="mt-4 text-zinc-400">{page.description}</p>
				</div>
				<div className="h-px w-full bg-zinc-800" />

				<div className="mx-auto grid grid-cols-1 gap-8 lg:grid-cols-2 ">
					<Mainpost
						page={page}
						mainPost={featuredPosts[0]}
						views={views[featuredPosts[0].slug]}
					/>

					<div className="mx-auto flex w-full flex-col gap-8 border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
						{featuredPosts.slice(1).map((post: Post) => (
							<Card key={post.slug}>
								<Article page={page} post={post} views={views[post.slug] ?? 0} />
							</Card>
						))}
					</div>
				</div>
				<div className="hidden h-px w-full bg-zinc-800 md:block" />

				<div className="mx-auto grid grid-cols-1 gap-4 md:grid-cols-3 lg:mx-0">
					<PostColumn posts={sorted} views={views} />
				</div>
			</div>
		</div>
	);
}
