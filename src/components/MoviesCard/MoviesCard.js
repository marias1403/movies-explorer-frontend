import React from 'react';
import movieImage from '../../images/movie_image.png';

function MoviesCard() {
  return (
    <li className='movie'>
      <div className='movie__description'>
        <h2 className='movie__name'>В погоне за Бенкси</h2>
        <p className='movie__duration'>27 минут</p>
      </div>
      <img className='movie__cover' src={movieImage} alt='Люди около машины'/>
      <button className='movie__button button' type='button'>Сохранить</button>
    </li>
  );
}

export default MoviesCard;
