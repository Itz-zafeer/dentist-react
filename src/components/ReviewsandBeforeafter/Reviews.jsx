import React from 'react'
import Quote from '../../assets/images/icons/quote.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
const Reviews = ({ReviewsData}) => {
  return (
    <div className='w-full lg:w-[48%]'>
        <h2 className="text62 text-[#FFFFFF] capitalize text-center">patient reviews</h2>
        <div className='lg:pt-[3.125vw] sm:pt-[4.87804878049vw] pt-[7.69230769231vw] '>
         <Swiper modules={[Pagination]} className='slider__DotHandel cursor-pointer'
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
  )
}

export default Reviews
