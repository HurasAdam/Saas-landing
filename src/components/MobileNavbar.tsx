import { useWindowSize } from '@react-hook/window-size';
import React, { useEffect, useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoClose } from "react-icons/io5";



const links = [
    {title:"Products",path:"/"},
    {title:"Solutions",path:"/"},
    {title:"Help Center",path:"/"},
    {title:"Pricing",path:"/"},
]

const MobileNavbar:React.FC = () => {

    const [windowWidth] = useWindowSize();
const [xd,setXd]=useState(false)
    const [active, setActive] = useState(false);
    const [isMobileMenuActive,setIsMobileMenuActive]=useState<boolean>(false);


    const togleMobileMenu = ()=>{
        setIsMobileMenuActive((prevState)=>!prevState)
    }
    const isActive = ()=>{
      window.scrollY >0 ? setActive(true) : setActive(false);
    }
  
    useEffect(()=>{
       

  window.addEventListener("scroll",isActive);
  
  return ()=>{
    window.removeEventListener("scroll",isActive);
  };
    },[]);
  

    useEffect(() => {
        if (windowWidth > 780) {
            setIsMobileMenuActive(false);
        }
    }, [windowWidth]);



    return (

        <div className={` flex md:hidden w-full h-24    bg-blue-100 sticky top-0 z-30 ${active && "bg-white border-b border-slate-300"}`}>
        <div className='w-[1400px] mx-auto h-24 px-5 flex items-center justify-between relative '>
  <button 
  className=''
  type='button'
  onClick={togleMobileMenu}
  >

    <RxHamburgerMenu className='w-5 h-auto'/>
  </button>
    <span className='font-bold text-2xl text-gray-800'>AstraSoft</span>
{ isMobileMenuActive &&   
<div className=' flex flex-col bg-indigo-500 rounded-b-xl w-full absolute top-0 left-0 h-fit items-center gap-6 p-4'>
<div className='flex justify-between w-full px-5'>
    <span className='text-slate-100 font-bold text-normal'>AstraSoft</span>
<button 
  className='mx-right'
  type='button'
  onClick={togleMobileMenu}
  >
    <IoClose className='w-6 h-auto text-slate-100'/>
  </button>
</div>
    {links.map(({path,title})=>{
        return(
        <a
        key={title} 
        href={path}
        className='font-medium text-[15px] px-2.5 hover:text-blue-700 transition-all text-slate-100 hover:bg-orange-100 w-full text-center py-3 '
        >
          {title}</a>
      )
    })}
    </div>}
    

    
    <div className='flex items-center gap-5'>
      <a href="#" className='text-blue-600 font-semibold'>Log in</a>
      <button className='bg-blue-600 text-white rounded-lg py-1.5 sm:py-2 sm:px-3 px-2.5 md:py-3 md:px-8 '>Sign Up</button>
    </div>
    
    
        </div>
        </div>
      )
}

export default MobileNavbar