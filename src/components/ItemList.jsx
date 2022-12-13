 import React from "react";
 import {Card} from "./Card";

 
export const ItemList = ({productList}) => {
   return (
     <div>
        {productList.map(item =><Card key={item.id} titulo={item.titulo} precio={item.precio} descripcion={item.descripcion} categoria={item.categoria}img={item.img} id={item.id}/>)
        }
     </div>
   )
 }
 

