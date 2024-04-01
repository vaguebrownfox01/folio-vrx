import Link from 'next/link';
import React from 'react';
import Particles from '@/app/_components/particles';
import { moniker, months, mori, navs, ratio, tagline } from '@/app/_components/about';

export default function Home() {
	return (
		<div className="flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-tl from-black via-teal-600/10 to-black">
			<nav className="my-16 animate-fade-in">
				<ul className="flex items-center justify-center gap-4">
					{navs.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-sm text-zinc-500 duration-500 hover:text-teal-600 hover:scale-110"
						>
							{item.name}
						</Link>
					))}
				</ul>
			</nav>

			{/* <div className="animate-glow hidden h-px w-screen animate-fade-left bg-gradient-to-r from-zinc-300/0 via-teal-300/50 to-zinc-300/0 md:block" /> */}

			<h1 className="text-edge-outline z-10 animate-title cursor-default whitespace-nowrap bg-gradient-to-tl from-white/25 via-teal-100 to-white/25 bg-clip-text pb-4 pl-4 pr-4 font-display text-4xl text-transparent duration-1000 sm:text-6xl md:text-6xl ">
				{moniker}
			</h1>

			<div className="animate-glow hidden h-px w-screen animate-fade-right bg-gradient-to-r from-zinc-300/0 via-teal-300/50 to-zinc-300/0 md:block" />
			<div className="my-16 animate-fade-in text-center">
				<h2 className="text-sm text-zinc-500">{tagline}</h2>
			</div>

			<Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={months} />

			<div className='absolute -z-10 bottom-0 pb-2' >
				<p className="text-teal-500 text-center text-xs delay-300 animate-fade-in">::momento mori::</p>
				<p className="text-teal-500 text-center text-xs delay-1000 animate-fade-in">{mori}</p>
				<p className="text-teal-500 text-center text-xs delay-75 animate-fade-in">{ratio}</p>
			</div>
		</div>
	);
}
