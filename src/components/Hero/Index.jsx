import React from 'react'
import BgImg from '../../assets/images/hero/backgrounds/6.jpg'
import HeroImg from '../../assets/images/hero/hero.webp'
import BookAppoinment from '../utils/BookAppoinment'

const Index = () => {
    return (
        <section>
            <div className='relative h-[100svh]
            flex items-end md:pb-[12vw]'>
                <div className='absolute w-full h-full
                top-0 left-0'>
                    <img src={BgImg} alt={BgImg}
                        className='absolute w-full h-full
                top-0 left-0 object-cover'
                    />
                    <img src={HeroImg} alt={HeroImg}
                        className='absolute w-[50%]  top-[50%] transform translate-y-[-50%]
                 right-0 h-full object-cover mix-blend-multiply'
                    />
                    <span className='absolute w-full h-full
                top-0 left-0 gradient1 opacity-[0.7] mix-blend-multiply'></span>
                </div>
                <div className='Container1680 relative z-[2]
                '>
                    <div className='md:w-[49.47916666666667vw] text-[#FFFFFF]
                   md:gap-y-[1.666666666666667vw] flex flex-col'>
                        <h1 className='text62'>
                            How about "Transform Your Smile with Expert Dental Care"?
                        </h1>
                        <BookAppoinment />
                    </div>
                </div>
                <div>

                </div>
            </div>
        </section>
    )
}

export default Index
