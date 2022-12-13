import React from 'react'

const ItemDetail = ({item}) => {
  return (
    <div>
        <article>
            <h1>{item.titulo}</h1>
            <div>
                <img src={item.img} alt={item.titulo} />
            </div>
            <div>
                <p>{item.descripcion}</p>
                <p>Precio: ${item.precio}</p>
            </div>
        </article>
    </div>
  )
}

export default ItemDetail