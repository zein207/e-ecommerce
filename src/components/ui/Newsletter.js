import React from 'react'

export const Newsletter = () => {
  return (
    <div className='newsletter__main-container'>
        <h3>Newsletter</h3>
        <h4>Subscribe to our newsletter</h4>

        <form className='newsletter__form'>

            <input
                type="text"
                placeholder="Enter your email"
                className="form-control newsletter__input"
                name="email"
                autoComplete="off"
            />
            <button className='newsletter__icon'>
                <i className="fa-solid fa-envelope"></i>
            </button>
        </form>
    </div>
  )
}
