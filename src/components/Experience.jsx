import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import react from '../assets/react.png';
import tailwind from '../assets/tailwind.png';
import bootstrap from '../assets/bootstrap.svg';
import sql from '../assets/postgresql.svg';
import mongo from '../assets/mongodb.png';
import github from '../assets/github.png';
import node from '../assets/node.png';
import java from '../assets/java.svg';

const Experience = () => {
	const techs = [
		{
			id: 1,
			src: html,
			title: 'HTML',
			style: 'shadow-orange-200',
		},
		{
			id: 2,
			src: css,
			title: 'CSS',
			style: 'shadow-blue-200',
		},
		{
			id: 3,
			src: javascript,
			title: 'JavaScript',
			style: 'shadow-yello-200',
		},
		{
			id: 4,
			src: react,
			title: 'React',
			style: 'shadow-blue-300',
		},
		{
			id: 5,
			src: tailwind,
			title: 'Tailwind',
			style: 'shadow-sky-200',
		},
		{
			id: 6,
			src: bootstrap,
			title: 'Bootstrap',
			style: 'shadow-purple-200',
		},
		{
			id: 7,
			src: sql,
			title: 'PostgreSQL',
			style: 'shadow-sky-100',
		},
		{
			id: 8,
			src: mongo,
			title: 'MongoDB',
			style: 'shadow-green-300',
		},
		{
			id: 9,
			src: node,
			title: 'NodeJS',
			style: 'shadow-green-200',
		},
		{
			id: 10,
			src: java,
			title: 'Java',
			style: 'shadow-brown-200',
		},
		{
			id: 11,
			src: github,
			title: 'GitHub',
			style: 'shadow-gray-300',
		},
	];

	return (
		<div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-fulls py-12'>
			<div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full textLink'>
				<div>
					<p className='text-4xl font-bold border-b-4 border-pink-500 p-2 inline'>Experience</p>
					<p className='py-6 '>These are the technologies I've worked with</p>
				</div>
				<div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
					{techs.map(({ id, src, title, style }) => (
						<div key={id} className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg'>
							<img src={src} alt='' className='w-20 mx-auto' />
							<p className='mt-4'>{title}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Experience;
