import React, { useEffect, useState } from 'react'
import { setColor } from '../../lib/functions/setColor'
import './pick-color.css'

export const PickColor = ({value, setValue}) => {

  const [bgColor, setBgColor] = useState('#FFFFFF')

  useEffect(() => {
    setBgColor(setColor(value))
  }, [value])

  return (
    <select className='pick-color' value={value} onChange={e => setValue(e.target.value)} style={bgColor === '#FFFFFF' ? {color: '#000000',backgroundColor: bgColor} : {backgroundColor: bgColor}}>
      <option value='small'>Малые</option>
      <option value='middle'>Средние</option>
      <option value='big'>Большие</option>
      <option value='none'>Нет данных</option>
    </select>
  )
}