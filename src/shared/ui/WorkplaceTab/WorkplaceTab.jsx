import React from 'react'
import './workplace-tab.css'

export const WorkplaceTab = ({title = ''}) => {
  return (
    <h1 className='workplace-tab'>{title}</h1>
  )
}