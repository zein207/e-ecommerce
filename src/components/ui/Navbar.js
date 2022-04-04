import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Cart } from './Cart';
import { Logo } from './Logo';
import { Search } from './Search';

export const Navbar = () => {
  return (
    <nav className="navbar">

        <div className='navbar__brand'>
            <i className="fa-solid fa-bars-staggered"></i>
            <Logo />
        </div>
            

        <div className="navbar__collapse">
            <div className="navbar__nav">

                <div>
                    <Logo />
                </div>

                <NavLink 
                    activeClassName="active"
                    className="nav__item nav__link" 
                    exact
                    to="/category/category-name"
                >
                    Shop
                </NavLink>

                <NavLink 
                    activeClassName="active"
                    className="nav__item nav__link" 
                    exact
                    to="/contact"
                >
                    Contact Us
                </NavLink>

                <NavLink 
                    activeClassName="active"
                    className="nav__item nav__link" 
                    exact
                    to="/blog"
                >
                    Blog
                </NavLink>
            </div>
        </div>

        <div className='navbar__ui-items'>
            <Cart />
            <Search />
        </div>

    </nav>
  )
}
