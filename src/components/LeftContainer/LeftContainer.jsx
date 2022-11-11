import React from 'react'
import { LeftSection } from './LeftSection'
import '../../styles/leftContainer/leftContainer.css'

function LeftContainer() {
  return (
    <div className='left-container'>
      <ul>
        <li><LeftSection /></li>
        <li><LeftSection /></li>
        <li><LeftSection /></li>
        <li><LeftSection /></li>
        <li><LeftSection /></li>
      </ul>
    </div>
  )
}

export { LeftContainer }