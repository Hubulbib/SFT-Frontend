import React from 'react'
import { SKUListItem } from '../../../shared'
import './sku-list.css'

export const SKUList = () => {
  return (
    <ul className='sku-list'>
      <li><SKUListItem status={'#FF5263'} id={'69856876'} firstDate={'5 фев 2023'} secondDate={'29 янв 2023'}/></li>
      <li><SKUListItem status={'#FF5263'} id={'69856875'} firstDate={'7 фев 2023'} secondDate={'28 янв 2023'}/></li>
      <li><SKUListItem status={'#006944'} id={'69856874'} firstDate={'1 фев 2023'} secondDate={'27 янв 2023'}/></li>
    </ul>
  )
}