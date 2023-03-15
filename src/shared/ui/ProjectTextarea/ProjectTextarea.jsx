import React from 'react'
import './project-textarea.css'

export const ProjectTextarea = ({value, setValue, placeholder, disabled = false, styles = {}}) => {
  return (
    <textarea
      className='project-textarea' placeholder={placeholder}
      value={value} onChange={e => setValue(e.target.value)}
      style={styles} disabled={disabled}
    ></textarea>
  )
}