import React from 'react';
import { useLocation } from 'react-router-dom';

function MoviesCard(props) {
  let duration = props.movie.duration;
  const durationInHours = Math.floor(duration / 60);
  const durationInMinutes = duration % 60;
  let durationString;
  if (duration < 60) {
    durationString = `${durationInMinutes} мин`;
  } else {
    durationString = `${durationInHours} ч ${durationInMinutes} мин`;
  }

  function handleAddMovieClick() {
    props.onAddMovie(props.movie);
  }

  function handleRemoveMovieClick() {
    props.onDeleteMovie(props.movie.id);
  }

  let movieAddButtonClassName = (
    props.isSaved ? 'movie__button_added' : ''
  );

  return (
    <li className='movie'>
      <div className='movie__description'>
        <h2 className='movie__name'>{props.movie.nameRU}</h2>
        <p className='movie__duration'>{durationString}</p>
      </div>
      <a className='movie__link' href={props.movie.trailer} target='_blank' rel='noopener noreferrer'>
        <img className='movie__cover' src={props.movie.thumbnail} alt={props.movie.nameRU}/>
      </a>
      {
        props.type === 'saved'
         ? <button onClick={handleRemoveMovieClick} className='movie__button button movie__button_remove' type='button'></button>
         : <button onClick={handleAddMovieClick} className={`movie__button button ${movieAddButtonClassName}`} type='button'>Сохранить</button>
      }
    </li>
  );
}

export default MoviesCard;
