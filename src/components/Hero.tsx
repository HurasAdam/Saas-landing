import React from 'react'
import logo1 from "../assets/images/logo1.svg";
import heroImage from "../assets/images/heroImage7.png";

    const logos =[
        {id:1, image:logo1},
        {id:1, image:logo1},
        {id:1, image:logo1},
        {id:1, image:logo1},
    ]


const Hero= ()=>{

    return (
      <div className='border-b border-slate-300 bg-blue-100 '>
      <div className="max-w-[1600px] mx-auto md:h-[70vh] h-auto flex md:flex-row flex-col items-center 
      justify-between gap-8 md:px-24 px-8 box-border md:py-0 py-5">
        <div className="flex flex-col gap-7">
          <span className="text-5xl font-bold md:text-4xl leading-[65px] md:leading-[50px] lg:text-5xl xl:text-[52px] xl:leading-[82px] max-w-[650px]    lg:leading-[65px] text-center md:text-left">
          Everything Your Team Needs, All in One Place
          </span>
          <span className="leading-7 text-gray-600 md:max-w-[550px] flex mb-8 text-center sm:text-left">
          One platform, limitless possibilities. Integrate your tools and projects to boost efficiency and achieve exceptional results together.
          </span>
          <div className="flex flex-col md:flex-row items-center gap-3">
            <input
              type="text"
              placeholder="Enter your email"
              className="rounded-lg border border-slate-300 outline-none px-3 h-12 w-full"
            />
            <button className="bg-blue-600 text-white rounded-lg px-8 h-12 whitespace-nowrap  w-full">
              Sign Up For Free
            </button>
          </div>
          <div className="w-full bg-[#F1F5F9] rounded-lg py-5 flex items-center justify-between px-3 ">
            {logos.map((logo) => {
              return (
                <img
              
                  src={logo.image}
                  key={logo.id}
                  className='w-1/5 lg:w-auto'
                  
                />
              );
            })}
          </div>
        </div>

        <img
          src={heroImage}
          className="hidden md:flex rounded-xl  w-[48%] xl:w-[%] h-auto "
          alt="heroImage"
        />
      </div>
      </div>
    );
}

export default Hero