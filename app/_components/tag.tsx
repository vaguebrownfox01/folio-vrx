import { useEffect, useState } from "react";

type Tag = {
	tag: string;
};

type Tags = {
	tags?: string[] | undefined;
};

const text2border = (textTags: object) => {
	// Create a new object to avoid modifying the original
	const borderTags: { [key: string]: string } = {};

	// Iterate over original object and update values
	for (const [key, value] of Object.entries(textTags)) {
		borderTags[key] = value.replace('text', 'border');
	}

	// Return the new object
	return borderTags;
};

const art_tags = {
	'env.vua': 'text-violet-400',
	jxp: 'text-pink-300',
	fau: 'text-red-400',

	concepts: 'text-orange-300',
	sketchbook: 'text-amber-800',
	procreate: 'text-pink-500',

	illustration: 'text-yellow-400',
	practice: 'text-gray-400',
	design: 'text-purple-400',
};

const project_tags = {
	'spire-lab': 'text-orange-400',

	'data-collection': 'text-yellow-500',
	'react-js': 'text-cyan-400',
	'bio-medical': 'text-red-200',
	'product-design': 'text-pink-300',
	'machine-learning': 'text-yellow-300',

	'signal-processing': 'text-violet-400',
	'speech-processing': 'text-orange-500',
	'ml-ops': 'text-yellow-400',
	fusion360: 'text-orange-200',
	'web-app': 'text-green-400',
	matlab: 'text-orange-400',
	firebase: 'text-yellow-600',
	webpage: 'text-green-200',
	'UI/UX': 'text-cyan-600',
	'raspberry-pi': 'text-pink-500',
	event: 'text-yellow-400',
	'embedded-sys': 'text-violet-400',

	'app-dev': 'text-blue-500',
	android: 'text-green-500',

	python: 'text-blue-400',
	c: 'text-pink-500',

	gratitude: 'text-white',
};

const txhue = {
	...art_tags,
	...project_tags,

	violet: 'text-violet-400',
	pink: 'text-pink-400',
	blue: 'text-blue-400',
	green: 'text-lime-400',
	yellow: 'text-yellow-400',
	orange: 'text-orange-400',
	red: 'text-red-400',
};

// const bhue = {
// 	'env.vua': 'border-violet-400',
// 	jxp: 'border-pink-300',
// 	fau: 'border-red-400',
// 	concepts: 'border-orange-300',
// 	sketchbook: 'border-amber-800',
// 	procreate: 'border-pink-500',
// 	illustration: 'border-yellow-400',
// 	practice: 'border-gray-400',
// 	design: 'border-purple-400',
// 	'spire-lab': 'border-orange-400',
// 	'data-collection': 'border-yellow-500',
// 	'react-js': 'border-cyan-400',
// 	'bio-medical': 'border-red-200',
// 	'product-design': 'border-pink-300',
// 	'machine-learning': 'border-yellow-300',
// 	'signal-processing': 'border-violet-400',
// 	'speech-processing': 'border-orange-500',
// 	'ml-ops': 'border-yellow-400',
// 	fusion360: 'border-orange-200',
// 	'web-app': 'border-green-400',
// 	matlab: 'border-orange-400',
// 	firebase: 'border-yellow-600',
// 	webpage: 'border-green-200',
// 	'UI/UX': 'border-cyan-600',
// 	'raspberry-pi': 'border-pink-500',
// 	event: 'border-yellow-400',
// 	'embedded-sys': 'border-violet-400',
// 	'app-dev': 'border-blue-500',
// 	android: 'border-green-500',
// 	python: 'border-blue-400',
// 	c: 'border-pink-500',
// 	gratitude: 'border-white',
// 	violet: 'border-violet-400',
// 	pink: 'border-pink-400',
// 	blue: 'border-blue-400',
// 	green: 'border-lime-400',
// 	yellow: 'border-yellow-400',
// 	orange: 'border-orange-400',
// 	red: 'border-red-400'
//   }

const Tag: React.FC<Tag> = ({ tag }) => {
	const [bhue, setBhue] = useState({});

	useEffect(() => {
		const _bhue = text2border(txhue);
		setBhue(_bhue);
		console.log(bhue);
	}, []);

	return (
		<div
			className={`mb-2 mr-4 rounded-s border-l-2 ${bhue[tag as keyof typeof bhue] ? bhue[tag as keyof typeof bhue] : 'border-white'} md:gap-8`}
		>
			<p
				className={`text-lem text-in pl-2 text-center text-sm ${txhue[tag as keyof typeof txhue] ? txhue[tag as keyof typeof txhue] : 'text-white'}`}
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
