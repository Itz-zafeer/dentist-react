import React from 'react'
import Design from '../../assets/images/our-team/team-design.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
const TeamData = [
    {
        image: "/public/images/our-team/1.webp"
    },
    {
        image: "/public/images/our-team/2.webp"
    },
    {
        image: "/public/images/our-team/3.webp"
    },
    {
        image: "/public/images/our-team/1.webp"
    },
    {
        image: "/public/images/our-team/2.webp"
    },
    {
        image: "/public/images/our-team/3.webp"
    },
    

]
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import TeamMember from './components/TeamMember';
const Index = () => {
    return (
        <section className='relative z-[2] bg-[#FFFFFF]'>
            <div className='lg:py-[6.25vw] sm:py-[9.75609756098vw] py-[15.3846153846vw]'>
                <h2 className="text-center text62 DarkPurple capitalize">our team</h2>
                <div className='lg:pt-[3.125vw] sm:pt-[4.87804878049vw] pt-[7.69230769231vw]'>
                    <Swiper className='our__Team bg-[#000]'
                        spaceBetween={window.innerWidth > 1024 ?(window.innerWidth/100)*0.78125 :window.innerWidth > 640 ?(window.innerWidth/100)*1.82926829268:(window.innerWidth/100)*3.84615384615}
                        slidesPerView={window.innerWidth > 1024 ?4:window.innerWidth > 640 ?3 :2}
                        modules={[Autoplay]}
                        simulateTouch={false}
                        autoplay={{
                            delay: 2000, 
                        }}
                    >
                        {
                            TeamData.map((TeamDat, index) => (
                                <SwiperSlide className='swiper-slide' key={index}>
                                    <TeamMember
                                        image={TeamDat.image} />
                                </SwiperSlide>
                            ))
                        }




                    </Swiper>
                    <img src={Design} alt={Design} 
                        className='w-full'
                    />
                </div>
            </div>
        </section>
    )
}

export default Index
