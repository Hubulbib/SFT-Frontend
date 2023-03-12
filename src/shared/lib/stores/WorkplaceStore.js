import { makeAutoObservable } from 'mobx'

export class WorkplaceStore {

  activeProject = ''
  activeStage = 1

  constructor() {
    makeAutoObservable(this)
  }

  setActiveProject = (project = '') => {
    this.activeProject = project
  }

  setActiveStage = (stage = 1) => {
    this.activeStage = stage
  }
}