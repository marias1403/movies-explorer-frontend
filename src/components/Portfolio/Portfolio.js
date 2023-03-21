import React from 'react';
import linkIcon from '../../images/link_icon.svg';

function Portfolio() {
  return (
    <section className='portfolio page__portfolio section content__section'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__list'>
        <a className='portfolio__link' href='https://github.com/marias1403/how-to-learn#научиться-учиться' target='_blank' rel='noopener noreferrer'>
          <li className='portfolio__link-wrapper link'>
            <h3 className='portfolio__subtitle'>Статичный сайт</h3>
            <img className='portfolio__link-icon' src={linkIcon} alt='Иконка ссылки'/>
          </li>
        </a>
        <a className='portfolio__link' href='https://marias1403.github.io/russian-travel/index.html' target='_blank' rel='noopener noreferrer'>
          <li className='portfolio__link-wrapper link'>
            <h3 className='portfolio__subtitle'>Адаптивный сайт</h3>
            <img className='portfolio__link-icon' src={linkIcon} alt='Иконка ссылки'/>
          </li>
        </a>
        <a className='portfolio__link' href='https://github.com/marias1403/react-mesto-api-full' target='_blank' rel='noopener noreferrer'>
          <li className='portfolio__link-wrapper portfolio__link-wrapper_hidden-border-bottom link'>
            <h3 className='portfolio__subtitle'>Одностраничное приложение</h3>
            <img className='portfolio__link-icon' src={linkIcon} alt='Иконка ссылки'/>
          </li>
        </a>
      </ul>
    </section>
  );
}

export default Portfolio;
