import React from 'react'
import { Link } from 'react-router-dom'

export const ProductSummary = ({ name, price, img }) => {
    return (
      <Link className='product-summary' to='/category/category-name/product-name'>
        <div className='product-summary__img-container'>
          <img src={ img } className='product-summary__img'></img>
        </div>
        <div className='text-center'>
          <h4 className='product-summary__name mt-4'>{ name }</h4>
          <p className='product-summary__price mt-1'>${ price }</p>
        </div>
      </Link>
    )
}
