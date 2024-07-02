import React from 'react'
import Cart from '../Cart/Cart'
import './Header.css'

function Header() {
  return (
    
        <div className='header'>
            <h1>ReactMeals</h1>
            <Cart/>
        </div>
    
  )
}

export default Header