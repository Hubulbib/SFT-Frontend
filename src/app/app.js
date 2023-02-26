import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { NavMenu } from '../widgets'
import './app.css'

export const App = () => {
  return (
    <BrowserRouter>
      <NavMenu />
    </BrowserRouter>
  )
}