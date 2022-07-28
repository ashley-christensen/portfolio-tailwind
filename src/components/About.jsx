import React from 'react';

const About = () => {
	return (
		<div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black textLink'>
			<div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
				<div className='pb-8 '>
					<p className='text-4xl font-bold inline border-b-4 border-pink-500'>About</p>
				</div>

				<p className='text-xl mt-20 '>
					I am a highly motivated, energetic, quick learner and a team player. I'm fascinated by technology
					and building software, especially the process of design, data, and breaking down the "process" for
					solutions. I have worked my way up to leadership in the Cosmetology industry, later transitioned to
					teaching Special Education , and after needing another big challenge, I finally decided to turn my
					side hobby of programming into full time.
				</p>
				<br />

				<p className='text-xl'>
					I have never-ending grit, an eye for design, and a knack for building team morale. If you need an
					energetic team player with strong communication skills, willing to assist others, and is not afraid
					to find solutions anywhere necessary, I'm your woman!
				</p>
			</div>
		</div>
	);
};

export default About;
