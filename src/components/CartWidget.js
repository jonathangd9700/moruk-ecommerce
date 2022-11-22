import React from 'react'
import shoppingCart from '../shopping-cart.png'

const CartWidget = () => {
  return (
    <div>
            <div className='compra'>
            <img src={shoppingCart} width='28px'/>
            <div className='circulo text-white'>3</div>
            </div>
    </div>
  )
}

export default CartWidget