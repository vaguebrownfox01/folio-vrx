'use client';
import {
	motion,
	useMotionTemplate,
	useSpring
} from 'framer-motion';

import { PropsWithChildren } from 'react';
import { Tag } from './tag';

export const Card: React.FC<PropsWithChildren> = ({ children }) => {
	const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
	const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

	function onMouseMove({ currentTarget, clientX, clientY }: any) {
		const { left, top } = currentTarget.getBoundingClientRect();
		mouseX.set(clientX - left);
		mouseY.set(clientY - top);
	}
	const maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;
	const style = { maskImage, WebkitMaskImage: maskImage };

	return (
		<div
			onMouseMove={onMouseMove}
			className="group relative overflow-hidden rounded-xl border border-zinc-600 duration-700 hover:border-teal-400/50 hover:bg-zinc-800/10 md:gap-8 "
		>
			<div className="pointer-events-none">
				<div className="absolute inset-0 z-0  transition duration-1000 [mask-image:linear-gradient(black,transparent)]" />
				<motion.div
					className="absolute inset-0 z-10  bg-gradient-to-br via-teal-200/10  opacity-100  transition duration-1000 group-hover:opacity-50 "
					style={style}
				/>
				<motion.div
					className="text-pin absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
					style={style}
				/>
			</div>

			{children}
			<div className="mb-4 ml-4 flex pl-2 pr-2">
				<Tag tag="JS" color="yellow" />
				<Tag tag="React" color="violet" />
				<Tag tag="ML" color="pink" />
			</div>
		</div>
	);
};
