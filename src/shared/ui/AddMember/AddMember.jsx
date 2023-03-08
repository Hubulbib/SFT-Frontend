import React from 'react'
import './add-member.css'

export const AddMember = ({onClick}) => {
  return (
    <div className='add-member'>
      <button onClick={onClick}>+</button>
      <h1>Добавить участника</h1>
    </div>
  )
}