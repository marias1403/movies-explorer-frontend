import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <section className='search-form page__search-form section content__section'>
      <div className='search-form__wrapper'>
        <form className='search-form__form'>
          <input
            id='searchMovie'
            type='text'
            name='searchMovie'
            className='search-form__input'
            placeholder='Фильм'
            required
            aria-label='searchMovie'
          />
          <button className='search-form__button button' type='submit'>Найти</button>
        </form>
      </div>
      <FilterCheckbox />
    </section>
  );
}

export default SearchForm;
