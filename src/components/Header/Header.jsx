import React from 'react'
import { Logo } from './Logo'
import { NavMenu } from './NavMenu'
import { Carrito } from './Carrito'
import { Vector } from './Vector'
import '../../styles/header/header.css'


function Header() {
  return (
    <div className='header'>
      <ul className='header-ul'>
        <li><Logo /></li>
        <li><NavMenu /></li>
        <li><Carrito /></li>
      </ul>
      <Vector />
    </div>
  )
}

export { Header }