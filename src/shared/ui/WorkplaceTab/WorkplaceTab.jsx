import React from 'react'
import { observer } from 'mobx-react-lite'
import './workplace-tab.css'

export const WorkplaceTab = observer(({title = '', onClick}) => {

  return (
    <h1 className='workplace-tab' onClick={onClick}>{title}</h1>
  )
})