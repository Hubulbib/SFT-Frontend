import React from 'react'
import { WorkplaceTitle } from '../../../shared'
import { WorkplaceTabBar } from '../../../features'
export const WorkplaceBar = () => {
  return (
    <div className='workplace-bar'>
      <div className='workplace-bar__content'>
        <WorkplaceTitle status={'#006944'} sku={'046230'}/>
        <WorkplaceTabBar />
      </div>
      <hr />
    </div>
  )
}