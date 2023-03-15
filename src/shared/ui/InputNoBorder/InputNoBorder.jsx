import React from 'react'
import './input-no-border.css'

export const InputNoBorder = ({value = '', setValue, placeholder = '', disabled = false, styles = {}}) => {
  return (
    <input
      className='input-no-border' value={value}
      onChange={e => setValue(e.target.value)}
      style={{...styles}} placeholder={placeholder}
      disabled={disabled}
    />
  )
}