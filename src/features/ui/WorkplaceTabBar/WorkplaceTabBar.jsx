import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { WorkplaceTab } from '../../../shared'
import { Context } from '../../../index'
import './workplace-tab-bar.css'

export const WorkplaceTabBar = observer(() => {

  const {workplaceNavigationStore: {activeTab, setActiveTab}} = useContext(Context)

  return (
    <ul className='workplace-tab-bar'>
      <li><WorkplaceTab title={'Обзор'} onClick={activeTab === 'overview' ? null : () => setActiveTab('overview')}/></li>
      <li><WorkplaceTab title={'Проект'} onClick={activeTab === 'project' ? null : () => setActiveTab('project')}/></li>
      <li><WorkplaceTab title={'SKU'} onClick={activeTab === 'sku' ? null : () => setActiveTab('sku')}/></li>
      <li><WorkplaceTab title={'Панель мониторинга'} onClick={activeTab === 'dashboard' ? null : () => setActiveTab('dashboard')}/></li>
    </ul>
  )
})