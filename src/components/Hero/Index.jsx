import React from 'react'
import Lottie from "lottie-react";
import BgImg from '../../assets/images/hero/backgrounds/6.jpg'
import HeroImg from '../../assets/images/hero/hero.webp'
import Content from './component/Content'
import ScrollDown from '../../assets/json/ScrollDown.json'
const Scroll = () =>{
    window.scrollBy(0, window.innerHeight);
}
const Index = () => {
    return (
        <section className='relative z-[2] '>
            <div className='relative h-[100svh]
            flex items-end sm:pb-[36.5853658537vw] lg:pb-[12vw] pb-[39.7435897436vw] overflow-hidden'>
                <div className='absolute w-full h-full
                top-0 left-0'>
                    <img src={BgImg} alt={BgImg}
                        className='absolute w-full h-full
                top-0 left-0 object-cover'
                    />
                    <img src={HeroImg} alt={HeroImg}
                        className='absolute w-full sm:w-[50%]  top-0
                 right-0 h-full object-cover mix-blend-multiply'
                    />
                    <span className='absolute w-full h-full
                top-0 left-0 gradient1 opacity-[0.5] sm:opacity-[0.7] mix-blend-normal sm:mix-blend-multiply'>
                    <Lottie animationData={ScrollDown} onClick={Scroll}  
                        className='absolute bottom-[-4vw] sm:bottom-[-2vw] left-[50%]
                        transform translate-x-[-50%] z-[2] cursor-pointer
                       lg:w-[4.6875vw] lg:h-[9.89583333333vw]
                       sm:w-[8.53658536585vw] w-[9.74358974359vw]'
                    />
                </span>
                </div>
                <Content />
                <div>

                </div>
            </div>
        </section>
    )
}

export default Index
