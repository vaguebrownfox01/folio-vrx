type Tag = {
	tag: string;
};

type Tags = {
	tags?: string[] | undefined
}

const txhue = {
	violet: 'text-violet-400',
	pink: 'text-pink-400',
	blue: 'text-blue-400',
	green: 'text-lime-400',
	yellow: 'text-yellow-400',
	orange: 'text-orange-400',
	red: 'text-red-400',

	'spire-lab': 'text-orange-400',
	'ml-ops': 'text-yellow-400',
	python: 'text-blue-400',

	'web-app': 'text-green-400',
	'react-js': 'text-cyan-400',

	'signal-processing': 'text-violet-400',
	matlab: 'text-orange-400',
	'data-collection': 'text-yellow-500',

	'app-dev': 'text-blue-500',
	android: 'text-green-500',

	'embedded-sys': 'text-violet-400',
	c: 'text-pink-500',

	fusion360: 'text-orange-200',
	'product-design': 'text-pink-300',

	firebase: 'text-yellow-600',

    'bio-medical': 'text-red-200',

    'webpage': 'text-green-200',
    'UI/UX': 'text-cyan-600',

    'raspberry-pi': 'text-pink-500',

    'event': 'text-yellow-400',
    'gratitude': 'text-white',

    'speech-processing': 'text-orange-500',

    'machine-learning': 'text-yellow-300',
};

const bhue = {
	violet: 'border-violet-400',
	pink: 'border-pink-400',
	blue: 'border-blue-400',
	green: 'border-lime-400',
	yellow: 'border-yellow-400',
	orange: 'border-orange-400',
	red: 'border-red-400',

	'spire-lab': 'border-orange-400',
	'ml-ops': 'border-yellow-400',
	python: 'border-blue-400',

	'web-app': 'border-green-400',
	'react-js': 'border-cyan-400',

	'signal-processing': 'border-violet-400',
	matlab: 'border-orange-400',
	'data-collection': 'border-yellow-500',

	'app-dev': 'border-blue-500',
	android: 'border-green-500',

	'embedded-sys': 'border-violet-400',
	c: 'border-pink-500',

	fusion360: 'border-orange-200',
	'product-design': 'border-pink-300',

	firebase: 'border-yellow-600',

    'bio-medical': 'border-red-200',

    'webpage': 'border-green-200',
    'UI/UX': 'border-cyan-600',

    'raspberry-pi': 'border-pink-500',

    'event': 'border-yellow-400',
    'gratitude': 'border-white',

    'speech-processing': 'border-orange-500',

    'machine-learning': 'border-yellow-300',
};

const Tag: React.FC<Tag> = ({ tag }) => {
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
			<div className="mb-4 ml-8 flex flex-wrap">
				{tags.map((tag) => (
					<Tag key={tag} tag={tag} />
					))}
			</div>
		)}
		</>
    );
};

