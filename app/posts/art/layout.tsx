import Particles from '@/app/_components/particles';

export default function PostsLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="relative min-h-screen bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900 ">
			<>{children}</>
			<Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />
		</div>
	);
}
