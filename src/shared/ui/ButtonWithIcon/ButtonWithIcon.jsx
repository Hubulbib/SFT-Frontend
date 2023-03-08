import React from 'react'
import './button-with-icon.css'

export const ButtonWithIcon = ({title = '', icon, alt = ''}) => {
  return (
    <button className='button-with-icon'>
      <img src={icon} alt={alt}/>
      {title}
    </button>
  )
}