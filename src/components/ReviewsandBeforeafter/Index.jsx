import React from 'react'
import Quote from '../../assets/images/icons/quote.svg'
import BeforeAndAfter from './BeforeAndAfter'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const BeforeAfterData = [
  {
    before:"/images/before-after/before/1.jpeg",
    after:"/images/before-after/after/1.jpeg"
  },
  {
    before:"/images/before-after/before/2.jpeg",
    after:"/images/before-after/after/2.jpeg"
  },
  {
    before:"/images/before-after/before/3.jpeg",
    after:"/images/before-after/after/3.jpeg"
  },
]
const ReviewsData = [
  {
    review:"“Dr. Lawlor is the best. His great professional attitude and humor make you feel very well taken care of and you leave feeling great. If you need a great dentist and want to have a positive dental experience this is the place for you.”",
    name:"-Therese C."
  },
  {
    review:"“Highly recommend. Good for decreasing anxiety. This office will treat you well and they really care about your well being. Love them!”",
    name:"-Geneva H."
  },
  {
    review:"“Dr. Lawlor is so wonderful, I drive all the way from Scarborough to see him! My front teeth were chipped and spaced and he fixed them right up and made them look perfect! A top notch staff and environment!!!”",
    name:"-Betsy D."
  },
]
const Index = () => { 
  return (
    <section className='relative z-[2] '>
    <div className='absolute w-full h-full top-0 left-0'>
    <span className="gradient1 mix-blend-multiply opacity-[0.6] absolute w-full h-full top-0 left-0"></span>

    </div>
       <div className='relative z-[2]'>
        <div className='Container1680 flex justify-between flex-wrap sm:gap-y-[7.31707317073vw] gap-y-[10.2564102564vw] lg:py-[6.25vw] sm:py-[9.75609756098vw] py-[15.3846153846vw]'>
        <div className='w-full lg:w-[48%]'>
        <h2 className="text62 text-[#FFFFFF] capitalize">patient reviews</h2>
        <div className='lg:pt-[3.125vw] sm:pt-[4.87804878049vw] pt-[7.69230769231vw] '>
         <Swiper modules={[Pagination]} className='slider__DotHandel'
         pagination={{ 
          clickable: true,
    }}
    spaceBetween={48} 
         slidesPerView={1}
         > 
         {
          ReviewsData.map((ReviewsDat,index)=>(
            <SwiperSlide key={index}>
           <div className='text-[#FFFFFF] flex flex-col items-center
           lg:gap-y-[1.25vw] sm:gap-y-[2.92682926829vw] gap-y-[4.10256410256vw]'>
            <img src={Quote} alt="Quote" 
              className='lg:w-[2.60416666667vw] sm:w-[5.48780487805vw] w-[8.97435897436vw]'
            />
            <p className='w-[90%] text24  text-center'>
            {ReviewsDat.review}
            </p>
            <span className='text32'>
{ReviewsDat.name}
            </span>
           </div>
           </SwiperSlide>
          ))
         }
        
        
         
        
         
           
         </Swiper>
          
         
         </div>
        </div>
         <BeforeAndAfter BeforeAfterData={BeforeAfterData}/>
        </div>
       </div>
    </section>
  )
}

export default Index
