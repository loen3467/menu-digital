import React from 'react'
import { Logo } from './Logo'
import { NavMenu } from './NavMenu'
import { Carrito } from './Carrito'
import { Vector } from './Vector'
import '../../styles/header/header.css'

function Header() {
  return (
    <div className='header'>
      <div className='header-top'>
        <Logo/>
        <NavMenu/>
        <Carrito/>
      </div>
      <div className='vector'>
        <Vector/>
      </div>
    </div>
  )
}

export { Header }