import React from 'react'
import './select-choose.css'

export const SelectChoose = ({value, setValue, list = []}) => {
  return (
    <select className='select-choose' value={value} onChange={e => setValue(e.target.value)}>
      {list.map(el => <option key={el} value={el}>{el}</option>)}
    </select>
  )
}