import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../mock/products'
import ItemDetail from './ItemDetail'

export const ItemDetailContainer = () => {

    const {id} = useParams();
    const [item, setItem] = useState()
    const getProducts = () => new Promise ((resolve,reject) => {
        setTimeout(()=>resolve(products.find(product => product.id == id),4000));
      })
    
      useEffect(()=>{
        getProducts()
        .then(products => setItem(products))
        .catch(error => console.log(error));
      }, [])
        

  return (
    <div>
        {
            item ? <ItemDetail item={item} className= "text-3xl text-red-600 animate-bounce mt-7"/>
            :
            <h1>Work In Progress</h1>
        }
    </div>
  )
}
