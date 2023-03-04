import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { NavMenu } from '../widgets'
import { HeaderTime } from '../entities'
import './app.css'

export const App = () => {

  return (
    <BrowserRouter>
      <div style={{display:'flex'}}>
        <NavMenu />
        <div style={{width: '100%'}}>
          <HeaderTime />
        </div>
      </div>
    </BrowserRouter>
  )
}