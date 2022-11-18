import React from 'react'
import {PinkFood} from './PinkFood'
import {YellowFood} from './YellowFood'
import '../../styles/centerContainer/centerContainer.css'

function CenterContainer() {
  return (
    <div className='center-container'>
      - Entrada -
      <PinkFood/>
      <YellowFood/>
      <YellowFood/>
      <YellowFood/>
    </div>
  )
}

export {CenterContainer}