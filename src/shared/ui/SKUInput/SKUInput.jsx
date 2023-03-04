import React from 'react'
import './sku-input.css'

export const SKUInput = ({value, setValue, placeholder}) => {
  return (
    <input className='sku-input' value={value} onChange={e => setValue(e.target.value)} placeholder={placeholder}/>
  )
}