import React from 'react'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
const BeforeAndAfter = ({BeforeAfterData}) => { 
  return (
    <div className='w-full lg:w-[48%]'>
         <h2 className="text62 text-[#FFFFFF] capitalize text-center">patient transformations</h2>
         <div className='lg:pt-[3.125vw] sm:pt-[4.87804878049vw] pt-[7.69230769231vw] lg:h-[unset] h-[60vw] sm:h-[42vw]'>
         <Swiper modules={[Pagination]} className='cursor-pointer before__AfterSlider slider__DotHandel'
         pagination={{ 
          clickable: true,
    }} 
    draggable={false}
    noSwiping= {true}
noSwipingClass= 'before__AfterSlider'
         simulateTouch={false}
         slidesPerView={1}
         >
          {
          BeforeAfterData.map((BeforeAfterDat,index)=>(
          <SwiperSlide key={index}>
            <ReactCompareSlider className='w-full h-full lg:hover:after:opacity-[1] lg:hover:before:opacity-[1]  
            after:transition-all after:duration-300 after:z-[2] lg:after:opacity-0 after:content-["After"] after:absolute after:right-0 after:bottom-[0] after:lg:w-[7.8125vw] after:lg:h-[2.60416666667vw] after:sm:w-[12.1951219512vw] after:sm:h-[5.48780487805vw] after:w-[17.9487179487vw] after:h-[8.97435897436vw] after:bg-[red] after:bg-opacity-[0.5] after:lg:text-[0.9375vw] after:sm:text-[2.19512195122vw] after:text-[4.10256410256vw] after:text-[#FFFFFF] after:flex after:items-center after:justify-center
            before:transition-all before:duration-300 before:z-[2] lg:before:opacity-0 before:content-["Before"] before:absolute before:left-0 before:bottom-[0] before:lg:w-[7.8125vw] before:lg:h-[2.60416666667vw] before:sm:w-[12.1951219512vw] before:sm:h-[5.48780487805vw] before:w-[17.9487179487vw] before:h-[8.97435897436vw] before:bg-[red] before:bg-opacity-[0.5] before:lg:text-[0.9375vw] before:sm:text-[2.19512195122vw] before:text-[4.10256410256vw] before:text-[#FFFFFF] before:flex before:items-center before:justify-center' 
  itemOne={<ReactCompareSliderImage className='w-full h-full' src={BeforeAfterDat.before} srcSet={BeforeAfterDat.before} alt="Before" />}
  itemTwo={<ReactCompareSliderImage className='w-full h-full' src={BeforeAfterDat.after} srcSet={BeforeAfterDat.after} alt="After" />}
   
/>
          </SwiperSlide>
          ))
          
         }
           
         </Swiper>
          
         
         </div>
         </div>
  )
}

export default BeforeAndAfter
