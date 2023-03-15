import React from 'react'
import { SearchSKUByNumber, SearchSKUBySelect, SKUList } from '../../../widgets'
import './pepsico-main-menu-page.css'

export const PepsiCoMainMenuPage = () => {
  return (
    <div className='pepsico-main-menu-page'>
      <h1 className='main-menu-page__title'>Приятной работы</h1>
      <div className='pepsico-main-menu-page__content'>
        <div className='pepsico-main-menu-page__content__search'>
          <SearchSKUByNumber />
          <SearchSKUBySelect />
        </div>
        <SKUList />
      </div>
    </div>
  )
}