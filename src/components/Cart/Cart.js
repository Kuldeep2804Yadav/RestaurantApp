
import React from 'react'
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Cart() {
  return (
   <div className='cart'>
      <FontAwesomeIcon icon={faShoppingCart} />
        <p>Your Cart</p>
        <div className='count'><span>0</span></div>
        
    </div>
  )
}

export default Cart
