import React from 'react'
import { Description } from './Description'
import { BigPhoto } from './BigPhoto'
import { MediumPhoto } from './MediumPhoto'
import '../../styles/rightContainer/rightContainer.css'

function RightContainer() {
  return (
    <div className='right-container'>
        <Description/>
        <div className='big'>
          <BigPhoto/>
        </div>
        <div className='medium'>
          <MediumPhoto/>
          <MediumPhoto/>
          <MediumPhoto/>
        </div>
    </div>
  )
}

export {RightContainer}