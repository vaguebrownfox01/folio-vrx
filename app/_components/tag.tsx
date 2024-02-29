'use_client';

import { tag_colors } from "./about";

type Tag = {
	tag: string;
};

type Tags = {
	tags?: string[] | undefined;
};



const Tag: React.FC<Tag> = ({ tag }) => {

	// console.log(tag, undefined ? "true" : "false");
	// console.log(txhue[tag as keyof typeof txhue].replace('text', 'border'));

	return (
		<div
			className={`mb-2 mr-4 rounded-s border-l-2 ${tag_colors[tag as keyof typeof tag_colors]?.replace('xxx', 'border')}`}
		>
			<p
				className={`pl-2 text-center text-sm ${tag_colors[tag as keyof typeof tag_colors]?.replace('xxx', 'text')}`}
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
