import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies() {
  return (
    <main className='movies-page'>
      <SearchForm />
      <MoviesCardList />
    </main>
  );
}

export default SavedMovies;
