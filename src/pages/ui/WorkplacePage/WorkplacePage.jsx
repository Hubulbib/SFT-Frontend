import React, { useContext, useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { WorkplaceChoose } from '../../lib/functions/workplace-choose'
import { WorkplaceBar } from '../../../widgets'
import { Context } from '../../../index'
import './workplace-page.css'

export const WorkplacePage = observer(() => {

  const [tab, setTab] = useState('overview')

  const {workplaceNavigationStore: {activeTab}} = useContext(Context)

  useEffect(() => {
    setTab(activeTab)
  }, [activeTab])

  return (
    <div className='workplace-page'>
      <WorkplaceBar />
      {WorkplaceChoose(tab)}
    </div>
  )
})
