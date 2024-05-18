import React from 'react'
import constants from '../constants'
import FeaturesListContainer from './FeaturesListContainer'

const Features:React.FC = () => {
  return (
<section className='bg-sky-100'>
  
<div className='max-w-[1400px] mx-auto flex flex-col gap-20 pt-20'>
<h1 className='mx-auto text-4xl font-bold mb-12'>Unify Your Workflow. Elevate Your Performance.</h1>
<div className='flex justify-center'>

<div className='w-1/2 bg-indigo-100 py-14 rounded-bl-lg    px-20' style={{ borderRadius: '30% 70% 70% 30% / 39% 24% 76% 61%' }}>
<span>
Our platform centralizes all your team's tools and projects into a single, powerful ecosystem. Designed for ease of use and rapid value delivery, 
it enhances collaboration and streamlines your workflow. Every feature is robust on its own, but the true 
potential is unleashed when used together. Experience a seamless integration that empowers every team member, from start to finish.
   
</span>
</div>
<div className='bg-blue-200 px-10 rounded-t-full  '>

<img src={constants.IMAGES.manImage4} className='w-[300px] mt-[-80px] h-auto mx-auto' alt="" />

</div>

</div>
<FeaturesListContainer/>

</div>

</section>
  )
}

export default Features