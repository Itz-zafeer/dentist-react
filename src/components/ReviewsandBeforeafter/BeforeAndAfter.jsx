import React from 'react'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
const BeforeAndAfter = ({BeforeAfterData}) => { 
  return (
    <div className='w-full lg:w-[48%]'>
         <h2 className="text62 text-[#FFFFFF] capitalize">patient transformations</h2>
         <div className='lg:pt-[3.125vw] sm:pt-[4.87804878049vw] pt-[7.69230769231vw] lg:h-[unset] h-[60vw] sm:h-[42vw]'>
         <Swiper modules={[Pagination]} className='before__AfterSlider slider__DotHandel'
         pagination={{ 
          clickable: true,
    }}
         simulateTouch={false}
         slidesPerView={1}
         >
          {
          BeforeAfterData.map((BeforeAfterDat,index)=>(
          <SwiperSlide key={index}>
            <ReactCompareSlider className='w-full h-full' 
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
