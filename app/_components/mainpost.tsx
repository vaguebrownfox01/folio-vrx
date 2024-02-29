import { Eye } from 'lucide-react';
import Link from 'next/link';
import { Card } from '@/app/_components/card';
import { page } from '@/app/_components/about';
import { Tags } from './tag';

const MainPost = ({
	page,
	mainPost,
	views,
}: {
	page: page;
	mainPost: any;
	views: number;
}) => {
	return (
		<Card>
			<Link href={`/posts/${page.name}/${mainPost.slug}`}>
				<article className="relative h-full w-full p-4 md:p-8">
					<div className="flex items-center justify-between gap-2">
						<div className="text-xs text-zinc-100">
							{mainPost.date ? (
								<time
									dateTime={new Date(
										mainPost.date,
									).toISOString()}
								>
									{Intl.DateTimeFormat(undefined, {
										dateStyle: 'medium',
									}).format(
										new Date(mainPost.date),
									)}
								</time>
							) : (
								<span>soon</span>
							)}
						</div>
						<span className="flex items-center gap-1 text-xs text-zinc-500">
							<Eye className="h-4 w-4" />{' '}
							{Intl.NumberFormat('en-US', {
								notation: 'compact',
							}).format(views ?? 0)}
						</span>
					</div>

					<h2
						id="featured-post"
						className="mt-4 font-display text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl"
					>
						{mainPost.title}
					</h2>
					<div className="mt-2">
						<Tags tags={mainPost.tags?.reverse()} />
					</div>
					<p className="mt-4 leading-8 text-zinc-400 duration-150 group-hover:text-zinc-300">
						{mainPost.description}
					</p>

					<div className="absolute bottom-4 md:bottom-8">
						<p className="hidden font-extrabold text-zinc-200 underline underline-offset-4 hover:text-teal-200 lg:block">
							read more
							<span aria-hidden="true">...</span>
						</p>
					</div>
				</article>
			</Link>
		</Card>
	);
};

export default MainPost;
