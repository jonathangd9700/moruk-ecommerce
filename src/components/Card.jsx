import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'


export const Card = (
  {titulo = "Producto de testeo",
   img = "https://www.enter.co/wp-content/uploads/2015/09/Nuevo-logo-Google-destacada.jpg",
   precio = 600,
   id
   }
) => {


  return (
    <div className='cardContainer'>
          <h4>{titulo}</h4>
          <div>
            <img src={img} alt={titulo} className='imgCard' />
          </div>
          <p>${precio}</p>
          <Link to={`/item/${id}`}>
          <button className='buttonDetail'>Ver mas detalles</button>
          </Link>
    </div>
  )
}

