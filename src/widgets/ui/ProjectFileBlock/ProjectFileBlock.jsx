import React from 'react'
import { FileCard } from '../../../shared'
import './project-file-block.css'

export const ProjectFileBlock = () => {
  return (
    <div className='project-file-block'>
      <h1 className='project-file-block__title'>Файлы</h1>
      <ul className='project-file-block__list'>
        <li><FileCard fileName={'Инстр 4_2_0.pdf'} statusUpdateDate={'15 сен'} statusUpdatePerson={'Иванов Сергей'}/></li>
        <li><FileCard fileName={'Инстр 4_1_0.pdf'} statusUpdateDate={'13 сен'} statusUpdatePerson={'Петров Иван'}/></li>
      </ul>
    </div>
  )
}