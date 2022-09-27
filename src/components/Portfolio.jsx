import Dinera from '../assets/portfolio/ReactRedux-Dinera.jpg';
import Palmera from '../assets/portfolio/React-Palmera-feat.jpg';
import Work from '../assets/portfolio/Tailwind-Portfolio.jpg';
import Venture from '../assets/portfolio/JSOOP-Venture.jpg';
import Weather from '../assets/portfolio/React-Weather.jpg';
import Pink from '../assets/portfolio/VanillaJSPink.jpg';
import DrinkSearch from '../assets/portfolio/React-Cocktails.jpg';
import OmniFood from '../assets/portfolio/CSS-HTML-Omnifood.jpg';
import { HiDeviceMobile } from 'react-icons/hi';

const Portfolio = () => {
	const portfolios = [
		{
			id: 1,
			src: Dinera,
			demo: 'https://dinera-react.netlify.app/',
			code: 'https://github.com/ashley-christensen/react-redux-dinera',
			description:
				'React Redux app with Redux Thunk for ASYNC, ReactStrap, React Router, Formik, React Spring, and Redux/Redux Toolkit for State Management. Plan to add Express, Node, MongoDB and SQL on backend',
		},
		{
			id: 2,
			src: Palmera,
			demo: 'https://palmera-react.netlify.app/',
			code: 'https://github.com/ashley-christensen/palmera-react',
			description:
				'React App with React-Router, added Login and Reservations, Map from Leaflet, animations. Formik Component used for forms/validation. Plan to add Login functionality and backend with NodeJS, Express, and Authentication with Firebase',
		},
		{
			id: 3,
			src: Work,
			demo: 'https://ashley-christensen.netlify.app',
			code: 'https://github.com/ashley-christensen/portfolio-tailwind',
			description:
				'Simple project to learn Tailwind CSS for styling and smooth animation. React Scroll for easy navigation, hover effects, etc.',
		},
		{
			id: 4,
			src: Venture,
			demo: 'https://venture-app.netlify.app/',
			code: 'https://github.com/ashley-christensen/venture-app-OOP-javascript',
			description:
				'Object Oriented Programming application in Vanilla JS and Leaflet Library. Learned basics of Encapsulation, Inheritance, Polymorphism and Abstraction',
		},
		{
			id: 5,
			src: Weather,
			demo: 'https://ashley-weathergoodness.netlify.app/',
			code: 'https://github.com/ashley-christensen/react-weather-app',
			description:
				'Open Weather API and React. Practiced ASYNC programming with AJAX and fetch API with Promises.',
		},
		{
			id: 6,
			src: Pink,
			demo: 'https://pinkgame-vanilla-js.netlify.app/',
			code: 'https://github.com/ashley-christensen/pink-game-vanillaJS',
			description:
				'Vanilla Javascript game to practice DOM manipulation and CSS, basic understanding of Logical Programming and implementation of user friendly patterns',
		},
		{
			id: 7,
			src: OmniFood,
			demo: 'https://html-css-omnifood.netlify.app/',
			code: 'https://github.com/ashley-christensen/html-css-omnifood',
			description:
				'Learned User Flow, Visual Hierarchy in pure CSS and HTML with no frameworks. CSS Flexbox and CSS Grid implementation and organization, as well as CSS animations and layout structures',
		},
		{
			id: 8,
			src: DrinkSearch,
			demo: 'https://master--drink-searcher.netlify.app/',
			code: 'https://github.com/ashley-christensen/react-drinksSearchApp',
			description:
				'Drinks search with external Web Service, useParams, useCallback, useContext/useGlobalContext custom hook, React Router 6, etc. Used The Cocktail DB as external API. Learned how to implment responsive user search functionality',
		},
	];

	return (
		<div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full textLink pb-12'>
			<div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full'>
				<div className='pb-8'>
					<p className='text-4xl font-bold inline border-b-4 border-pink-500'>Portfolio</p>
					<p className='py-6'>Check out some of my work!</p>
				</div>
				<div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
					{portfolios.map(({ id, src, demo, code, description }) => (
						<div key={id} className='shadow-md shadow-pink-600 rounded-lg'>
							<img src={src} alt='' className='rounded-md duration-300 hover:scale-105' />
							<div className='flex'>
								<div className='border-b-4 border-pink-500 w-1/2 mx-auto py-4'>
									{/* <button
										onClick={() => window.open(demo)}
										className='w-1/2 px-2 py-2 duration-200 hover:scale-105'>
										Demo
									</button> */}
									<button
										onClick={() => window.open(code)}
										className='w-1/2 px-2 py-2 duration-200 hover:scale-105'>
										Code
									</button>
								</div>
							</div>
							<div className='p-4'>{description}</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
