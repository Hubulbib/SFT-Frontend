import { createContext } from 'react'
import { WorkplaceNavigationStore } from '../stores/WorkplaceNavigationStore'
import { WorkplaceStore } from '../stores/WorkplaceStore'
import { AuthStore } from '../stores/AuthStore'
import { EmployeeStore } from '../stores/EmployeeStore'

export const workplaceNavigationStore = new WorkplaceNavigationStore()
export const workplaceStore = new WorkplaceStore()
export const authStore = new AuthStore()
export const employeeStore = new EmployeeStore()

export const Context = createContext({
  workplaceNavigationStore, workplaceStore, authStore, employeeStore
})