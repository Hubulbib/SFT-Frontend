import { makeAutoObservable } from 'mobx'

export class WorkplaceNavigationStore {

  activeTab = 'overview'

  constructor() {
    makeAutoObservable(this)
  }

  setActiveTab = (tab = 'overview') => {
    this.activeTab = tab
  }
}