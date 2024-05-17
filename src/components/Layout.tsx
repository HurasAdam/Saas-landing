import React from 'react'

const Layout = ({children}) => {
  return (
       <div className='w-[1400px] mx-auto h-24 px-5 flex items-center justify-between '>
{children}
    </div>
  )
}

export default Layout