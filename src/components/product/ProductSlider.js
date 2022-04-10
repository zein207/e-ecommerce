import React from 'react';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import { ProductSummary } from './ProductSummary';
import { products } from '../../data/products';

export const ProductSlider = () => {
    const sliderSettings = {
        type: 'loop',
        rewind: true,
        gap: '5px',
        autoplay: true,
        pauseOnHover: true,
        interval: 4000,
        perPage: 1,
        pagination: false,
        mediaQuery: 'min',

        breakpoints: {
            768: {
                perPage: 2
            },
            1024: {
                perPage: 3,
                arrows: false,
                gap: '1rem'
            }
        }
    }

    // console.log(products);

    return (

        <div className='product-slider__main-container'>
            <Splide aria-label="Our Fancy Products" options={ sliderSettings }>

                {
                    products.map( product => (
                        <SplideSlide key={ product.productId }>
                            <ProductSummary
                                name={ product.name }
                                price={ product.price }
                                img={ product.img }
                            />
                        </SplideSlide>
                    ))
                }


            </Splide>
        </div>
    )
}
