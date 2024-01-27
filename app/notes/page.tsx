import Link from 'next/link';
import React from 'react';
import { allNotes as allPosts } from 'contentlayer/generated';
import { Navigation } from '../components/nav';
import { Card } from '../components/card';
import { Article } from './article';
import { Redis } from '@upstash/redis';
import { Eye } from 'lucide-react';
import page from './about';

const redis = Redis.fromEnv();

export const revalidate = 60;
export default async function PostsPage() {
	const views = (
		await redis.mget<number[]>(
			...allPosts.map((p) => ['pageviews', page.name, p.slug].join(':')),
		)
	).reduce(
		(acc, v, i) => {
			acc[allPosts[i].slug] = v ?? 0;
			return acc;
		},
		{} as Record<string, number>,
	);

	const featuredPosts = allPosts
		.filter((p) => p.featured && p.featured > 0)
		.sort((a, b) => (a.featured ?? 0) - (b.featured ?? 0));

	const sorted = allPosts
		.filter((p) => p.published)
		.filter((post) => post.featured < 0)
		.sort(
			(a, b) =>
				new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
				new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
		);

	const postColumn = (n: number) => {
		return sorted
			.filter((_, i) => i % 3 === n)
			.map((post) => (
				<Card key={post.slug}>
					<Article post={post} views={views[post.slug] ?? 0} />
				</Card>
			));
	};

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
					<Card>
						<Link href={`/${page.name}/${featuredPosts[0].slug}`}>
							<article className="relative h-full w-full p-4 md:p-8">
								<div className="flex items-center justify-between gap-2">
									<div className="text-xs text-zinc-100">
										{featuredPosts[0].date ? (
											<time
												dateTime={new Date(
													featuredPosts[0].date,
												).toISOString()}
											>
												{Intl.DateTimeFormat(undefined, {
													dateStyle: 'medium',
												}).format(new Date(featuredPosts[0].date))}
											</time>
										) : (
											<span>SOON</span>
										)}
									</div>
									<span className="flex items-center gap-1 text-xs text-zinc-500">
										<Eye className="h-4 w-4" />{' '}
										{Intl.NumberFormat('en-US', { notation: 'compact' }).format(
											views[featuredPosts[0].slug] ?? 0,
										)}
									</span>
								</div>

								<h2
									id="featured-post"
									className="mt-4 font-display text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl"
								>
									{featuredPosts[0].title}
								</h2>
								<p className="mt-4 leading-8 text-zinc-400 duration-150 group-hover:text-zinc-300">
									{featuredPosts[0].description}
								</p>
								<div className="absolute bottom-4 md:bottom-8">
									<p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
										Read more <span aria-hidden="true">&rarr;</span>
									</p>
								</div>
							</article>
						</Link>
					</Card>

					<div className="mx-auto flex w-full flex-col gap-8 border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
						{featuredPosts.slice(1).map((post) => (
							<Card key={post.slug}>
								<Article post={post} views={views[post.slug] ?? 0} />
							</Card>
						))}
					</div>
				</div>
				<div className="hidden h-px w-full bg-zinc-800 md:block" />

				<div className="mx-auto grid grid-cols-1 gap-4 md:grid-cols-3 lg:mx-0">
					{[0, 1, 2].map((n) => (
						<div className="grid grid-cols-1 gap-4">{postColumn(n)}</div>
					))}
				</div>
			</div>
		</div>
	);
}
