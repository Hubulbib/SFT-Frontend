import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app/app'
import { WorkplaceNavigationStore } from './features'

const workplaceNavigationStore = new WorkplaceNavigationStore()

export const Context = createContext({
  workplaceNavigationStore
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Context.Provider value={{
    workplaceNavigationStore
  }}>
    <App />
  </Context.Provider>
)