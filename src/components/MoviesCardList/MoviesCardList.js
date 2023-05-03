import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
  function handleShowMore() {
    props.onSetNumberToMap(props.numberToMap + props.moreNumberToMap);
  }

  return (
    <section className='movies page__movies section content__section'>
      <ul className='movies__list'>
        {(
          props.movies.slice(0, (props.numberToMap)).map((movie) => {
            let isSaved = false;
            for (let savedMovie of props.savedMovies) {
              if (movie.movieId === savedMovie.movieId) {
                isSaved = true;
                break;
              }
            }

            return <MoviesCard
              key={movie.movieId}
              type={props.type}
              movie={movie}
              onAddMovie={props.onAddMovie}
              onDeleteMovie={props.onDeleteMovie}
              isSaved={isSaved}
            />
          })
        )}
      </ul>
      {
        props.movies.length === 0 && props.wasSearched
          ? <p className='movies__empty-result'>Ничего не найдено</p>
          : null
      }
      {
        props.type !== 'saved' && props.movies.length > props.numberToMap && props.wasSearched
          ? <button onClick={handleShowMore} className='movies__button button' type='button'>Ещё</button>
          : null
      }
      {
        props.onServerProblem
          ? <p className='movies__server-problem'>Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p>
          : null
      }
    </section>
  );
}

export default MoviesCardList;
