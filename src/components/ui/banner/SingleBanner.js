import React from 'react'
import { Link } from 'react-router-dom'

export const SingleBanner = ({ img, title, subtitle, cta, ctaLink, imgD }) => {
    return (
      <div className='flex-center mt-5'>
        <div className='single-b__main-container mt-5 w-90'>
          <div className='single-b__text-container'>
            <h2 className='single-b__title'>{ title }</h2>
            <p className='single-b__subtitle mt-3'>{ subtitle }</p>
            <Link to={ ctaLink } className='btn mt-5'>{ cta }</Link>
          </div>

          <picture>
            <source media="(min-width: 1024px)" srcset={ imgD }></source>
            <img className='single-b__img' src={ img } alt=''></img>
          </picture>

          
        </div>
      </div>
    )
}
