import React from 'react'

const TeamMember = ({image}) => {
  return (
    <div className='w-full h-full cursor-pointer'>
      <img src={image} alt="TeamMember" 
        className='object-cover w-full h-full'
      />
    </div>
  )
}

export default TeamMember
