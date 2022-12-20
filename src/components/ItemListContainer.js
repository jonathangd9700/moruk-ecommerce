import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../mock/products';
import { ItemList } from './ItemList';
// import ItemList from './ItemList';

export const ItemListContainer = () => {
  const [productList, setProductList] = useState([])
  const {idCategory} = useParams()
  console.log(idCategory, "Soy el id cateogory")
  
  const getProducts = () => new Promise ((resolve,reject) => {
    setTimeout(()=>resolve(products,4000));
  })

  useEffect(()=>{
    if(idCategory){
      getProducts()
      .then(products => setProductList(products.filter(product => product.categoria === idCategory)))
      .catch(error => console.log(error));
    }
    else{
      getProducts()
      .then(products => setProductList(products))
      .catch(error => console.log(error));
    }

  }, [idCategory])

  return (
    <div>
    <ItemList productList={productList}/>
    </div>
  )
}

