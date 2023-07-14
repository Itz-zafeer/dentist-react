import React from 'react'
import Logo from '../../assets/images/icons/header-logo/logo.svg'
import Navbar from './Navbar'

const Index = () => {
  return (
    <header className='absolute w-full left-0
    z-[2] md:pt-[2.083333333333333vw]'>
       <div className='Container1680
       flex items-center justify-between'>
<div className='md:w-[10.41666666666667vw]'>
  <a href="">
    <img src={Logo} alt={Logo} className='w-full object-cover'/>
  </a>
</div>
<div>
  <Navbar />
</div>
       </div>
    </header>
  )
}

export default Index
