import React from 'react'
import './sku-list-item.css'

export const SKUListItem = ({status = 'none', id = '', firstDate = '', secondDate = ''}) => {
  return (
    <div className='sku-list-item'>
      <span className='sku-list-item__status' style={{backgroundColor: status}}/>
      <h1 className='sku-list-item__id'>{id}</h1>
      <h1 className='sku-list-item__date'>{firstDate}</h1>
      <h1 className='sku-list-item__date'>{secondDate}</h1>
    </div>
  )
}