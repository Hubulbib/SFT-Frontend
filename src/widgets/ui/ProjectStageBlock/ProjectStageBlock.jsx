import React from 'react'
import { StageCard } from '../../../shared'
import './project-stage-block.css'

export const ProjectStageBlock = () => {
  return (
    <div className='project-stage-block'>
      <h1 className='project-stage-block__title'>Этапы</h1>
      <ul className='project-stage-block__list'>
        <li><StageCard status={'#006944'} stageName={'Этап 1'} statusUpdateDate={'7.02.23'} statusUpdatePerson={'Иванов Сергей'}/></li>
        <li><StageCard status={'#006944'} stageName={'Этап 2'} statusUpdateDate={'20.01.23'} statusUpdatePerson={'Петров Иван'}/></li>
        <li><StageCard status={'#FF5263'} stageName={'Этап 3'} statusUpdateDate={'15.02.23'} statusUpdatePerson={'Петров Иван'}/></li>
      </ul>
    </div>
  )
}