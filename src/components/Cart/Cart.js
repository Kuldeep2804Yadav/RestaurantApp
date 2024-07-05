import React, { useContext } from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import CartContext from '../store/cart-context';

function Cart(props) {
   const cartCtx = useContext(CartContext);
   const totalCountOfCartItem = cartCtx.items.reduce((prevCount,nextCount)=>{
    return prevCount+nextCount.amount;
   },0)

   return (
      <button className='cart' type='button' onClick={props.openCartHandler}> 
         <FontAwesomeIcon icon={faShoppingCart} className='cart__icon' />
         <span>Your Cart</span>
         <span className='count'>{totalCountOfCartItem}</span> 
      </button>
   );
}

export default Cart;
