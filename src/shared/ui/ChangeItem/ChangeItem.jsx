import React from 'react'
import './change-item.css'

export const ChangeItem = ({statusColor = 'white', sku = '', info = '', date = '', isLast = false}) => {
  return (
    <div className='change-item' style={isLast ? {borderBottom: '1px solid #A5A5A7'} : null}>
      <div className='change-item__title'>
        <span style={{backgroundColor: statusColor}}/>
        <h1>SKU {sku}</h1>
      </div>
      <h1 className='change-item__info'>{info}</h1>
      <h1 className='change-item__date'>{date}</h1>
    </div>
  )
}