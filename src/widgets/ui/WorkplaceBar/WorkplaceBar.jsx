import React, { useContext } from 'react'
import { WorkplaceTitle } from '../../../shared'
import { WorkplaceTabBar } from '../../../features'
import { Context } from '../../../shared/lib/context/context'
import { observer } from 'mobx-react-lite'

export const WorkplaceBar = observer(() => {

  const {workplaceStore: {activeProject, activeStage}} = useContext(Context)

  return (
    <div className='workplace-bar'>
      <div className='workplace-bar__content'>
        <WorkplaceTitle status={'#006944'} project={activeProject} stage={activeStage}/>
        <WorkplaceTabBar />
      </div>
      <hr />
    </div>
  )
})