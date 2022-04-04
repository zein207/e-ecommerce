import React from 'react';
import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <div className='navbar__logo-container'>
      <Link 
          className="navbar__logo" 
          to="/"
      >
          april<span>.</span>
      </Link>
    </div>
  )
}
