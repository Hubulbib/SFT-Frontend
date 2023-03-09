import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ProjectUnit } from '../../../shared'
import './my-projects.css'

export const MyProjects = () => {

  const navigate = useNavigate()

  return (
    <div className='my-projects'>
      <h1>Проекты</h1>
      <ul>
        <li onClick={() => navigate('/workplace')}><ProjectUnit title={'Логистика'} statusColor={'#FF5263'}/></li>
        <li onClick={() => navigate('/workplace')}><ProjectUnit title={'Паллетизация'} statusColor={'#006944'}/></li>
      </ul>
    </div>
  )
}