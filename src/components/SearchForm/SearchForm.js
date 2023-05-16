import React, { useState, useEffect } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useFormWithValidation } from '../UseFormValidation/UseFormValidation';
import { SHORT_FILM_DURATION } from '../../utils/constants';

function SearchForm(props) {
  const initialSearchParams = {
    isShortMovie: false,
    request: '',
  }
  if (props.searchParams) {
    initialSearchParams.isShortMovie = props.searchParams.isShortMovie;
    initialSearchParams.request = props.searchParams.request;
  }

  const {data, handleChange, errors, resetForm} = useFormWithValidation(props.initialData);
  const [shortMoviesOnly, setShortMoviesOnly] = useState(initialSearchParams.isShortMovie);
  const [searchMovie, setSearchMovie] = useState(initialSearchParams.request);

  useEffect(() => {
    setSearchMovie('');
    resetForm();
  }, [props.type]);

  useEffect(() => {
    if (data !== null) {
      setSearchMovie(data.searchMovie);
    }
  }, [data]);

  function filterMovies() {
    props.onSetIsLoading(true);
    setTimeout(() => {
      let filteredMoviesData = props.movies;
      if (shortMoviesOnly) {
        filteredMoviesData = filteredMoviesData.filter((movie) => movie.duration <= SHORT_FILM_DURATION);
      }
      if (data.searchMovie) {
        filteredMoviesData = props.movies.filter((movie) => movie.nameRU.toLowerCase().includes(data.searchMovie.toLowerCase()));
        if (shortMoviesOnly) {
          filteredMoviesData = filteredMoviesData.filter((movie) => movie.duration <= SHORT_FILM_DURATION);
        }
      }
      if (props.type !== 'saved') {
        props.onSaveSearchParams({
          request: data.searchMovie,
          isShortMovie: shortMoviesOnly,
          result: filteredMoviesData,
        });
      }
      props.onSetMovies(filteredMoviesData);
      props.onSetIsLoading(false);
      props.setWasSearched(true);
    }, 500);
  }

  function handleSubmit(e) {
    e.preventDefault();
    filterMovies();
  }

  return (
    <section className='search-form page__search-form section content__section'>
      <div className='search-form__wrapper'>
        <form onSubmit={handleSubmit} className='search-form__form' onReset={resetForm}>
          <input
            id='searchMovie'
            type='text'
            name='searchMovie'
            className='search-form__input'
            placeholder='Введите название фильма'
            aria-label='searchMovie'
            onChange={handleChange}
            value={searchMovie}
          />
          <span id='searchMovie-error' className='search-form__error'>
            { errors.searchMovie ? errors.searchMovie : null }
          </span>
          <button className='search-form__button button' type='submit'>Найти</button>
        </form>
      </div>
      <FilterCheckbox shortMoviesOnly={shortMoviesOnly} onSetShortMoviesOnly={setShortMoviesOnly}/>
    </section>
  );
}

export default SearchForm;
