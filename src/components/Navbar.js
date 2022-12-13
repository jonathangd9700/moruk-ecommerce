import React from 'react'
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const navbar = () => {
  return (
    <div href='../public/index.html' className='flex flex-col'> 
        <a><h1 className='font-mono text-2xl font-bold'>M O R U K</h1></a>
        <div className="flex justify-around bg-black">
            <Link to={"/"}>
             <span className='text-white'>Home</span>
            </Link>
            <Link>
            <span className='text-white'>Productos</span>
            </Link>
            <Link>
            <span className='text-white'>Soporte</span>
            </Link>
            <CartWidget/>
        </div>
    </div>
  )
}

export default navbar