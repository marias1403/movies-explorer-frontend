import React from 'react';
import avatar from '../../images/portfolio-avatar.png';

function AboutMe() {
  return (
    <section className='about-me page__about-me section content__section'>
      <h2 className='section__title'>Студент</h2>
      <div className='about-me__wrapper'>
        <div className='about-me__description-wrapper'>
          <h3 className='about-me__name'>Мария Архипова</h3>
          <p className='about-me__job'>Фронтенд-разработчик, 26 лет</p>
          <p className='about-me__description'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <a className='about-me__link link' href='https://github.com/marias1403' target='_blank' rel='noopener noreferrer'>Github</a>
        </div>
        <img className='about-me__avatar' src={avatar} alt='Фото студента'/>
      </div>
    </section>
  );
}

export default AboutMe;
