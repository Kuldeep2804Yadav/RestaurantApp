
import React from 'react'
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Cart(props) {
  
  return (
   <div className='cart' type='button'> 
      <FontAwesomeIcon icon={faShoppingCart}  className='cart__icon'  onClick={props.openCartHandler}/>
        <span>Your Cart</span>
        <span className='count'>0</span>
        
    </div>
  )
}

export default Cart
