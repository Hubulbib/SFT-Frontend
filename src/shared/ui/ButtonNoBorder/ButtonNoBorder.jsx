import React from 'react'
import './button-no-border.css'

export const ButtonNoBorder = ({title = ''}) => {
  return (
    <button className='button-no-border'>{title}</button>
  )
}