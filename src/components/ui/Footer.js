import React from 'react'
import { Link } from 'react-router-dom'
import { accordionTrigger } from '../../helpers/accordionTrigger'
import { Logo } from './Logo'
import { Newsletter } from './Newsletter'
import { Social } from './Social'

export const Footer = () => {
  return (
    <div className='footer__main-container mt-5'>

      <div className='w-100'>

        <Newsletter />

        <Social />
      </div>

      <div className='footer__menu w-100 mt-5'>

        <div>
          <h3 className='accordion-trigger' onClick={ accordionTrigger }>About April</h3>

          <ul className=' mt-2 accordion-content'>
            <li>
              <Link to='/blog' className='footer__link'>Blog</Link>
            </li>
            <li>
              <Link to='/contact' className='footer__link'>Contact Us</Link>
            </li>
          </ul>

        </div>


        <div className='mt-3'>
          <h3 className='accordion-trigger' onClick={ accordionTrigger }>Shopguide</h3>

          <ul className=' mt-2 accordion-content'>
            <li>
              <Link to='/category/category-name' className='footer__link'>Shop</Link>
            </li>
            <li>
              <Link to='/my-account' className='footer__link'>My Account</Link>
            </li>
            <li>
              <Link to='/wishlist' className='footer__link'>Wishlist</Link>
            </li>
          </ul>

        </div>


      </div>

      <div className='w-100 mt-5'>
        <Logo />

        <div className='footer__copy mt-4'>
          <p>Copyright &copy; 2022. All rights reserved. April.</p>
        </div>
      </div>
      
    </div>
  )
}
