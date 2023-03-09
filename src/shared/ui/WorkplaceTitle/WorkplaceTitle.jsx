import React from 'react'
import './workplace-title.css'

export const WorkplaceTitle = ({sku = '', status = 'none'}) => {
  return (
    <div className='workplace-title'>
      <h1>SKU {sku}</h1>
      <span style={{backgroundColor: status !== 'none' ? status : 'white'}}/>
    </div>
  )
}