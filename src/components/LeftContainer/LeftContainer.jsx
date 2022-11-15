import React from 'react'
import { LSRed } from './LSRed'
import { LSPink } from './LSPink'
import '../../styles/leftContainer/leftContainer.css'

function LeftContainer() {
  return (
    <div className='left-container'>
      <LSPink/>
      <LSRed/>
      <LSRed/>
      <LSRed/>
      <LSRed/>
    </div>
  )
}

export { LeftContainer }