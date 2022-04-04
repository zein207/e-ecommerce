import React from 'react'
import { toggleComponent } from '../../helpers/toggleComponent'

export const Cart = () => {
  return (
    <div className='navbar__collapse navbar__collapse-cart'>
      <button className='navbar__close-btn' onClick={ () => { toggleComponent('cart', 'right') } }>
        <i class="fa-solid fa-xmark fa-3x"></i>
      </button>
      <h1>Cart</h1>
    </div>
  )
}
