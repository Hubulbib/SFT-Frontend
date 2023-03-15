import React, { useEffect, useContext } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { routes } from './routes/routes'
import { Context } from '../shared'
import './app.css'

export const App = observer(() => {

  const { authStore: {isAuth, checkAuth, user, isLoadingAuth} } = useContext(Context)

  useEffect(() => {
    if (localStorage.getItem('token')) {
      checkAuth()
    }
  }, [checkAuth])

  if (isLoadingAuth) {
    return (
      <>
      </>
    )
  }

  return (
    <BrowserRouter>
      {routes(isAuth, user)}
    </BrowserRouter>
  )
})