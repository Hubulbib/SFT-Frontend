import React from 'react'
import './project-responsible.css'

export const ProjectResponsible = ({title, stage}) => {
  return (
    <h1 className='project-responsible'>Ответственный за проект “{title}” Этап {stage}</h1>
  )
}