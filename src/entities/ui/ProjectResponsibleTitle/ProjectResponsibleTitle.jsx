import React, { useContext } from 'react'
import {ProjectResponsible} from '../../../shared'
import {observer} from 'mobx-react-lite'
import { Context } from '../../../shared/lib/context/context'

export const ProjectResponsibleTitle = observer(() => {

  const {workplaceStore: {activeProject, activeStage}} = useContext(Context)

  return (
    <ProjectResponsible title={activeProject} stage={activeStage}/>
  )
})