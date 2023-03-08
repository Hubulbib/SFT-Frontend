import React from 'react'
import { ProjectMember } from '../../../shared'
import { AddMemberButton } from '../../../features'
import './project-member-block.css'

export const ProjectMemberBlock = () => {
  return (
    <div className='project-member-block'>
      <h1 className='project-member-block__title'>Участники проекта</h1>
      <ul className='project-member-block__list'>
        <li><AddMemberButton /></li>
        <li><ProjectMember name={'Иванов Сергей'}/></li>
        <li><ProjectMember name={'Петров Иван'}/></li>
      </ul>
    </div>
  )
}