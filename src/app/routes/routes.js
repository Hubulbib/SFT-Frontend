import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { MainMenuPage, ResearchBasePage, SearchSKUPage, WorkplacePage } from '../../pages'

export const routes = () => {
  return (
    <Routes>
      <Route path='/main' element={<MainMenuPage />}/>
      <Route path='/search-sku' element={<SearchSKUPage />}/>
      <Route path='/workplace' element={<WorkplacePage />}/>
      <Route path='/research-base' element={<ResearchBasePage />} />
      <Route path='/charts' element={<ResearchBasePage />} />
      <Route path='/employee-base' element={<ResearchBasePage />} />
      <Route path='/project-base' element={<ResearchBasePage />} />
      <Route path='*' element={<Navigate to={'/main'} />}/>
    </Routes>
  )
}