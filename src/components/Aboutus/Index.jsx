import React from 'react'
import AboutUs from '../../assets/images/about-us/about-us.webp'
import DoctorImg1 from '../../assets/images/about-us/doctors/1.jpeg'
import DoctorImg2 from '../../assets/images/about-us/doctors/2.jpeg'
import DoctorInfo from './components/DoctorInfo'
import BookAppoinment from '../utils/BookAppoinment'

const Index = () => {
    return (
        <section className='relative z-[2] bg-[#FFFFFF]'>
            <div className='relative'>
                
                <div className='relative z-[2] Container1440 lg:pb-[6.25vw] sm:pb-[9.75609756098vw] pb-[15.3846153846vw]   lg:pt-[9.375vw] sm:pt-[14.6341463415vw] pt-[20.5128205128vw]'>
                    <h2 className="text62 DarkPurple capitalize">About Us</h2>
                    <div className='flex items-stretch justify-between flex-col-reverse lg:flex-row sm:gap-y-[6.09756097561vw] gap-y-[7.69230769231vw] lg:my-[4.16666666667vw] sm:my-[7.31707317073vw] my-[7.69230769231vw]'>
                    <div className='lg:w-[48%]  text-[#000] '>
                        <h4 className='text44 font-[500] text-[#266980]'>
                            Exceptional Dental Care in a Comfortable and Friendly Environment
                        </h4>
                        <p className=' text22 lg:mt-[0.9375vw] sm:mt-[2.19512195122vw] mt-[2.05128205128vw]'>
                            At Dentist Practice Name, we are committed to providing exceptional dental care in a comfortable and friendly environment. Led by Dr. Dentist Name, our skilled team utilizes the latest advancements in dentistry to address your unique dental needs. We offer a comprehensive range of services, from routine check-ups to restorative and cosmetic dentistry. With a focus on patient education and proactive care, we strive to empower you to maintain optimal oral health. Schedule your appointment today and experience our personalized and compassionate dental care.
                        </p>
                    </div>
                    <div className='w-full lg:w-[48%] relative'>
                    <span className="absolute w-full h-full top-0 left-0 bg-[#000] bg-opacity-[0.1]"></span>
<img src={AboutUs} alt="AboutUs" 
    className='w-full h-full object-cover'
/>
                    </div>
                    </div>
                    <div className='lg:pt-[2.08333333333vw] sm:pt-[4.87804878049vw] pt-[6.15384615385vw]
                    flex flex-col lg:gap-y-[6.25vw] sm:gap-y-[9.75609756098vw] gap-y-[10.2564102564vw]'>
                        <DoctorInfo title="Dr. Ryan Anderson"
                            image={DoctorImg1} 
                        />
                        <DoctorInfo title="Dr. Benjamin Thompson"
                            image={DoctorImg2} 
                            classes="flex-row-reverse"
                        />
                    </div>
                    <BookAppoinment 
                        classes="mx-[auto]
                        lg:mt-[6.25vw]
                        sm:mt-[9.75609756098vw] 
                        mt-[12.8205128205vw]
                        "
                    />
                </div>
            </div>
        </section>
    )
}

export default Index
