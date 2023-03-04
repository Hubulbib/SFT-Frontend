import React, { useState } from 'react'
import { SKUInput } from '../../../shared'
import { SearchSKUByNumberButton } from '../../../features'
import './search-sku-by-number.css'

export const SearchSKUByNumber = () => {

  const [sku, setSKU] = useState('')

  return (
    <div className='search-sku-page__content__by-number'>
      <h1>Введите номер SKU</h1>
      <SKUInput value={sku} setValue={setSKU} placeholder={'Поиск по номеру'}/>
      <SearchSKUByNumberButton />
    </div>
  )
}