import React from 'react'
import './status-info.css'

export const StatusInfo = ({statusColor = 'white', title = '', styles = {}}) => {
  return (
    <div className='status-info' style={styles}>
      <span style={{backgroundColor: statusColor}}/>
      <h1>{title}</h1>
    </div>
  )
}