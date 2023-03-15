import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { HeaderTime } from '../../entities'
import { NavMenu } from '../../widgets'
import {
  AuthPage,
  EmployeeBasePage,
  SKUBasePage,
  MainMenuPage,
  ResearchBasePage,
  SearchSKUPage,
  WorkplacePage,
  EmployeePage,
  SKUPage, PepsiCoMainMenuPage, PepsiCoAgreementPage, ChartsPage,
} from '../../pages'

export const routes = (isAuth = false, user = {}) => {

  if (!isAuth) {
    return (
      <Routes>
        <Route path='/auth' element={<AuthPage />}/>
        <Route path='*' element={<Navigate to={'/auth'} />}/>
      </Routes>
    )
  }

  if (user?.role === 'pepsico') {
    return (
      <div style={{display:'flex'}}>
        <NavMenu />
        <div style={{width: '100%'}}>
          <HeaderTime />
          <Routes>
            <Route path={'/main'} element={<PepsiCoMainMenuPage />}/>
            <Route path={'/agreement'} element={<PepsiCoAgreementPage />}/>
            <Route path={'/charts'} element={<ChartsPage />}/>
            <Route path={'/workplace'} element={<WorkplacePage isPepsiCo={true}/>}/>
            <Route path={'*'} element={<Navigate to={'/main'} />}/>
          </Routes>
        </div>
      </div>
    )
  }

  return (
    <div style={{display:'flex'}}>
      <NavMenu />
      <div style={{width: '100%'}}>
        <HeaderTime />
        <Routes>
          <Route path='/main' element={<MainMenuPage />}/>
          <Route path='/search-sku' element={<SearchSKUPage />}/>
          <Route path='/workplace' element={<WorkplacePage />}/>
          <Route path='/research-base' element={<ResearchBasePage />} />
          <Route path='/charts' element={<ChartsPage />} />
          {
            user?.role === 'admin' ?
              <>
                <Route path='/employee-base' element={<EmployeeBasePage />} />
                <Route path='/employee-base/:id' element={<EmployeePage />} />
                <Route path='/project-base' element={<SKUBasePage />} />
                <Route path='/project-base/:id' element={<SKUPage />} />
              </>
            : null
          }
          <Route path='*' element={<Navigate to={'/main'} />}/>
        </Routes>
      </div>
    </div>
  )
}