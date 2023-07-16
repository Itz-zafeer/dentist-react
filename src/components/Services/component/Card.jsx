import React from 'react'

const Card = ({ title, paragraph, CardImg }) => {
    return (
        <div className='card'>
            <div className='absolute top-0 left-0 w-full h-full'>
                <img src={CardImg} alt={CardImg}
                    className='absolute top-0 left-0 w-full h-full object-cover '
                />
                <span className='absolute top-0 left-0 w-full h-full gradient1 mix-blend-multiply opacity-[0.8]'>

                </span>
            </div>
            <div className='relative z-[2] w-[90%]  text-[#FFFFFF]'>
                <h4 className='text32 capitalize font-[500] lg:tracking-[0.15625vw]'>
                    {title}
                </h4>
                <p className='text18 lg:mt-[0.9375vw] sm:mt-[2.19512195122vw] mt-[2.05128205128vw]'>
                    {paragraph}
                </p>
            </div>
        </div>
    )
}

export default Card
