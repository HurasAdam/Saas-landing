import React from 'react'
import constants from '../constants'
import OptionCard from './OptionCard'


const FeaturesListContainer:React.FC = () => {
  return (
    <div className='px-8 sm:px-16 md:px-0 flex flex-wrap justify-center gap-8 pt-5 pb-16 '>
    {constants.SERVLICESLIST.map(({label,description,features,isNew})=>{
        return(
<OptionCard 
label={label} 
description={description} 
features={features}
isNew={isNew}
className="md:max-w-[40%] lg:max-w-[32%] xl:max-w-[26%]"/>
        )
    })}
    </div>
  )
}

export default FeaturesListContainer