import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app/app'
import { Context } from './shared'
import { workplaceStore, authStore, workplaceNavigationStore, employeeStore } from './shared'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Context.Provider value={{
    workplaceNavigationStore, workplaceStore, authStore, employeeStore
  }}>
    <App />
  </Context.Provider>
)