import React from 'react'
import { WorkplaceProjectAgreement } from '../WorkplaceProjectAgreement/WorkplaceProjectAgreement'
import { ProjectHistory } from '../ProjectHistory/ProjectHistory'
import './workplace-project.css'

export const WorkplaceProject = ({isPepsiCo = false}) => {
  return (
    <div className='workplace-project' id='a1'>
      <WorkplaceProjectAgreement isPepsiCo={isPepsiCo}/>
      <ProjectHistory />
    </div>
  )
}