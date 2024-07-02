import React from 'react'
import Button from '../UI/Button/Button'
import './Form.css'

function Form() {
  return (
    <form>
        <div className='input'>
            <label htmlFor="quantity">Amount </label>
            <input id='quantity' type='number'/>
        </div>
        <Button  title="+Add" className="button"/>
    </form>
  )
}

export default Form