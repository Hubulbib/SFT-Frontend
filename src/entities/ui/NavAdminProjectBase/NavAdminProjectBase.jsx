import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavItem } from '../../../shared'
import ProjectBaseIcon from '../../lib/assets/nav-admin-project-base.svg'

export const NavAdminProjectBase = () => {
  return (
    <NavLink to='/project-base'>
      <NavItem icon={ProjectBaseIcon} alt={'project-base'} title={'База проектов'}/>
    </NavLink>
  )
}