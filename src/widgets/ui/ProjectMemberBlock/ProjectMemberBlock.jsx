import React from 'react'
import { ProjectMember } from '../../../shared'
import { AddMemberButton } from '../../../features'
import { PersonImage } from '../../../shared'
import './project-member-block.css'

export const ProjectMemberBlock = () => {
  return (
    <div className='project-member-block'>
      <h1 className='project-member-block__title'>Участники проекта</h1>
      <ul className='project-member-block__list'>
        <li><AddMemberButton /></li>
        <li><ProjectMember image={PersonImage} name={'Иванов Сергей'}/></li>
        <li><ProjectMember image={PersonImage} name={'Петренко Алексей'}/></li>
      </ul>
    </div>
  )
}