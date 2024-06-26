import React from 'react'
import constants from '../constants';


const Footer:React.FC = () => {
	return (
		<div className="border-t border-slate-300 ">
		<div className="max-w-[1400px] mx-auto md:h-24 md:py-0 py-5 md:px-52 px-5 flex md:flex-row flex-col items-center justify-between  md:gap-0 gap-5">
			<span className="font-bold text-lg text-gray-800">AstraSoft</span>
			<div className="flex items-center gap-6">
				{constants.FOOTERLINKS.map((link) => {
					return (
						<a
							className="font-medium text-[15px] text-gray-600"
							href={link.path}
							key={link.title}
						>
							{link.title}
						</a>
					);
				})}
			</div>
		</div>
		</div>
	);
}

export default Footer