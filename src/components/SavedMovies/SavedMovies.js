import React, { useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [wasSearched, setWasSearched] = useState(false);

  return (
    <main className='movies-page'>
      <SearchForm
        initialData={''}
        type={props.type}
        movies={props.searchMovies}
        setWasSearched={setWasSearched}
        onSetMovies={props.setMovies}
        onSetIsLoading={setIsLoading}
      />
      {
        isLoading
          ? <Preloader/>
          : <MoviesCardList
            type={props.type}
            savedMovies={props.savedMovies}
            movies={props.movies}
            onDeleteMovie={props.onDeleteMovie}
            wasSearched={wasSearched}
            onServerProblem={props.onServerProblem}
            numberToMap={props.numberToMap}
            onSetNumberToMap={props.onSetNumberToMap}
            moreNumberToMap={props.moreNumberToMap}
          />
      }
    </main>
  );
}

export default SavedMovies;
