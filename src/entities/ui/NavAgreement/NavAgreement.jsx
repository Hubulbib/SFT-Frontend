import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavItem } from '../../../shared'
import ResearchBaseIcon from '../../lib/assets/nav-research-base-icon.svg'

export const NavAgreement = () => {
  return (
    <NavLink to='/agreement'>
      <NavItem icon={ResearchBaseIcon} alt={'research-base'} title={'Согласование'}/>
    </NavLink>
  )
}