import React from 'react'
import Logo from '../../assets/images/icons/header-logo/logo.svg'
import Navbar from './Navbar'

const Index = () => {
  return (
    <header className='absolute w-full left-0
    z-[2] sm:pt-[4.26829268293vw] lg:pt-[2.083333333333333vw] pt-[8.97435897436vw]'>
       <div className='Container1680
       flex items-center justify-between'>
<div className='sm:w-[18.2926829268vw] lg:w-[10.41666666666667vw]
w-[25.641025641vw]'>
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
