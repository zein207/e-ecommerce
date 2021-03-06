import React from 'react';
import { ProductSlider } from '../product/ProductSlider';
import { CategoryBanner } from '../ui/banner/CategoryBanner';
import { DoubleBanner } from '../ui/banner/DoubleBanner';
import { SingleBanner } from '../ui/banner/SingleBanner';
import { BrandSlider } from '../ui/BrandSlider';
import { MainSlider } from '../ui/MainSlider';

export const HomeScreen = () => {
  return (
    <div>

      <MainSlider />

      <div className='flex-center mt-5'>

        <div className='category__main-container w-90'>

          <CategoryBanner
            img='images/banner-01.jpg' 
            title='#BestInTech'
            cta='Shop Now'
            ctaLink='/category/category-name'
          />

          <div className='category__product-sliders'>
            <ProductSlider />
            <ProductSlider />
          </div>

        </div>


      </div>

      <SingleBanner
        img='images/banner-03.jpg'
        imgD='images/banner-d-01.jpg'
        title='#NewTech'
        subtitle='E-commerce Tech Site'
        cta='Shop Now'
        ctaLink='/category/category-name'
      />

      <div className='flex-center mt-5'>
        <div className='category__main-container category__main-container--reverse w-90'>

          <CategoryBanner
            img='images/banner-02.jpg' 
            title='#Accessories'
            cta='Shop Now'
            ctaLink='/category/category-name'
          />

          <div className='category__product-sliders'>
            <ProductSlider />
            <ProductSlider />
          </div>

        </div>
      </div>

      <DoubleBanner
        img1='images/banner-05.jpg'
        img2='images/banner-06.jpg'
        title1='New'
        title2='Accessories'
        link1='/category/category-name'
        link2='/category/category-name'
      />

      <BrandSlider />

    </div>
  )
}
