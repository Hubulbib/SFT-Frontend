import React from 'react'
import { getHeaderTime } from '../../lib/functions/getHeaderTime'
import './header-time.css'

export const HeaderTime = () => {
  return (
    <div className='header-time'>
      <h1>{getHeaderTime()}</h1>
    </div>
  )
}