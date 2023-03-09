import React from 'react'
import { WorkplaceProjectAgreement } from '../WorkplaceProjectAgreement/WorkplaceProjectAgreement'
import { ProjectHistory } from '../ProjectHistory/ProjectHistory'
import './workplace-project.css'

export const WorkplaceProject = () => {
  return (
    <div className='workplace-project'>
      <WorkplaceProjectAgreement />
      <ProjectHistory />
    </div>
  )
}