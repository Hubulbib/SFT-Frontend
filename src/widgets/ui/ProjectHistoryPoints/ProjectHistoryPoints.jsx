import React from 'react'
import { JoinMember, StatusUpdate } from '../../../shared'
import './project-history-points.css'

export const ProjectHistoryPoints = () => {
  return (
    <div className='project-history-points'>
      <StatusUpdate statusColor={'#006944'} eventTitle={'Обновление статуса'} eventPerson={'Иванов Сергей'} eventDate={'31 янв 2023'}/>
      <StatusUpdate statusColor={'#F1BD6C'} eventTitle={'Обновление статуса'} eventPerson={'Иванов Сергей'} eventDate={'30 янв 2023'}/>
      <StatusUpdate statusColor={'#D1395A'} eventTitle={'Обновление статуса'} eventPerson={'Иванов Сергей'} eventDate={'29 янв 2023'}/>
      <JoinMember eventTitle={'Присоединился участник'} eventPerson={'Иванов Сергей'} eventDate={'29 янв 2023'}/>
      <StatusUpdate
        statusColor={'#543DE3'} isLine={false} eventTitle={'Начало работы над проектом'}
        eventPerson={'Иванов Сергей'} eventDate={'28 янв 2023'}
      />
    </div>
  )
}