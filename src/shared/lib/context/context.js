import { createContext } from 'react'
import { WorkplaceNavigationStore } from '../stores/WorkplaceNavigationStore'
import { WorkplaceStore } from '../stores/WorkplaceStore'

const workplaceNavigationStore = new WorkplaceNavigationStore()
const workplaceStore = new WorkplaceStore()

export const Context = createContext({
  workplaceNavigationStore, workplaceStore
})