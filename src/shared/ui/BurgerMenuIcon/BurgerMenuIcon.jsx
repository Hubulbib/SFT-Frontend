import React from 'react'
import BurgerMenuIconSVG from '../../lib/assets/burger-menu-icon.svg'
import './burger-menu-icon.css'

export const BurgerMenuIcon = ({setMenu}) => {
  return <img className='burger-menu-icon' src={BurgerMenuIconSVG} alt='burger-menu-icon' onClick={prev => setMenu(!prev)}/>
}