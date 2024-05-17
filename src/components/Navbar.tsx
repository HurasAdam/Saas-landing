import React from 'react'

const Navbar = () => {

const links = [
    {title:"Products",path:"/"},
    {title:"Solutions",path:"/"},
    {title:"Help Center",path:"/"},
    {title:"Pricing",path:"/"},
]


  return (

    <div className=' w-full h-24  flex border-b border-slate-300'>
    <div className='w-[1600px] mx-auto h-24 px-5 flex items-center justify-between '>
<span className='font-bold text-2xl text-gray-800'>AstraSoft</span>
<div className='hidden md:flex items-center gap-6'>
{links.map(({path,title})=>{
    return(
    <a
    key={title} 
    href={path}
    className='font-medium text-[15px]'
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