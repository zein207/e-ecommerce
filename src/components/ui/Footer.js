import React from 'react'
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

      <div className='w-100 mt-5'>
        <Logo />

        <div className='footer__copy mt-4'>
          <p>Copyright &copy; 2022. All rights reserved. April.</p>
        </div>
      </div>
      
    </div>
  )
}
