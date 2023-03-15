import React, { useContext, useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { WorkplaceChoose } from '../../lib/functions/workplace-choose'
import { WorkplaceBar } from '../../../widgets'
import { Context } from '../../../shared/lib/context/context'
import './workplace-page.css'

export const WorkplacePage = observer(({isPepsiCo = false}) => {

  const [tab, setTab] = useState('overview')

  const {workplaceNavigationStore: {activeTab}} = useContext(Context)

  useEffect(() => {
    setTab(activeTab)
  }, [activeTab])

  return (
    <div className='workplace-page'>
      <WorkplaceBar />
      {WorkplaceChoose(tab, isPepsiCo)}
    </div>
  )
})
