import React from 'react'
import './project-unit.css'

export const ProjectUnit = ({statusColor = 'white', title = ''}) => {
  return (
    <div className='project-unit'>
      <span style={{backgroundColor: statusColor}}/>
      <h1>{title}</h1>
    </div>
  )
}