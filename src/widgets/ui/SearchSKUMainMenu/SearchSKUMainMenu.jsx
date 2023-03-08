import React, { useState } from 'react'
import './search-sku-main-menu.css'
import { ButtonGreenBlack, InputSearchSmall } from '../../../shared'

export const SearchSKUMainMenu = () => {

  const [sku, setSKU] = useState('')

  return (
    <div className='search-sku-main-menu'>
      <h1>Поиск SKU</h1>
      <InputSearchSmall value={sku} setValue={setSKU} placeholder={'Поиск по номеру'}/>
      <ButtonGreenBlack title={'Найти'} />
    </div>
  )
}