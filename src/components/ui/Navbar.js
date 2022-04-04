import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { toggleComponent } from '../../helpers/toggleComponent';
import { Cart } from './Cart';
import { Logo } from './Logo';
import { Search } from './Search';

export const Navbar = () => {

    return (
        <nav className="navbar">

            <div className='navbar__brand'>
                <i className="fa-solid fa-bars-staggered fa-2x" onClick={ () => toggleComponent( 'menu', 'left' ) }></i>
                <Logo />
            </div>
                

            <div className="navbar__collapse navbar__collapse-menu">
                <div className="navbar__nav">

                    <button className='navbar__close-btn' onClick={ () => { toggleComponent( 'menu', 'left' ) } }>
                        <i class="fa-solid fa-xmark fa-3x"></i>
                    </button>

                    <Logo />

                    <Search />

                    <NavLink 
                        activeClassName="active"
                        className="navbar__item navbar__link mt-4" 
                        exact
                        to="/category/category-name"
                        onClick={ () => { toggleComponent( 'menu', 'left' ) } }
                    >
                        Shop
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="navbar__item navbar__link" 
                        exact
                        to="/contact"
                        onClick={ () => { toggleComponent( 'menu', 'left' ) } }
                    >
                        Contact Us
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="navbar__item navbar__link" 
                        exact
                        to="/blog"
                        onClick={ () => { toggleComponent( 'menu', 'left' ) } }
                    >
                        Blog
                    </NavLink>
                    <NavLink 
                        activeClassName="active"
                        exact
                        to="/my-account"
                        className="navbar__ui-icon-container navbar__item navbar__link" 
                        onClick={ () => { toggleComponent( 'menu', 'left' ) } }
                    >
                        <i class="fa-solid fa-user navbar__ui-icon mr-2"></i>
                        My Account
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        exact
                        to="/wishlist"
                        className="navbar__ui-icon-container navbar__item navbar__link" 
                        onClick={ () => { toggleComponent( 'menu', 'left' ) } }
                    >
                        <i class="fa-solid fa-heart navbar__ui-icon mr-2"></i>
                        Wishlist
                    </NavLink>

                </div>
            </div>

            <div className='navbar__ui-items'>

                <NavLink 
                    activeClassName="active"
                    exact
                    to="/wishlist"
                    className="navbar__ui-icon-container" 
                >
                    <i class="fa-solid fa-heart navbar__ui-icon"></i>
                </NavLink>

                <NavLink 
                    activeClassName="active"
                    exact
                    to="/my-account"
                    className="navbar__ui-icon-container" 
                >
                    <i class="fa-solid fa-user navbar__ui-icon"></i>
                </NavLink>

                <div className='navbar__ui-icon-container' onClick={ () => { toggleComponent( 'cart', 'right' ) } }>
                    <i className="fa-solid fa-cart-shopping navbar__ui-icon"></i>
                </div>

            </div>

            <Cart />

        </nav>
    )
}
