import React from 'react'
import { PersonImage } from '../../../shared'
import './account-info.css'

export const AccountInfo = () => {
  return (
    <div className='account-info'>
      <img src={PersonImage} alt='account-avatar'/>
      <h1>Бартенев Никита</h1>
    </div>
  )
}