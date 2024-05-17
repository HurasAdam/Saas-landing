import React from 'react'
import workflowImage from "../assets/images/workflowImage.jpg";

const Workflow:React.FC = () => {
	return (
		<div className="max-w-[1600px] mx-auto md:pt-44 pt-36 md:px-24 px-5 flex lg:flex-row flex-col  md:justify-around justify-center md:gap-5 gap-10">
			<div className="flex-1 flex flex-col  gap-8 md:gap-5">
			<span className=" text-center lg:py-14  sm:text-left font-bold xl:text-6xl text-5xl max-w-[700px] leading-[70px] md:leading-[58px] xl:leading-[68px] ">
			Improve your workflow
				</span>
				<p className="leading-7 text-gray-600 md:max-w-[580px] max-w-[95%]">
				Enhance efficiency and collaboration with our workflow optimization solutions. Our platform offers intuitive tools and streamlined processes designed to 
				simplify tasks, increase productivity, and drive innovation. Take your workflow to the next level and achieve your goals with ease
				</p>
				<a
					href="#"
					className="text-blue-600 font-semibold"
				>
					Check the tools
				</a>
			</div>
	<div className=' flex-1 flex items-center gap-4 py-10 md:py-24 w-full md:justify-normal justify-center px-1  '>
	<img
				src={workflowImage}
				className="w-auto h-auto object-cover mx-auto xl:mx-0 rounded-xl"
			/>
	</div>
		</div>
	);
}

export default Workflow