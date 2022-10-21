import React from 'react'
import './ProductData.css'

function productData({product}) {
  return (
    <div>
      <div>
        <div className='section'>
            <div id='img'>
            <img  src={product.image_link} alt="Hei"/>
            </div>
            <h4>{product.name}</h4>
            <p><b>Price :</b> ${product.price}</p>
            <p id='desc'><b>Description :</b> {product.description}</p>
        </div>
      </div>
    </div>
  )
}

export default productData

