import React from 'react';
import { Link } from 'react-router-dom';

export const CategoryBanner = ({ img, title, cta, ctaLink }) => {
    return (
        <div className='category-b__main-container mt-5 w-90'>
            <h2 className='category-b__title'>{ title }</h2>
            <img className='category-b__img mt-5' src={ img } alt=''></img>
            <Link to={ ctaLink } className='btn btn-cta btn-cta-inverted'>{ cta }</Link>
        </div>
    )
}
