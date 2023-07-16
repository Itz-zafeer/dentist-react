import React from 'react' 
import Links from './components/Links' 
import LinksData from '../Header/LinksData' 
import BookAppoinment from '../utils/BookAppoinment'
 
const Navbar = () => {
  return (
    <nav className=' items-center lg:gap-x-[4.16666666667vw] flex'>
    <ul className='text24 text-[#FFFFFF]
    flex items-center lg:gap-x-[3.125vw]' >
    {
        LinksData.map((LinksDat,index)=>(
      <Links title={LinksDat.title} key={index} />

        ))
    }
    </ul> 
   
  </nav>
  )
}

export default Navbar
