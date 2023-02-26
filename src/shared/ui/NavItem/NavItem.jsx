import React from 'react'
import './nav-item.css'

export const NavItem = ({icon, alt, title}) => {
  return (
    <div className='nav-item'>
      <img src={icon} alt={alt}/>
      <div><h1>{title}</h1></div>
    </div>
  )
}