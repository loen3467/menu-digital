import React from 'react'
import {PinkAdd} from './PinkAdd'
import {Name} from './Name'
import {Price} from './Price'
import {SmallPhoto} from './SmallPhoto'
import '../../styles/centerContainer/pinkFood.css'

function PinkFood() {
  return (
    <div className='pink-food'>
        <SmallPhoto/>
        <Name/>
        <div className='pf-foot'>
          <Price/>
          <PinkAdd/>
        </div>
    </div>
  )
}

export {PinkFood}