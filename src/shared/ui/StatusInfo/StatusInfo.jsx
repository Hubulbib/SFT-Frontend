import React from 'react'
import './status-info.css'

export const StatusInfo = ({statusColor = 'white', title = ''}) => {
  return (
    <div className='status-info'>
      <span style={{backgroundColor: statusColor}}/>
      <h1>{title}</h1>
    </div>
  )
}