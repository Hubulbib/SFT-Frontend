import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavItem } from '../../../shared'
import ChartIcon from '../../lib/assets/nav-chart-icon.svg'

export const NavChart = () => {
  return (
    <NavLink to='/'>
      <NavItem icon={ChartIcon} alt={'chart'} title={'Графики'}/>
    </NavLink>
  )
}