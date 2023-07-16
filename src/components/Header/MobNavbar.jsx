import React from 'react'
import Links from './components/Links'
import LinksData from '../Header/LinksData'
import BookAppoinment from '../utils/BookAppoinment'

const MobNavbar = () => {
    return (
        <nav className='sideBar absolute left-0 top-0 w-full h-[100svh]
    flex flex-col gap-y-[14vw] items-center pt-[45%] backdrop-blur-[40px] z-[1] transition-all duration-300 opacity-0 pointer-events-none'>
            <ul className='flex flex-col w-[90%] text-white
        text32 font-[500] gap-y-[6vw]'>

                {
                    LinksData.map((LinksDat, index) => (
                        <Links title={LinksDat.title} key={index}
                        classes="border-b-[2px] border-[#FFFFFF]
                        pb-[2vw]
                        " />

                    ))
                }

            </ul>
             <BookAppoinment />
        </nav>
    )
}

export default MobNavbar
