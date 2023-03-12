import React, { useState } from 'react'
import {
  AccountInfo,
  NavAdminEmployeeBase,
  NavAdminProjectBase,
  NavChart,
  NavMainMenu,
  NavResearchBase,
} from '../../../entities'
import { BurgerMenuIcon, SftLogo } from '../../../shared'
import './nav-menu.css'

export const NavMenu = () => {

  const [active, setActive] = useState(false)

  return (
    <nav className={active ? 'nav-menu active' : 'nav-menu'}>
      <div className='nav-menu__header'>
        <div onClick={() => setActive(prev => !prev)}><BurgerMenuIcon /></div>
        <SftLogo />
      </div>
      <AccountInfo />
      <ul className='nav-menu__links'>
        <li><NavMainMenu /></li>
        <li><NavResearchBase /></li>
        <li><NavChart /></li>
      </ul>
      <>
        <hr />
        <h1 className='admin-h1'>Admin-панель</h1>
      </>
      <ul className='nav-menu__links'>
        <li><NavAdminEmployeeBase /></li>
        <li><NavAdminProjectBase /></li>
      </ul>
    </nav>
  )
}