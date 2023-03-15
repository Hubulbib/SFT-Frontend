import React from 'react'
import { ProjectMember } from '../../../shared'
import { ProjectDescription, ProjectResponsibleTitle } from '../../../entities'
import { AgreementButton } from '../../../features'
import { AgreementData } from '../AgreementData/AgreementData'
import { PersonImage } from '../../../shared'
import './workplace-project-agreement.css'

export const WorkplaceProjectAgreement = ({isPepsiCo = false}) => {
  return (
    <div className='workplace-project-agreement'>
      <ProjectResponsibleTitle />
      <ProjectMember image={PersonImage} name={'Иванов Сергей'} alt={''}/>
      <ProjectDescription isPepsiCo={isPepsiCo}/>
      <AgreementData isPepsiCo={isPepsiCo}/>
      {!isPepsiCo ? <div className='workplace-project-agreement__button'><AgreementButton /></div> : null}
    </div>
  )
}