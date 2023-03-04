import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavItem } from '../../../shared'
import EmployeeBaseIcon from '../../lib/assets/nav-admin-employee-base-icon.svg'

export const NavAdminEmployeeBase = () => {
  return (
    <NavLink to='/'>
      <NavItem icon={EmployeeBaseIcon} alt={'employee-base'} title={'База сотрудников'}/>
    </NavLink>
  )
}