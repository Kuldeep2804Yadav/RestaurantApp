
import React from 'react'
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Cart(props) {
  
  return (
   <button className='cart' type='button' onClick={props.openCartHandler}> 
      <FontAwesomeIcon icon={faShoppingCart}  className='cart__icon'  />
        <span>Your Cart</span>
        <span className='count'>0</span>
        
    </button>
  )
}

export default Cart
