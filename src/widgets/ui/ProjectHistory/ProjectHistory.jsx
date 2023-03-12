import React from 'react'
import { StatusInfo } from '../../../shared'
import { ProjectHistoryPoints } from '../ProjectHistoryPoints/ProjectHistoryPoints'
import './project-history.css'

export const ProjectHistory = () => {
  return (
    <div className='project-history'>
      <h1 className='project-history__title'>Какой статус проекта?</h1>
      <div className='project-history__status-info'>
        <StatusInfo statusColor={'#006944'} title={'По плану'}/>
        <StatusInfo statusColor={'#F1BD6C'} title={'Под угрозой'}/>
        <StatusInfo statusColor={'#D1395A'} title={'Отстает'}/>
        <StatusInfo statusColor={'#543DE3'} title={'Начало работы'}/>
        <StatusInfo title={'Нет данных'}/>
      </div>
      <ProjectHistoryPoints />
    </div>
  )
}