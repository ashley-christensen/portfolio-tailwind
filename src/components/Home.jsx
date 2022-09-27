import { HiArrowNarrowRight } from 'react-icons/hi';
import HeroImage from '../assets/profile-september-crop.png';
import { Link } from 'react-scroll';

const Home = () => {
	return (
		<div name='home' className='w-full h-screen bg-gradient-to-b from-black via-black to-gray-800'>
			<div className=' max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4'>
				<div className='flex flex-col justify-center h-full'>
					<h2 className='text-4xl sm:text-7xl font-bold textLink'>I'm a Full Stack Developer</h2>
					<p className='textLink py-4 max-w-md'>
						Thank you for checking out my web site. I'm a full stack developer with two years experience in
						software development. I'm passionate at developing apps, improving programs and debugging code.
						Seeking a position in tech as a software developer, customer service engineer or technical
						account support rep. With work experience in sales and education, I'm adept at presentations
						that convey technical value to stakeholders at all levels. I'm currently learning Typescript.
						Java is next. I enjoy learning and I look forward to being part of a great team!
					</p>
					<div>
						<Link
							to='portfolio'
							smooth
							duration={500}
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
