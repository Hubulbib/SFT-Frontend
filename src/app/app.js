import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { HeaderTime } from '../entities'
import { NavMenu } from '../widgets'
import { routes } from './routes/routes'
import './app.css'

export const App = () => {

  return (
    <BrowserRouter>
      <div style={{display:'flex'}}>
        <NavMenu />
        <div style={{width: '100%'}}>
          <HeaderTime />
          {routes()}
        </div>
      </div>
    </BrowserRouter>
  )
}