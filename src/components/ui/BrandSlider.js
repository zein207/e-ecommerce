import React from 'react';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export const BrandSlider = () => {

    const sliderSettings = {
        type: 'loop',
        rewind: true,
        gap: '3rem',
        autoplay: true,
        pauseOnHover: true,
        interval: 4000,
        perPage: 3,
        padding: '40px',
        pagination: false,
        mediaQuery: 'min',

        breakpoints: {
            768: {
                destroy: true
            }
        }
    }

    return (

        <div className='slider-b__main-container'>
            <Splide aria-label="Brands" options={ sliderSettings }>

                <SplideSlide>
                    <img src="images/brand-logos/apple-logo.svg" alt="Apple Logo" className='slider-b__img mw-40'/>
                </SplideSlide>

                <SplideSlide>
                    <img src="images/brand-logos/samsung-logo.svg" alt="Samsung Logo" className='slider-b__img'/>
                </SplideSlide>

                <SplideSlide>
                    <img src="images/brand-logos/beats-logo.svg" alt="Beats Logo" className='slider-b__img mw-40'/>
                </SplideSlide>

                <SplideSlide>
                    <img src="images/brand-logos/xiaomi-logo.svg" alt="Xiaomi Logo" className='slider-b__img mw-40'/>
                </SplideSlide>

                <SplideSlide>
                    <img src="images/brand-logos/sony-logo.svg" alt="Sony Logo" className='slider-b__img'/>
                </SplideSlide>

                <SplideSlide>
                    <img src="images/brand-logos/microsoft-logo.svg" alt="Microsoft Logo" className='slider-b__img'/>
                </SplideSlide>

            </Splide>
        </div>
    )
}
