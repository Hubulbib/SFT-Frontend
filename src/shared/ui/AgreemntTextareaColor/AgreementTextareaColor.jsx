import React from 'react'
import './agreement-textarea-color.css'

export const AgreementTextareaColor = ({value, setValue, placeholder = '', styles = {}}) => {
  return (
    <textarea
      className='agreement-textarea-color' placeholder={placeholder}
      value={value} onChange={e => setValue(e.target.value)}
      style={{...styles}} disabled
    ></textarea>
  )
}