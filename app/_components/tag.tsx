import { tag_class } from './about';

type Tag = {
	tag: string;
};

type Tags = {
	tags?: string[] | undefined;
};

const tag_color = {
	'env.vua': 'border-violet-400 text-violet-400',
	jxp: 'border-pink-300 text-pink-300',
	fau: 'border-red-400 text-red-400',
	concepts: 'border-orange-300 text-orange-300',
	sketchbook: 'border-amber-800 text-amber-800',
	procreate: 'border-pink-500 text-pink-500',
	illustration: 'border-yellow-400 text-yellow-400',
	practice: 'border-gray-400 text-gray-400',
	design: 'border-purple-400 text-purple-400',
	paper: 'border-white text-white',
	'spire-lab': 'border-orange-400 text-orange-400',
	'data-collection': 'border-yellow-500 text-yellow-500',
	'react-js': 'border-cyan-400 text-cyan-400',
	'bio-medical': 'border-red-200 text-red-200',
	'product-design': 'border-pink-300 text-pink-300',
	'machine-learning': 'border-yellow-300 text-yellow-300',
	klatt: 'border-green-400 text-green-400',
	'signal-processing': 'border-violet-400 text-violet-400',
	'speech-processing': 'border-orange-500 text-orange-500',
	'ml-ops': 'border-yellow-400 text-yellow-400',
	fusion360: 'border-orange-200 text-orange-200',
	'web-app': 'border-green-400 text-green-400',
	matlab: 'border-orange-400 text-orange-400',
	firebase: 'border-yellow-600 text-yellow-600',
	webpage: 'border-green-200 text-green-200',
	'UI/UX': 'border-cyan-600 text-cyan-600',
	'raspberry-pi': 'border-pink-500 text-pink-500',
	event: 'border-yellow-400 text-yellow-400',
	'embedded-sys': 'border-violet-400 text-violet-400',
	'app-dev': 'border-blue-500 text-blue-500',
	android: 'border-green-500 text-green-500',
	python: 'border-blue-400 text-blue-400',
	c: 'border-pink-500 text-pink-500',
	gratitude: 'border-white text-white',
	'user-research': 'border-white text-white',
	flow: 'border-white text-white'
  };	

const Tag: React.FC<Tag> = ({ tag }) => {
	// console.log(tag_class);

	return (
		<div
			className={`mb-2 mr-4 rounded-s border-l-2 ${tag_color[tag as keyof typeof tag_color]}`}
		>
			<p
				className={`pl-2 text-center text-sm ${tag_color[tag as keyof typeof tag_color]}`}
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
