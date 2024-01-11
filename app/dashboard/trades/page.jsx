"use client"
import React, { useState } from 'react'
import Dashbord from '../../component/Dashbord'

import "./trade.css"
import Link from 'next/link'

// const fetchData = async () => {
//   try{
//     const response = await fetch(`https://dummyjson.com/products`);
//     return response.json();
//   }catch(error){
//      console.log(error);
//   }
// }
// const result =  fetchData()
const page = () => {
  const [product, setProduct] = useState()
  fetch(`https://dummyjson.com/products`).then(res => res.json()).then(data => setProduct(data.products))

  return (
    <div className='products'>
      <Dashbord/>
      <div className='products-wrapper'>
        {
          product && product.map((product) => 
            <div>
              <Link href={`trades/${product.id}`}>
               <img src={product.thumbnail} alt="" />
              </Link>
              <h3>{product.title}</h3>
              <div>
                <strong>${product.price}</strong>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default page