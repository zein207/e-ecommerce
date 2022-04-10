import React from 'react'
import { Link } from 'react-router-dom'

export const DoubleBanner = ({ img1, img2, title1, title2, link1, link2 }) => {
    return (
      <div className='flex-center'>

        <div className='double-b__main-container mt-5 w-90'>

          <Link className='double-b__element double-b__element-first' to={ link1 }>
            <img className='double-b__img' src={ img1 }></img>
            <h4 className='double-b__title'>{ title1 }</h4>
          </Link>

          <div className='double-b__text'>
            <h2>SALE</h2>
            <p>#AprilStore</p>
          </div>

          <Link className='double-b__element double-b__element-second' to={ link2 }>
            <img className='double-b__img' src={ img2 }></img>
            <h4 className='double-b__title'>{ title2 }</h4>
          </Link>

        </div>

      </div>
    )
}
