import React, { useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [wasSearched, setWasSearched] = useState(false);

  return (
    <main className='movies-page'>
      <SearchForm
        type={props.type}
        movies={props.searchMovies}
        setWasSearched={setWasSearched}
        onSetMovies={props.setMovies}
        onSetIsLoading={setIsLoading}
        onSaveSearchParams={props.onSaveSearchParams}
        searchParams={props.searchParams}
      />
      {
        isLoading
          ? <Preloader/>
          : <MoviesCardList
            type={props.type}
            savedMovies={props.savedMovies}
            movies={props.movies.length !== 0 ? props.movies : props.searchParams.result}
            onAddMovie={props.onAddMovie}
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

export default Movies;
