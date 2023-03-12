import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app/app'
import { Context } from './shared/lib/context/context'
import { WorkplaceNavigationStore } from './shared/lib/stores/WorkplaceNavigationStore'
import { WorkplaceStore } from './shared/lib/stores/WorkplaceStore'

const workplaceNavigationStore = new WorkplaceNavigationStore()
const workplaceStore = new WorkplaceStore()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Context.Provider value={{
    workplaceNavigationStore, workplaceStore
  }}>
    <App />
  </Context.Provider>
)