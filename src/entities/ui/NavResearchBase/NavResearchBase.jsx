import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavItem } from '../../../shared'
import ResearchBaseIcon from '../../lib/assets/nav-research-base-icon.svg'

export const NavResearchBase = () => {
  return (
    <NavLink to='/research-base'>
      <NavItem icon={ResearchBaseIcon} alt={'research-base'} title={'База исследований'}/>
    </NavLink>
  )
}