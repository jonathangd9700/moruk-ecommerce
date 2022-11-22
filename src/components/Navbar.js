import React from 'react'
import CartWidget from './CartWidget';

const navbar = () => {
  return (
    <div href='../public/index.html' className='flex flex-col'> 
        <a><h1 className='font-mono text-2xl font-bold'>M O R U K</h1></a>
        <div className="flex justify-around bg-black">
            <a href='../public/index.html' className='text-white'>Home</a>
            <a className='text-white'>Productos</a>
            <a className='text-white'>Soporte</a>
            <CartWidget/>
        </div>
    </div>
  )
}

export default navbar