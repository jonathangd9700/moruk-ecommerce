import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../mock/products';
import { ItemList } from './ItemList';
// import ItemList from './ItemList';

export const ItemListContainer = () => {
  const [productList, setProductList] = useState([])
  
  const getProducts = () => new Promise ((resolve,reject) => {
    setTimeout(()=>resolve(products,4000));
  })

  useEffect(()=>{
    getProducts()
    .then(products => setProductList(products))
    .catch(error => console.log(error));
  }, [])

  return (
    <div>
    <div className='text-3xl text-red-600 animate-bounce mt-7'>
        
    </div>
    <ItemList productList={productList}/>
    </div>
  )
}

