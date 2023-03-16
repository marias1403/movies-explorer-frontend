import React from 'react';
import linkIcon from '../../images/link_icon.svg';

function Portfolio() {
  return (
    <section className='portfolio page__portfolio section content__section'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <div className='portfolio__link-wrapper'>
        <a className='portfolio__link'>Статичный сайт</a>
        <img className='portfolio__link-icon' src={linkIcon} alt='Иконка ссылки'/>
      </div>
      <div className='portfolio__link-wrapper'>
        <a className='portfolio__link'>Адаптивный сайт</a>
        <img className='portfolio__link-icon' src={linkIcon} alt='Иконка ссылки'/>
      </div>
      <div className='portfolio__link-wrapper'>
        <a className='portfolio__link'>Одностраничное приложение</a>
        <img className='portfolio__link-icon' src={linkIcon} alt='Иконка ссылки'/>
      </div>
    </section>
  );
}

export default Portfolio;
