import React from 'react'
import { Link } from 'react-router-dom'


export const Card = (
  {titulo = "Producto de testeo",
   img = "https://www.enter.co/wp-content/uploads/2015/09/Nuevo-logo-Google-destacada.jpg",
   precio = 600,
   id
   }
) => {


  return (
    <div>
          <h4>{titulo}</h4>
          <div>
            <img src={img} alt={titulo} />
          </div>
          <p>${precio}</p>
          <Link to={`/item/${id}`}>
          <button>Ver mas detalles</button>
          </Link>
    </div>
  )
}

