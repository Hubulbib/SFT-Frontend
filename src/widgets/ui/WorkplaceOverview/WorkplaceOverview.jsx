import React from 'react'
import { ProjectMemberBlock } from '../ProjectMemberBlock/ProjectMemberBlock'
import { ProjectFileBlock } from '../ProjectFileBlock/ProjectFileBlock'
import { ProjectStageBlock } from '../ProjectStageBlock/ProjectStageBlock'
import './workplace-overview.css'

export const WorkplaceOverview = ({isPepsiCo = false}) => {
  return (
    <div className='workplace-overview'>
      <ProjectMemberBlock isPepsiCo={isPepsiCo}/>
      <ProjectFileBlock isPepsiCo={isPepsiCo}/>
      <ProjectStageBlock isPepsiCo={isPepsiCo}/>
    </div>
  )
}