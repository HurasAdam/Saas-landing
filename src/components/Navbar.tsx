import React, { useEffect, useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import MobileNavbar from './MobileNavbar';

const Navbar:React.FC = () => {
  const [active, setActive] = useState(false);


  const isActive = ()=>{
    window.scrollY >0 ? setActive(true) : setActive(false);
  }

  useEffect(()=>{
window.addEventListener("scroll",isActive);

return ()=>{
  window.removeEventListener("scroll",isActive);
};
  },[]);

const links = [
    {title:"Products",path:"/"},
    {title:"Solutions",path:"/"},
    {title:"Help Center",path:"/"},
    {title:"Pricing",path:"/"},
]


  return (

    <div className={` hidden md:flex w-full h-24    bg-blue-100 sticky top-0 z-30 ${active && "bg-white border-b border-slate-300"}`}>
    <div className='w-[1400px] mx-auto h-24 px-5 flex items-center justify-between '>

<span className='font-bold text-2xl text-gray-800'>AstraSoft</span>
<div className='hidden md:flex items-center gap-6 '>
{links.map(({path,title})=>{
    return(
    <a
    key={title} 
    href={path}
    className='font-medium text-[15px] px-2.5 hover:text-blue-700 transition-all '
    >
      {title}</a>
  )
})}
</div>



<div className='flex items-center gap-5'>
  <a href="#" className='text-blue-600 font-semibold'>Log in</a>
  <button className='bg-blue-600 text-white rounded-lg py-1.5 sm:py-2 sm:px-3 px-2.5 md:py-3 md:px-8 '>Sign Up</button>
</div>


    </div>
    </div>
  )
}

export default Navbar