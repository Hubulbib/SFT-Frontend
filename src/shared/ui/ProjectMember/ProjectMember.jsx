import React from 'react'
import './project-member.css'

export const ProjectMember = ({image, alt = '', name = ''}) => {
  return (
    <div className='project-member'>
      <img src={image} alt={alt}/>
      <h1>{name}</h1>
    </div>
  )
}