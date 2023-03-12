import React from 'react'
import './workplace-title.css'

export const WorkplaceTitle = ({project = '', status = 'none', stage}) => {
  return (
    <div className='workplace-title'>
      <h1>Проект {project}</h1>
      <span style={{backgroundColor: status !== 'none' ? status : 'white'}}/>
      <h1>Этап {stage}</h1>
    </div>
  )
}