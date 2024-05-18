import React from 'react'
import constants from '../constants'
import FeaturesListContainer from './FeaturesListContainer'

const Features:React.FC = () => {
  return (
<section className='bg-sky-100'>
  
<div className='max-w-[1400px] mx-auto flex flex-col  lg:gap-20 pt-12 lg:pt-20 '>
<h1 className='mx-auto text-4xl font-bold mb-12 text-center lg:text-left'>Unify Your Workflow. Elevate Your Performance.</h1>
<div className='flex flex-col lg:flex-row justify-center bg-sky-100 lg:bg-blue-200 rounded-xl'>

<div className='mx-auto lg:mx-0 justify-center md:px-20   lg:w-1/2 bg-sky-100 py-14 lg:py-0 md:pt-10 rounded-bl-lg flex flex-col-reverse  lg:flex-col px-6  lg:px-20 lg:bg-blue-200' >
<span className='leading-7 py-10  '>
Our platform centralizes all your team's tools and projects into a single, powerful ecosystem. Designed for ease of use and rapid value delivery, 
it enhances collaboration and streamlines your workflow. Every feature is robust on its own, but the true 
potential is unleashed when used together. Experience a seamless integration that empowers every team member, from start to finish.
</span>
<button className=' bg-blue-600 lg:bt-0 text-white rounded-lg px-8 h-12 max-w-[180px] self-center whitespace-nowrap lg:mt-10'>Sign Up Now</button>
</div>
<div className='bg-blue-200 px-10 rounded-t-full relative '>

<img src={constants.IMAGES.manImage4} className='w-[300px] mt-[-80px] h-auto mx-auto' alt="" />

</div>

</div>
<FeaturesListContainer/>

</div>

</section>
  )
}

export default Features