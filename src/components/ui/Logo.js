import React from 'react';
import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <Link 
        className="navbar__logo" 
        to="/"
    >
        april<span>.</span>
    </Link>
  )
}
