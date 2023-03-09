import React from 'react'
import './main-menu-page.css'
import { MyChanges, MyProjects, Notebook, SearchSKUMainMenu } from '../../../widgets'

export const MainMenuPage = () => {
  return (
    <div className='main-menu-page'>
      <h1 className='main-menu-page__title'>Приятной работы</h1>
      <div className='main-menu-page__content'>
        <MyProjects />
        <MyChanges />
        <Notebook />
        <SearchSKUMainMenu />
      </div>
    </div>
  )
}