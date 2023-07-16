import React from 'react'

const Links = ({title,classes}) => { 
  return (
    <li className={`${classes ? classes : ""}`}>
    <span  >{title}</span>
  </li>
  )
}

export default Links
