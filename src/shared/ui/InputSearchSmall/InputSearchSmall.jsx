import React from 'react'
import './input-search-small.css'

export const InputSearchSmall = ({placeholder = '', value = '', setValue, styles = {}}) => {
  return (
    <input
      className='input-search-small' value={value}
      onChange={e => setValue(e.target.value)} placeholder={placeholder}
      style={{...styles}}
    />
  )
}