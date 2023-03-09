import React from 'react'
import { ProjectMember } from '../../../shared'
import { ProjectDescription, ProjectResponsibleTitle } from '../../../entities'
import { AgreementButton } from '../../../features'
import { AgreementData } from '../AgreementData/AgreementData'
import './workplace-project-agreement.css'

export const WorkplaceProjectAgreement = () => {
  return (
    <div className='workplace-project-agreement'>
      <ProjectResponsibleTitle />
      <ProjectMember name={'Иванов Сергей'} alt={''}/>
      <ProjectDescription />
      <AgreementData />
      <div className='workplace-project-agreement__button'><AgreementButton /></div>
    </div>
  )
}