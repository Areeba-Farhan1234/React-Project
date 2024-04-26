import React from 'react'
import { useParams } from 'react-router-dom'

const Products = () => {
  const id = useParams().productId;
  console.log(id);
  return (
    <div>
      <p>
          PRODUCTS
        The product id is: {id}</p>
    </div>
  )
}

export default Products