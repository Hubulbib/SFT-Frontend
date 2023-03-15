import React from 'react'
import { SKUListItem } from '../../../shared'
import './sku-list.css'
import { useNavigate } from 'react-router-dom'

export const SKUList = () => {

  const navigate = useNavigate()

  return (
    <ul className='sku-list'>
      <li onClick={() => navigate('/workplace')}><SKUListItem status={'#FF5263'} id={'440023276'} firstDate={'5 фев 2023'} secondDate={'29 янв 2023'}/></li>
    </ul>
  )
}