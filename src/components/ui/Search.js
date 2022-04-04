import React from 'react'

export const Search = () => {

  const cleanInput = (e) => {
    e.preventDefault();
    const searchInput =document.querySelector('.search__input');
    searchInput.value = '';
    searchInput.click();
  }
  return (
    <div className='search__main-container mt-4'>

      <form
        // onSubmit= {handleSearch}
      >
        <button className='navbar__ui-icon-container search__icon search__icon-search' type='submit'>
            <i className="fa-solid fa-magnifying-glass navbar__ui-icon"></i>
        </button>

        <input
            type="text"
            placeholder="Search"
            className="form-control search__input"
            name="searchText"
            autoComplete="off"
            // value= { searchText }
            // onChange={ handleInputChange }
        />

        <button className='navbar__ui-icon-container search__icon search__icon-clean' onClick={ cleanInput }>
          <i class="fa-solid fa-circle-xmark navbar__ui-icon"></i>
        </button>

      </form>
    </div>
  )
}
