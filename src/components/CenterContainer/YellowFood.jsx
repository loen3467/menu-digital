import React from 'react'
import {OrangeAdd} from './OrangeAdd'
import {Name} from './Name'
import {Price} from './Price'
import {SmallPhoto} from './SmallPhoto'
import '../../styles/centerContainer/yellowFood.css'

function YellowFood() {
  return (
    <div className='yellow-food'>
        <SmallPhoto/>
        <Name/>
        <div className='pf-foot'>
          <Price/>
          <OrangeAdd/>
        </div>
    </div>
  )
}

export {YellowFood}