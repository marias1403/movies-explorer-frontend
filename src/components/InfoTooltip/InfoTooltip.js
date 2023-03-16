import React from 'react';

function InfoTooltip() {
  return (
    <div className='popup'>
      <div className='popup__container'>
        <h2 className='popup__title'>404</h2>
        <p className='popup__text'>Страница не найдена</p>
        <button className='popup__button button'>Назад</button>
      </div>
    </div>
  );
}

export default InfoTooltip;
