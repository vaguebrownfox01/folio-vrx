type Tags = {
	tag: string;
	color: keyof typeof txhue;
};

const txhue = {
	violet: 'text-violet-400',
	pink: 'text-pink-400',
	blue: 'text-blue-400',
	green: 'text-lime-400',
	yellow: 'text-yellow-400',
	orange: 'text-orange-400',
	red: 'text-red-400',
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
			className={`mx-1 rounded-s border-l-4 ${bhue[color]} md:gap-8`}
		>
			<p
				className={`text-lem text-in py-0 pl-2 pr-3 text-center text-sm text-${txhue[color]}`}
			>
				{tag}
			</p>
		</div>
	);
};
