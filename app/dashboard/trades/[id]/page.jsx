"use client"
import React, { useEffect, useState } from 'react'
import Dashbord from '../../../component/Dashbord';
import "../trade.css"

const page = ({params}) => {
    const [getSingleProduct, setSingleProduct] = useState()
    const id = params.id;
    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`).then(res => res.json()).then(data => setSingleProduct(data))
    } ,[])
    console.log(getSingleProduct);
  return (
    <div className='products'>
        <Dashbord/>
        <div className='single_product-wrapper'>
            <div>
               <img src={getSingleProduct?.thumbnail} alt="" />
              <h3>{getSingleProduct?.title}</h3>
              <div>
                <strong>${getSingleProduct?.price}</strong>
              </div>
            </div>
        </div>
    </div>
  )
}

export default page