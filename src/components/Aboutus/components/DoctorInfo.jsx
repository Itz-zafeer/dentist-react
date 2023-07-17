import React from 'react'

const DoctorInfo = ({image,title,classes}) => {
  return (
    <div className={`flex justify-between items-center flex-wrap sm:gap-y-[6.09756097561vw] gap-y-[7.69230769231vw] ${classes}`}>
                            <div className='lg:w-[31.25vw] lg:h-[36.4583333333vw] relative'>
                            <span className='absolute w-full h-full top-0 left-0 bg-[#000] bg-opacity-[0.1]'></span>
                                <img src={image} alt={image}
                                    className='w-full h-full object-cover'
                                />
                            </div>
                            <div className='lg:w-[39.5833333333vw] text-[#000] flex flex-col'>
                                <div>
                                    <h5 className='text32 font-[500] text-[#266980]'>{title}</h5>
                                    <span className='text18 block lg:mt-[0.3125vw]'>
                                        Why dentistry?
                                    </span>
                                    <p className='text24 lg:mt-[1.25vw] sm:mt-[2.92682926829vw] mt-[4.10256410256vw]'>
                                        I chose dentistry because it was my father's passion that inspired me from a young age. Growing up, I witnessed the incredible impact he made on people's lives through his dental practice. The joy he found in helping patients and the smiles he transformed truly impressed upon me the power of dentistry.
                                    </p>
                                </div>
                                <div>
                                    <h5 className='text32 font-[500] text-[#266980] lg:my-[1.25vw] sm:my-[2.92682926829vw] my-[4.10256410256vw]'>Education</h5>
                                    <ul className='text24 list-disc lg:pl-[1.14583333333vw] sm:pl-[3.17073170732vw] pl-[5.64102564103vw]'>
                                        <li>
                                            BA in Medical Humanities, Baylor University
                                        </li>
                                        <li>
                                            DDS, University of Oklahoma
                                        </li>
                                        <li>
                                            Residency in Advanced Education in General Dentistry, University of Oklahoma
                                        </li>
                                    </ul>
                                </div>
                                <span className='text32 font-[500] text-[#266980] lg:mt-[1.25vw] sm:mt-[2.92682926829vw] mt-[4.10256410256vw]'>
                                    I’m so proud of my team here at Dental Care. We do such great work together serving our patients and our community!
                                </span>
                            </div>
                        </div>
  )
}

export default DoctorInfo
