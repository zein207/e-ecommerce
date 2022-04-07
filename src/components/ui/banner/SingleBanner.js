import React from 'react'
import { Link } from 'react-router-dom'

export const SingleBanner = ({ img, title, subtitle, cta, ctaLink }) => {
    return (
      <div className='single-b__main-container mt-5'>
        <div className='single-b__text-container'>
          <h2 className='single-b__title'>{ title }</h2>
          <p className='single-b__subtitle mt-3'>{ subtitle }</p>
          <Link to={ ctaLink } className='btn mt-5'>{ cta }</Link>
        </div>

        <img className='single-b__img' src={ img } alt=''></img>
        
      </div>
    )
}
