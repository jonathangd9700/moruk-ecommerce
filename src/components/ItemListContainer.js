import React from 'react'

const itemListContainer = ({greeting}) => {
  return (
    <div className='text-3xl text-red-600 animate-bounce mt-7'>
        {greeting}
    </div>
  )
}

export default itemListContainer