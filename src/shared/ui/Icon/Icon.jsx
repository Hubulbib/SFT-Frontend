import React from 'react'
import './icon.css'

export const Icon = ({icon, alt = '', styles = {}}) => {
  return (
    <img className='icon' src={icon} alt={alt} style={{...styles}}/>
  )
}