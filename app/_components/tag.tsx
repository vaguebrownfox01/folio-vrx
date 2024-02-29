import { border_colors, text_colors } from "./about";

type Tag = {
	tag: string;
};

type Tags = {
	tags?: string[] | undefined;
};



const Tag: React.FC<Tag> = ({ tag }) => {

	// console.log(tag, undefined ? "true" : "false");
	// console.log(txhue[tag as keyof typeof txhue].replace('text', 'border'));

	const border_style = `mb-2 mr-4 rounded-s border-l-2 ${border_colors[tag as keyof typeof border_colors]}`
	const text_style = `pl-2 text-center text-sm ${text_colors[tag as keyof typeof text_colors]}`

	return (
		<div
			className={border_style}
		>
			<p
				className={text_style}
			>
				{tag}
			</p>
		</div>
	);
};

export const Tags: React.FC<Tags> = ({ tags }) => {
	return (
		<>
			{tags && (
				<div className="mb-4 ml-0 flex flex-wrap">
					{tags.map((tag) => (
						<Tag key={tag} tag={tag} />
					))}
				</div>
			)}
		</>
	);
};
