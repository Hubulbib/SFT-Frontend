import React from 'react'
import { WorkplaceTab } from '../../../shared'
import './workplace-tab-bar.css'

export const WorkplaceTabBar = () => {
  return (
    <ul className='workplace-tab-bar'>
      <li><WorkplaceTab title={'Обзор'}/></li>
      <li><WorkplaceTab title={'Проект'}/></li>
      <li><WorkplaceTab title={'SKU'}/></li>
      <li><WorkplaceTab title={'Панель мониторинга'}/></li>
    </ul>
  )
}