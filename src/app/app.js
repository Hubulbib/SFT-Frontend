import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { HeaderTime } from '../entities'
import { NavMenu } from '../widgets'
import { WorkplacePage } from '../pages'
import './app.css'

export const App = () => {

  return (
    <BrowserRouter>
      <div style={{display:'flex'}}>
        <NavMenu />
        <div style={{width: '100%'}}>
          <HeaderTime />
          <WorkplacePage />
        </div>
      </div>
    </BrowserRouter>
  )
}