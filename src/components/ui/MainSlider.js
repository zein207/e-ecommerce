import React from 'react';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';

export const MainSlider = () => {

    const sliderSettings = {
        rewind: true,
        gap: '1rem',
        autoplay: true,
        pauseOnHover: true,
        interval: 4000
    }

    const showText = ( slide ) => {
        slide.root.querySelector('.is-active').querySelector('.slider__text-container').classList.add('animate__fadeInDown');
    }

    const hideText = ( slide ) => {
        const sliders = slide.root.querySelectorAll('.splide__slide');

        sliders.forEach( slide => {
            if( slide.classList.contains('is-active') ) {
                return
            }

            slide.querySelector('.slider__text-container').classList.remove('animate__fadeInDown');
        });
    }

    return (

        <div className='slider__main-container'>
            <Splide
                aria-label="My Favorite Images" 
                options={ sliderSettings } 
                onActive={ ( slide ) => { showText( slide ) } }
                onInactive={ ( slide ) => { hideText( slide ) } }
            >
                <SplideSlide>
                    <img src="images/banner-m-01.jpg" alt="A computer" className='slider__img'/>
                    <div className='slider__text-container animate__animated'>
                        <p>#AprilStore</p>
                        <h1 className='mt-1'>
                            Simplify
                            <br />
                            Everything.
                        </h1>
                        <Link to='/plp' className='btn btn-cta mt-4'>Explore Now</Link>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <img src="images/banner-m-02-a.jpg" alt="An iphone" className='slider__img'/>
                    <div className='slider__text-container animate__animated'>
                        <p>#AprilStore</p>
                        <h1 className='mt-1'>
                            Need it now?
                            <br />
                            Free Shipping!
                        </h1>
                        <Link to='/plp' className='btn btn-cta mt-4'>Buy Now</Link>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <img src="images/banner-m-04.jpg" alt="An iphone" className='slider__img'/>
                    <div className='slider__text-container animate__animated'>
                        <p>#AprilStore</p>
                        <h1 className='mt-1'>
                            Choose the perfect
                            <br />
                            tech for you.
                        </h1>
                        <Link to='/plp' className='btn btn-cta mt-4'>Explore Now</Link>
                    </div>
                </SplideSlide>
            </Splide>
        </div>
    )
}
