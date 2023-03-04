import React from 'react'
import { SKUPageTitle } from '../../../shared'
import { SearchSKUByNumber, SearchSKUBySelect, SKUList } from '../../../widgets'
import './search-sku-page.css'

export const SearchSKUPage = () => {
  return (
    <div className='search-sku-page'>
      <SKUPageTitle title={'Поиск SKU'}/>
      <div className='search-sku-page__content'>
        <div className='search-sku-page__content__search'>
          <SearchSKUByNumber />
          <SearchSKUBySelect />
        </div>
        <SKUList />
      </div>
    </div>
  )
}