import React from 'react';

const About = () => {
	return (
		<div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black textLink'>
			<div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
				<div className='pb-8 '>
					<p className='text-4xl font-bold inline border-b-4 border-pink-500'>About</p>
				</div>

				<p className='text-xl mt-20 '>
					Coming from a large family of artists, I followed my heart and worked in cosmetology helping people
					look their best. In college I studied American History to expand my knowledge of history, politics
					and business. With that I worked as a Special Education teacher helping students with mild to
					moderate disabilities, K6-8.
				</p>
				<br />

				<p className='text-xl'>
					I have grit, an eye for design, and believe in teamwork/team success - walking the fine line of
					confidence and humility as an individual contributor and team player. I work efficiently and I
					believe there's a right solution for every problem.
				</p>
			</div>
		</div>
	);
};

export default About;
