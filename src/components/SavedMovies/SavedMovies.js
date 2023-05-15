import React, { useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [wasSearched, setWasSearched] = useState(false);

  return (
    <main className='movies-page'>

    </main>
  );
}

export default SavedMovies;
