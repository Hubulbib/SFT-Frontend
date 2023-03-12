import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProjectUnit } from '../../../shared'
import { Context } from '../../../shared/lib/context/context'
import './my-projects.css'
import { observer } from 'mobx-react-lite'

export const MyProjects = observer(() => {

  const navigate = useNavigate()
  const {workplaceStore: {setActiveProject}} = useContext(Context)

  return (
    <div className='my-projects'>
      <h1>Проекты</h1>
      <ul>
        <li onClick={() => {setActiveProject('Логистика'); navigate('/workplace')}}><ProjectUnit title={'Логистика'} statusColor={'#FF5263'}/></li>
        <li onClick={() => {setActiveProject('Паллетизация'); navigate('/workplace')}}><ProjectUnit title={'Паллетизация'} statusColor={'#006944'}/></li>
      </ul>
    </div>
  )
})