import React, { useEffect } from 'react'
import Logo from '../../assets/images/icons/header-logo/logo.svg'
import Navbar from './Navbar'
import MobNavbar from './MobNavbar'


const Index = () => {
 useEffect(()=>{
   const menu = document.querySelector(".menu")
   const sideBar = document.querySelector(".sideBar")
   const body = document.querySelector("body")
   menu.onclick = () => {
    sideBar.classList.toggle("active");
    menu.classList.toggle("active");
    body.classList.toggle("active");
   }
 },[])
  return (
    <header className='absolute w-full left-0
    z-[3] sm:pt-[4.26829268293vw] lg:pt-[2.083333333333333vw] pt-[8.97435897436vw]'>
      <div className='Container1680  
       flex items-center justify-between'>
        <div className='sm:w-[18.2926829268vw] lg:w-[10.41666666666667vw]
w-[25.641025641vw] relative z-[2]'>
          <a href="">
            <img src={Logo} alt={Logo} className='w-full object-cover' />
          </a>
        </div>
        <div>
          <div className='lg:hidden relative z-[2]'>
            <div className='menu w-[6vw] h-[6vw] cursor-pointer'>
              <span className='top-0'></span>
              <span className='top-[30%]'></span>
              <span className='top-[60%]'></span>
            </div>
          </div>
          {window.innerWidth >= 1024 ? <Navbar /> : <MobNavbar />}

        </div>
      </div>
    </header>
  )
}

export default Index
