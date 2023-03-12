import React, { useContext } from 'react'
import { StageCard } from '../../../shared'
import './project-stage-block.css'
import { Context } from '../../../shared/lib/context/context'
import { observer } from 'mobx-react-lite'

export const ProjectStageBlock = observer(() => {

  const {workplaceStore: {setActiveStage}, workplaceNavigationStore: {setActiveTab}} = useContext(Context)

  return (
    <div className='project-stage-block'>
      <h1 className='project-stage-block__title'>Этапы</h1>
      <ul className='project-stage-block__list'>
        <li onClick={() => {setActiveStage(1); setActiveTab('project')}}><StageCard status={'#006944'} stageName={'Этап 1'} statusUpdateDate={'7.02.23'} statusUpdatePerson={'Иванов Сергей'}/></li>
        <li onClick={() => {setActiveStage(2); setActiveTab('project')}}><StageCard status={'#006944'} stageName={'Этап 2'} statusUpdateDate={'20.01.23'} statusUpdatePerson={'Петров Иван'}/></li>
        <li onClick={() => {setActiveStage(3); setActiveTab('project')}}><StageCard status={'#FF5263'} stageName={'Этап 3'} statusUpdateDate={'15.02.23'} statusUpdatePerson={'Петров Иван'}/></li>
      </ul>
    </div>
  )
})