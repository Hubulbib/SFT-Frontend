import React from 'react'
import { WorkplaceBar, WorkplaceProject } from '../../../widgets'
import './workplace-page.css'

export const WorkplacePage = () => {
  return (
    <div className='workplace-page'>
      <WorkplaceBar />
      <WorkplaceProject />
    </div>
  )
}