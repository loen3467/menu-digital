import React from 'react'
import { NVRed } from './NVRed'
import { NVPink } from './NVPink'
import '../../styles/header/navMenu.css'

function NavMenu() {
  return (
    <div className='nav-menu'>
      <NVPink/>
      <NVRed/>
      <NVRed/>
      <NVRed/>
    </div>
  )
}

export { NavMenu }