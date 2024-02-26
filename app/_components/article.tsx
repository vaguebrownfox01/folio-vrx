import Link from 'next/link';
import { Eye } from 'lucide-react';
import { Props_article } from '@/app/_components/about';
import { Tag } from './tag';

const Article: React.FC<Props_article> = ({ post, views, page }) => {
	return (
		<Link href={`/posts/${page.name}/${post.slug}`}>
			<article className="p-4 md:p-8">
				<div className="flex items-center justify-between gap-2 pb-2">
					<span className="drop-shadow-orange text-xs text-zinc-200 duration-1000 group-hover:border-zinc-200 group-hover:text-white">
						{post.date ? (
							<time
								dateTime={new Date(
									post.date,
								).toISOString()}
							>
								{Intl.DateTimeFormat(undefined, {
									dateStyle: 'medium',
								}).format(new Date(post.date))}
							</time>
						) : (
							<span>soon</span>
						)}
					</span>
					<span className="flex items-center  gap-1 text-xs text-zinc-500">
						<Eye className="h-4 w-4" />{' '}
						{Intl.NumberFormat('en-US', {
							notation: 'compact',
						}).format(views ?? 0)}
					</span>
				</div>
				<h2 className="z-20 font-display text-xl font-medium text-zinc-200 duration-1000 group-hover:text-white lg:text-3xl">
					{post.title}
				</h2>
				<p className="z-20 mt-4 text-left text-sm  text-zinc-400 duration-1000 group-hover:text-zinc-200">
					{post.description}
				</p>
			</article>

			{post.tags && (
				<div className="mb-4 ml-8 flex flex-wrap">
					{post.tags.map((tag) => (
						<Tag key={tag} tag={tag} color="yellow" />
					))}
				</div>
			)}
		</Link>
	);
};

export default Article;
