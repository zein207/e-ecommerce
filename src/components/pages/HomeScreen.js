import React from 'react';
import { CategoryBanner } from '../ui/banner/CategoryBanner';
import { DoubleBanner } from '../ui/banner/DoubleBanner';
import { SingleBanner } from '../ui/banner/SingleBanner';
import { MainSlider } from '../ui/MainSlider';

export const HomeScreen = () => {
  return (
    <div>

      <MainSlider />

      <div className='category__main-container'>

        <CategoryBanner
          img='images/banner-01.jpg' 
          title='#BestInTech'
          cta='Shop Now'
          ctaLink='/category/category-name'
        />

      </div>

      <SingleBanner
        img='images/banner-03.jpg' 
        title='#NewTech'
        subtitle='E-commerce Tech Site'
        cta='Shop Now'
        ctaLink='/category/category-name'
      />

      <div className='category__main-container'>

        <CategoryBanner
          img='images/banner-02.jpg' 
          title='#Accessories'
          cta='Shop Now'
          ctaLink='/category/category-name'
        />

      </div>

      <DoubleBanner
        img1='images/banner-05.jpg'
        img2='images/banner-06.jpg'
        title1='New'
        title2='Accessories'
        link1='/category/category-name'
        link2='/category/category-name'
      />

    </div>
  )
}
