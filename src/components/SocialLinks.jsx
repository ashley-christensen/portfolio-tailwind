import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const SocialLinks = () => {
	const links = [
		{
			id: 1,
			child: (
				<>
					LinkedIn <FaLinkedin size={30} />
				</>
			),
			href: 'https://www.linkedin.com/in/ashley-christensen-339a7020a',
			style: 'rounded-tr-md',
		},
		{
			id: 2,
			child: (
				<>
					GitHub <FaGithub size={30} />
				</>
			),
			href: 'https://github.com/ashley-christensen',
		},
		{
			id: 3,
			child: (
				<>
					Mail <HiOutlineMail size={30} />
				</>
			),
			href: 'mailto:ReactandFloat@gmail.com', //opens user's email client
		},
		{
			id: 4,
			child: (
				<>
					Resume <BsFillPersonLinesFill size={30} />
				</>
			),
			href: '/Ashley+Christensen+Resume.pdf',
			style: 'rounded-br-md',
			download: true,
		},
	];

	return (
		<div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
			<ul>
				{links.map(({ id, child, href, style, download }) => (
					<li
						key={id}
						className={
							'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] rounded-md duration-300 bg-pink-500' +
							' ' +
							style
						}>
						<a
							href={href}
							className='flex justify-between items-center w-full text-white'
							download={download}
							rel='noreferrer'
							target='_blank'>
							{child}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default SocialLinks;
