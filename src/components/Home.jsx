import { HiArrowNarrowRight } from 'react-icons/hi';
import HeroImage from '../assets/HeroPink.png';
import { Link } from 'react-scroll';

const Home = () => {
	return (
		<div name='home' className='w-full h-screen bg-gradient-to-b from-black via-black to-gray-800'>
			<div className=' max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4'>
				<div className='flex flex-col justify-center h-full'>
					<h2 className='text-4xl sm:text-7xl font-bold textLink'>I'm a Full Stack Developer</h2>
					<p className='textLink py-4 max-w-md'>
						With a background in sales, and education, I have expertise in working with teams first.
						Currently, I love to work on web applications using technologies like React, Tailwind, MongoDB,
						Node and PostgresSQL. I'm learning Java and Python.
					</p>
					<div>
						<Link
							// to='portfolio'
							// smooth
							// duration={500}
							className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r
						from-pink-400 to-pink-700 cursor-pointer'>
							{/* {' '} */}
							Portfolio
							<span className='group-hover:rotate-90 duration-300'>
								<HiArrowNarrowRight className='ml-1' />
							</span>
						</Link>
					</div>
				</div>
				<div>
					<img src={HeroImage} alt='my profile' className='rounded-2xl mx-auto w-2/3 md:w-full' />
				</div>
			</div>
		</div>
	);
};

export default Home;

// import React from 'react';
// import HeroImage from '../assets/HeroPink.png';
// import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

// const Home = () => {
// 	return (
// 		<div name='home' className='h-screen w-full bg-gradient-to-b from-black to-gray-800'>
// 			<div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
// 				<h2>I'm a Web Developer</h2>
// 				<p>
// 					With a background in sales, and education, I have expertise in working with teams first. Currently,
// 					I love to work on web applications using technologies like React, Express, MongoDB, Node and
// 					PostgresSQL.
// 				</p>
// 				<div>
// 					<button>
// 						Portfolio
// 						<span>
// 							<MdOutlineKeyboardArrowRight />
// 						</span>
// 					</button>
// 				</div>

// 			</div>
// 		</div>
// 	);
// };

// export default Home;
// {
// 	/* <MdOutlineKeyboardArrowRight />; */
// }
