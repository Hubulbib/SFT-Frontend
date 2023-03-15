import React from 'react'
import './agreement-textarea.css'

export const AgreementTextarea = ({value, setValue, placeholder = '', disabled = false, styles = {}}) => {
  return (
    <textarea
      className='agreement-textarea' placeholder={placeholder}
      value={value} onChange={e => setValue(e.target.value)}
      style={{...styles}} disabled={disabled}
    >

    </textarea>
  )
}