import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { MainMenuPage, SearchSKUPage, WorkplacePage } from '../../pages'

export const routes = () => {
  return (
    <Routes>
      <Route path='/main' element={<MainMenuPage />}/>
      <Route path='/search-sku' element={<SearchSKUPage />}/>
      <Route path='/workplace' element={<WorkplacePage />}/>
      <Route path='*' element={<Navigate to={'/main'} />}/>
    </Routes>
  )
}