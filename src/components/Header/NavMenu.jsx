import React from 'react'
import { NavMenuAtom } from './NavMenuAtom'
import '../../styles/header/navMenu.css'

function NavMenu() {
  return (
    <div className='nav-menu'>
      <ul>
        <li><NavMenuAtom /></li>
        <li><NavMenuAtom /></li>
        <li><NavMenuAtom /></li>
        <li><NavMenuAtom /></li>
      </ul>
    </div>
  )
}

export { NavMenu }