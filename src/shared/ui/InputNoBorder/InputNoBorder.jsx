import React from 'react'
import './input-no-border.css'

export const InputNoBorder = ({value = '', setValue, placeholder = '', styles = {}}) => {
  return (
    <input
      className='input-no-border' value={value}
      onChange={e => setValue(e.target.value)}
      style={{...styles}} placeholder={placeholder}
    />
  )
}