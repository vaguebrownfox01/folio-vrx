type Tags = {
	tag: string;
	color: keyof typeof hue;
};

const hue = {
	violet: 'violet-400',
	pink: 'pink-400',
	blue: 'blue-400',
	green: 'lime-400',
	yellow: 'yellow-400',
	orange: 'orange-400',
	red: 'red-400',
};

const bhue = {
	violet: 'border-violet-400',
	pink: 'border-pink-400',
	blue: 'border-blue-400',
	green: 'border-lime-400',
	yellow: 'border-yellow-400',
	orange: 'border-orange-400',
	red: 'border-red-400',
};

export const Tag: React.FC<Tags> = ({ tag, color }) => {
	return (
		<div
			className={`group relative mx-1 overflow-hidden rounded-s border-l-4 ${bhue[color]}/70 duration-700 hover:${bhue[color]}/50 md:gap-8`}
		>
			<p
				className={`text-lem text-in py-0 pl-2 pr-3 text-center text-sm text-${hue[color]} duration-1000`}
			>
				{tag}
			</p>
		</div>
	);
};
