import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavItem } from '../../../shared'
import MainMenuIcon from '../../lib/assets/nav-main-menu-icon.svg'

export const NavMainMenu = () => {
  return (
    <NavLink to='/main'>
      <NavItem icon={MainMenuIcon} alt={'main-menu'} title={'Главное меню'}/>
    </NavLink>
  )
}