'use client';
import { Github, Mail, Twitter } from 'lucide-react';
import Link from 'next/link';
import { Navigation } from '../_components/nav';
import { Card } from '@/app/_components/card';
import { email, git_handle, x_handle } from '@/app/_components/about';

const socials = [
	{
		icon: <Twitter size={20} />,
		href: `https://twitter.com/${x_handle}`,
		label: 'X',
		handle: `@${x_handle}`,
	},
	{
		icon: <Mail size={20} />,
		href: `mailto:${email}`,
		label: 'email',
		handle: `${email}`,
	},
	{
		icon: <Github size={20} />,
		href: `https://github.com/${git_handle}`,
		label: 'github',
		handle: git_handle,
	},
];

export default function Example() {
	return (
		<div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />

			<div className="container mx-auto flex min-h-screen flex-wrap items-center justify-center px-4">
				<div className="container mx-auto mt-16 flex items-center justify-center px-4">
					<h2 className="mr-8 border-white border p-4 font-display text-6xl font-bold text-zinc-200">
						v.v
					</h2>
					<p className="mt-4 text-lg text-zinc-400 text-justify">
						Hi, I'm Jeevan. An engineer, designer, artist.
						passionate about creating solutions that solves
						real-world problems. I'm always looking for
						new opportunities to learn and grow. I love to
						connect with new people, so feel free to reach
						out to me using any of the following social
						media platforms.
					</p>
				</div>
				<div className="mx-auto mt-16 grid w-full grid-cols-1 gap-8 sm:mt-0 sm:grid-cols-3 lg:gap-16">
					{socials.map((s) => (
						<Card key={s.href}>
							<Link
								href={s.href}
								target="_blank"
								className="group relative flex flex-col items-center gap-4 p-4 duration-700 md:gap-8 md:p-16  md:py-24  lg:pb-48"
							>
								<span
									className="absolute h-2/3 w-px bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
									aria-hidden="true"
								/>
								<span className="drop-shadow-orange relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-zinc-500 bg-zinc-900 text-sm text-zinc-200 duration-1000 group-hover:border-zinc-200 group-hover:bg-zinc-900 group-hover:text-white">
									{s.icon}
								</span>{' '}
								<div className="z-10 flex flex-col items-center">
									<span className="font-display font-medium text-zinc-200 duration-150 group-hover:text-white lg:text-xl xl:text-3xl">
										{s.handle}
									</span>
									<span className="mt-4 text-center text-sm text-zinc-400 duration-1000 group-hover:text-zinc-200">
										{s.label}
									</span>
								</div>
							</Link>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
