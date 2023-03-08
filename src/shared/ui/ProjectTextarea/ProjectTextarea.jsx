import React from 'react'
import './project-textarea.css'

export const ProjectTextarea = ({value, setValue, placeholder}) => {
  return (
    <textarea
      className='project-textarea' placeholder={placeholder}
      value={value} onChange={e => setValue(e.target.value)}
    ></textarea>
  )
}