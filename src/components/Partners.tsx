import React from 'react'
import constants from '../constants'

const Partners:React.FC = () => {

  return (
    <section className=' flex '>
     
   <ul className='flex flex-wrap justify-between  max-w-[1200px] mx-auto gap-5 py-10 '>
   {Object.entries(constants.LOGOS).map(([key, value]) => (
 <li className='flex justify-center items-center'>
           <img 
        key={key} 
        src={value} 
        alt={`${key} logo`} 
        className='w-[5vw] h-auto'
        />
 </li>
      ))}
</ul>
    </section>
  )
}

export default Partners