import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
  return (
    <section className='movies page__movies section content__section'>
      <ul className='movies__list'>
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </ul>
      <button className='movies__button button' type='button'>Ещё</button>
    </section>
  );
}

export default MoviesCardList;
