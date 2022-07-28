import Dinera from '../assets/portfolio/ReactRedux-Dinera.jpg';
import Palmera from '../assets/portfolio/React-Palmera-feat.jpg';
import Work from '../assets/portfolio/Tailwind-Portfolio.jpg';
import Venture from '../assets/portfolio/JSOOP-Venture.jpg';
import Weather from '../assets/portfolio/React-Weather.jpg';
import Pink from '../assets/portfolio/VanillaJSPink.jpg';
import { HiDeviceMobile } from 'react-icons/hi';

const Portfolio = () => {
	const portfolios = [
		{
			id: 1,
			src: Dinera,
			demo: 'https://dinera-react.netlify.app/',
			code: 'https://github.com/ashley-christensen/react-redux-dinera',
		},
		{
			id: 2,
			src: Palmera,
			demo: 'https://palmera-react.netlify.app/',
			code: 'https://github.com/ashley-christensen/palmera-react',
		},
		{
			id: 3,
			src: Work,
			demo: 'https://portfolio-tailwind.netlify.app/',
			code: 'https://github.com/ashley-christensen/portfolio-tailwind',
		},
		// {
		// 	id: 4,
		// 	src: Venture,
		// 	demo: 'https://venture-app.netlify.app/',
		// 	code: 'https://github.com/ashley-christensen/venture-app-OOP-javascript',
		// },
		// {
		// 	id: 5,
		// 	src: Weather,
		// 	demo: 'https://app.netlify.com/sites/ashley-weathergoodness/overview',
		// 	code: 'https://github.com/ashley-christensen/react-weather-app',
		// },
		// {
		// 	id: 6,
		// 	src: Pink,
		// 	demo: 'https://pinkgame-vanilla-js.netlify.app/',
		// 	code: 'https://github.com/ashley-christensen/pink-game-vanillaJS',
		// },
	];

	return (
		<div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full textLink md:h-screen'>
			<div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
				<div className='pb-8'>
					<p className='text-4xl font-bold inline border-b-4 border-pink-500'>Portfolio</p>
					<p className='py-6'>Check out some of my work!</p>
				</div>
				<div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
					{portfolios.map(({ id, src, demo, code }) => (
						<div key={id} className='shadow-md shadow-pink-600 rounded-lg'>
							<img src={src} alt='' className='rounded-md duration-200 hover:scale-105' />
							<div className='flex items-center justify-center'>
								<button
									onClick={() => window.open(demo)}
									className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
									Demo
								</button>
								<button
									onClick={() => window.open(code)}
									className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
									Code
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
