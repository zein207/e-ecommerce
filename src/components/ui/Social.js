import React from 'react'

export const Social = () => {
  return (
    <div className='social__main-container mt-4'>

      <ul>

        <li>
          <a href='https://facebook.com' target="_blank" className='social__link'>
            <i className="fa-brands fa-facebook-f social__icon"></i>
          </a>
        </li>

        <li>
          <a href='https://twitter.com' target="_blank" className='social__link'>
            <i className="fa-brands fa-twitter social__icon"></i>
          </a>
        </li>

        <li>
          <a href='https://instagram.com' target="_blank" className='social__link'>
            <i className="fa-brands fa-instagram social__icon"></i>
          </a>
        </li>

        <li>
          <a href='https://linkedin.com' target="_blank" className='social__link'>
            <i className="fa-brands fa-linkedin-in social__icon"></i>
          </a>
        </li>

      </ul>
      
    </div>
  )
}
