import React, { useState } from 'react'
import './search-sku-main-menu.css'
import { ButtonGreenBlack, InputSearchSmall } from '../../../shared'
import { useNavigate } from 'react-router-dom'

export const SearchSKUMainMenu = () => {

  const navigate = useNavigate()

  const [sku, setSKU] = useState('')

  return (
    <div className='search-sku-main-menu'>
      <h1>Поиск SKU</h1>
      <InputSearchSmall value={sku} setValue={setSKU} placeholder={'Поиск по номеру'}/>
      <ButtonGreenBlack title={'Найти'} onClick={() => navigate('/search-sku')}/>
    </div>
  )
}