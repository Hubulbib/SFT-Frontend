import React from 'react'
import { ProjectMemberBlock } from '../ProjectMemberBlock/ProjectMemberBlock'
import { ProjectFileBlock } from '../ProjectFileBlock/ProjectFileBlock'
import { ProjectStageBlock } from '../ProjectStageBlock/ProjectStageBlock'
import './workplace-overview.css'

export const WorkplaceOverview = () => {
  return (
    <div className='workplace-overview'>
      <ProjectMemberBlock />
      <ProjectFileBlock />
      <ProjectStageBlock />
    </div>
  )
}