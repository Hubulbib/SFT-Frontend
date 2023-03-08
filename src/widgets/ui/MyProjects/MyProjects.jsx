import React from 'react'
import { ProjectUnit } from '../../../shared'
import './my-projects.css'

export const MyProjects = () => {
  return (
    <div className='my-projects'>
      <h1>Проекты</h1>
      <ul>
        <li><ProjectUnit title={'Логистика'} statusColor={'#FF5263'}/></li>
        <li><ProjectUnit title={'Паллетизация'} statusColor={'#006944'}/></li>
      </ul>
    </div>
  )
}