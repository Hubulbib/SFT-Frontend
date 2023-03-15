import React from 'react'
import './add-member.css'

export const AddMember = ({onClick, text = 'Добавить участника'}) => {
  return (
    <div className='add-member'>
      <button onClick={onClick}>+</button>
      <h1>{text}</h1>
    </div>
  )
}