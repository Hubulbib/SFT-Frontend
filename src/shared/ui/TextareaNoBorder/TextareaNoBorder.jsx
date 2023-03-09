import React from 'react'
import './textarea-no-border.css'

export const TextareaNoBorder = ({placeholder = '', value = '', setValue}) => {
  return (
    <textarea
      className='textarea-no-border' value={value}
      onChange={e => setValue(e.target.value)} placeholder={placeholder}
    ></textarea>
  )
}