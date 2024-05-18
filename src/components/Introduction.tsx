import React from 'react';
import intro1 from "../assets/images/intro1.png";
import intro2 from "../assets/images/intro2.png";
import intro3 from "../assets/images/intro3.png";

const Introduction: React.FC = () => {
  const images = [
    { src: intro1 },
    { src: intro2 },
    { src: intro3 },
  ];

  return (
    <div className="max-w-[1400px] mx-auto flex flex-col-reverse md:flex-row px-5 pt-20 sm:pt-24 md:pt-14 md:px-10 gap-0 md:gap-10 lg:gap-10" >
      <div className='flex-1 flex items-center gap-4 py-24 w-full md:justify-normal justify-center px-1  '>
        {images.map(({ src }, index: number) => {
          return (
            <div key={index} className={`flex-1 ${index === 1 ? "mt-[-120px]" : ""}`}>
              <img
                src={src}
                className="w-full h-auto object-cover"
              />
            </div>
          );
        })}
      </div>

      <div className="flex flex-col gap-5 flex-1 px-0 lg:px-20 ">
				<span className=" text-center lg:my-20 sm:text-left font-bold xl:text-6xl text-5xl max-w-[700px] leading-[70px] md:leading-[58px] xl:leading-[68px] ">
					Enjoy your time working
				</span>
				<p className="leading-7 text-gray-600 ">
                Welcome to a workspace designed for joy and efficiency. Our platform empowers you to tackle tasks with ease, collaborate seamlessly 
                with your team, and make every project a success. Enjoy a smoother workflow and unlock new levels of productivity.
				</p>
				<a
					href="#"
					className="text-blue-600 font-semibold"
				>
					See how it helped others
				</a>
			</div>
    </div>
  );
}

export default Introduction;
