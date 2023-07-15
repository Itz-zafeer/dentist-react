import React from 'react' 
import Links from './components/Links'
import BookAppoinment from '../utils/BookAppoinment'
const LinksData = [
    {
        title:"Home"
    },
    {
        title:"Services"
    },
    {
        title:"About Us"
    },
    {
        title:"Contact"
    },
    {
        title:"FAQ"
    },
]

 
 
const Navbar = () => {
  return (
    <nav className=' items-center lg:gap-x-[4.16666666667vw]
    hidden lg:flex'>
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
