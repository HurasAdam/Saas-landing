import React from 'react'

const Community:React.FC = () => {
	return (
		<div className="max-w-[1400px] mx-auto md:px-10 md:pt-40 pt-28 pb-16 xl:px-12 ">
			<div className="flex w-full md:rounded-3xl relative  items-center justify-center md:p-0 p-8 md:py-10">
				<div className="w-full h-full absolute md:rounded-3xl left-0 top-0 bg-gradient-to-br from-[#1E40AF] to-[#701A75] z-10"></div>
				<div className="flex flex-col gap-8  md:w-[65%] w-full lg:w-[55%] z-20">
					<span className="font-bold md:text-[60px] text-center text-white text-[50px] max-w-full md:leading-[80px] leading-[70px]">
						Join the community today
					</span>
					<p className="leading-7 text-white text-center">
					Join our community today! Connect with like-minded individuals, engage in discussions, access exclusive content, and grow with us.
					</p>
					<button className="bg-blue-600 text-white rounded-lg px-8 h-12 max-w-[180px] self-center whitespace-nowrap">
						Sign Up For Free
					</button>
				</div>
			</div>
		</div>
	);
}

export default Community