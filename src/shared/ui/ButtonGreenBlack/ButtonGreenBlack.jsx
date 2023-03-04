import React from 'react'
import './button-green-black.css'

export const ButtonGreenBlack = ({title, onClick, type = 'button'}) => {
  return (
    <button onClick={onClick} className='button-green-black' type={type}>{title}</button>
  )
}